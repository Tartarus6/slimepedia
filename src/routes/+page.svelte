<script lang="ts">
	import { soundManager } from '$lib';
	import { images } from '$lib/scripts/assets';
	import { onMount } from 'svelte';
	import type { HomePageData } from './+page';
	import type { HomeContentItem } from './proxy+page';
	import { goto } from '$app/navigation';
	import { getNavigateIndex, navigationKeys } from '$lib/scripts/utils';
	import TitleComponent from '$lib/components/TitleComponent.svelte';
	// import ButtonComponent from '$lib/components/ButtonComponent.svelte';

	const cols = 3; // number of columns in the grid

	let {data}: {data: HomePageData} = $props();

	// selected item for keyboard navigation
	let selectedIndex = $state(-1);
	// svelte-ignore state_referenced_locally
	let savedSelectedIndex = $state(selectedIndex);
	let selectedItem : HomeContentItem | undefined = $state(undefined);

	let timeIcon = $state(images.pedia.timeSun);
	let time = $state('');

	updateTime();

	// update time every minute
	$effect(() => {
		const now = new Date();
		const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds() + 10;  // +10 just to reduce the chance of checking before the minute changes

		const initialTimeout = setTimeout(() => {
			updateTime();

			const interval = setInterval(() => {
				updateTime();
			}, 60000);

			return () => clearInterval(interval);
		}, msUntilNextMinute);

		return () => clearTimeout(initialTimeout);
	});

	function updateTime() {
		const d = new Date();
		let hours = d.getHours();
		let minutes = d.getMinutes();
		time = hours + ':' + minutes.toString().padStart(2, '0')

		if ((hours == 19 && minutes >= 12) || hours > 19) {
			timeIcon = images.pedia.timeMoon;
		} else if ((hours == 16 && minutes >= 48) || hours > 16) {
			timeIcon = images.pedia.timeSunriseSunset;
		} else if ((hours == 7 && minutes >= 12) || hours > 7) {
			timeIcon = images.pedia.timeSun;
		} else if ((hours == 4 && minutes >= 48) || hours > 4) {
			timeIcon = images.pedia.timeSunriseSunset;
		} else {
			timeIcon = images.pedia.timeMoon;
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleNavigateKeydown);

		return () => {
			if (window) {
				window.removeEventListener('keydown', handleNavigateKeydown);
			}
		};
	})

	function handleNavigateKeydown(event: KeyboardEvent) {
		// returning to previously selected item
		if (navigationKeys.up.concat(navigationKeys.down, navigationKeys.left, navigationKeys.right).includes(event.key)) {
			if (selectedIndex === -1 && savedSelectedIndex !== -1) {
				event.preventDefault();
				selectedIndex = savedSelectedIndex;
				selectedItem = data.content[selectedIndex];
				soundManager.playClick4();
				return;
			}
		}

		let newIndex = getNavigateIndex(cols, data.content.length, selectedIndex, event);

		if (newIndex !== selectedIndex) {
			event.preventDefault();

			selectedIndex = newIndex;
			selectedItem = data.content[selectedIndex];
			soundManager.playClick4();
		}

		if (navigationKeys.select.includes(event.key)) {
			if (selectedItem) {
				event.preventDefault();
				soundManager.playClick2();
				goto(selectedItem.link);
			}
		}
	}
</script>

<div class="grid h-full grid-cols-1 grid-rows-1 overflow-hidden col-start-1 row-start-1">
	<!-- top bar-->
	<div class="z-10 col-start-1 row-start-1 grid h-fit grid-cols-2 grid-rows-1">
		<TitleComponent icon={data.icon} title={data.title}></TitleComponent>
		<div class="flex gap-8 place-self-end">
			<span class="text-xl text-blueblack" style="font-family: Hemisphers;">
				<enhanced:img
					src={timeIcon}
					alt="time icon"
					class="inline-block size-5 align-sub"
				/>
				{time}
			</span>
			<span class="text-xl text-blueblack" style="font-family: Hemisphers;">
				<enhanced:img
					src={images.miscIcons.newbuck}
					alt="coins icon"
					class="inline-block size-5 align-sub"
				/>
				10450
			</span>
			<span class="text-xl">
				<enhanced:img
					src={images.pedia.wifi}
					alt="coins icon"
					class="inline-block size-5 align-sub"
				/>
			</span>
		</div>
	</div>

	<div class="z-10 col-start-1 row-start-1 mx-36 my-10">
		<div
			class="col-start-1 row-start-1 grid h-full grid-cols-{cols} grid-rows-3 items-center justify-items-center"
		>
			{#each data.content as button, i}
				<a href={button.link} class="size-40" data-sveltekit-preload-data="hover" onclick={() => {soundManager.playClick2()}} onmouseenter={() => {soundManager.playRollover(); selectedIndex = i; selectedItem = button;}} onmouseleave={() => {savedSelectedIndex = selectedIndex; selectedIndex = -1; selectedItem = undefined;}}>
					<div class="group h-fit w-fit">
						<div
							class="grid h-full w-full justify-items-center transition-transform duration-200 ease-[cubic-bezier(.53,1.79,.58,1.05)] {selectedItem && selectedItem.name === button.name ? 'scale-[1.2]' : ''}"
						>
							<div
								class="relative aspect-square scale-100 rounded-main border-[0.45em] p-3 {selectedItem && selectedItem.name === button.name ? 'border-lightish-blue bg-light-blue' : 'border-transparent bg-lightish-beige'}"
							>
								<enhanced:img
									src={button.image}
									alt="slime icon"
									class="transition-transform {selectedItem && selectedItem.name === button.name ? 'animate-wiggle' : ''}"
								/>
							</div>
							<div class="mt-1 min-w-full rounded-full px-4 text-center {selectedItem && selectedItem.name === button.name ? 'bg-dark-pink' : ''}">
								<div class="translate-y-[0.075em]">
									<span
										class="text-3xl font-bold translate-y-20 {selectedItem && selectedItem.name === button.name ? 'text-white!' : ''}"
										style="font-family: Lexend; letter-spacing: 0em;"
									>
										{button.name}
									</span>
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<div class="col-start-1 row-start-2 place-self-end">
    <div class="inline-flex h-9 w-full place-content-end">
		<div class="h-full content-center justify-center rounded-xl border-4 border-white bg-bluegray">
			<enhanced:img src={images.input.keyboard.space} class="size-8 p-0.5" />
		</div>
		<div class="translate-y-0.5 pl-2">
			<span class="text-2xl"> Select </span>
		</div>
    </div>
</div>
