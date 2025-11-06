<script lang="ts">
	//TODO: make a button component

	import { onMount } from 'svelte';
	import InfoComponent from '$lib/components/InfoComponent.svelte';
	import FactsComponent from '$lib/components/FactsComponent.svelte';
	import ArrowComponent from './ArrowComponent.svelte';
	import { soundManager } from '$lib/scripts/sound';
	import type { FullPageData } from '$lib';
	import { getNavigateIndex, navigationKeys } from '$lib/scripts/utils';
	import ThreeColumnPageComponent from './ThreeColumnPageComponent.svelte';
	import ScrollableComponent from './ScrollableComponent.svelte';

	interface Props {
		data: FullPageData;
	}

	let props: Props = $props();

	let currentPage = $state(0);
	const cols = 4;
	const rows = 6;
	const itemsPerPage = cols * rows;

	let paginatedContent = $derived(props.data.content.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
	const pageCount = Math.ceil(props.data.content.length / itemsPerPage);
	let selectedIndex = $state(0);
	// svelte-ignore state_referenced_locally
	let selectedItem = $state(paginatedContent[selectedIndex]);

	onMount(() => {

		window.addEventListener('keydown', handleEQ);
		window.addEventListener('keydown', handleNavigateKeydown);

		return () => {

			window.removeEventListener('keydown', handleEQ);
			window.removeEventListener('keydown', handleNavigateKeydown);
		};
	});

	function setSelectedItem(item: any) {
		selectedItem = item;
		selectedIndex = paginatedContent.indexOf(item);
		soundManager.playClick7();
	}

	function setCurrentPage(new_page: number) {
		if (new_page >= pageCount) {
			currentPage = 0;
		} else if (new_page < 0) {
			currentPage = pageCount - 1;
		}
		if (new_page < pageCount && new_page >= 0) {
			currentPage = new_page;
		}
		selectedIndex = 0;
		setSelectedItem(paginatedContent[selectedIndex]);
	}

	function handleNavigateKeydown(event: KeyboardEvent) {
		if (!navigationKeys.up.concat(navigationKeys.down, navigationKeys.left, navigationKeys.right).includes(event.key)) {
			return;
		}
		const newIndex = getNavigateIndex(cols, paginatedContent.length, selectedIndex, event);

		selectedIndex = newIndex;
		setSelectedItem(paginatedContent[selectedIndex]);
	}

	const handleEQ = (event: { key: string }) => {
		if (event.key === 'e') {
			setCurrentPage(currentPage + 1);
			soundManager.playClick5();
		} else if (event.key === 'q') {
			setCurrentPage(currentPage - 1);
			soundManager.playClick6();
		}
	};
</script>

<!-- main content -->
<ThreeColumnPageComponent icon={props.data.icon} title={props.data.title} itemName={selectedItem.name} itemBlurb={selectedItem.blurb}>
	<!-- grid -->
	<div class="grid h-full px-6 grid-rows-[1fr_auto]">
		<div class="grid h-fit grid-cols-{cols} grid-rows-{rows} gap-2">
			{#each paginatedContent as item}
				<button onmousedown={() => setSelectedItem(item)} onmouseenter={() => soundManager.playRollover()} aria-label="{item.name} button">
					<div
						class="group relative aspect-square overflow-visible rounded-3xl border-4 p-3 duration-275 ease-[cubic-bezier(.53,1.79,.58,1.05)]
						{selectedItem.name === item.name ? 'z-20 scale-[1.1] border-lightish-blue bg-light-blue' : 'scale-100 border-transparent bg-lightish-beige hover:z-10 hover:scale-[1.1] hover:bg-lighter-blue'}"
						style="transition-property: scale;"
					>
						<enhanced:img src={item.image} alt={item.name} class="scale-110 duration-275 ease-[cubic-bezier(.53,1.79,.58,1.05)] group-hover:scale-[1.35]" style="transition-property: scale" />
					</div>
				</button>
			{/each}
		</div>
		<!-- page buttons -->
		{#if pageCount > 1}
			<div class="place-self-end grid h-fit w-full grid-cols-3 grid-rows-1">
				<button onmousedown={() => {setCurrentPage(currentPage - 1); soundManager.playClick6()}}>
					<div
						class="flex flex-row duration-200 ease-[cubic-bezier(.53,1.79,.58,1.05)] hover:scale-[1.2]"
					>
						<ArrowComponent flipped={true} class="size-16" />
						<div
							class=" aspect-square w-fit content-center justify-center self-center rounded-2xl border-4 border-white bg-bluegray px-2 duration-200 ease-[cubic-bezier(.53,1.79,.58,1.05)] group-hover:scale-[1.2]"
						>
							<div class="translate-y-[0.1em]">
								<span class="text-3xl font-bold" style="color: white">Q</span>
							</div>
						</div>
					</div>
				</button>
				<div class=" flex flex-row items-center gap-2 justify-self-center">
					{#each Array.from({ length: pageCount }, (_, index) => index) as index}
						<button
							aria-label="page button" class="size-4 rounded-full {currentPage === index ? 'bg-dark-pink' : 'border-2 border-lightish-beige'}" onmousedown={() => {setCurrentPage(index); soundManager.playClick6()}}></button>
					{/each}
				</div>
				<button onmousedown={() => {setCurrentPage(currentPage + 1); soundManager.playClick5()}} class="justify-self-end">
					<div
						class="group flex flex-row duration-200 ease-[cubic-bezier(.53,1.79,.58,1.05)] hover:scale-[1.2]"
					>
						<div
							class=" aspect-square w-fit content-center justify-center self-center rounded-2xl border-4 border-white bg-bluegray px-2"
						>
							<div class="translate-y-[0.1em]">
								<span class="text-3xl font-bold" style="color: white">E</span>
							</div>
						</div>
						<ArrowComponent class="size-16" />
					</div>
				</button>
			</div>
		{/if}
	</div>

	<!-- item facts -->
	<div class="grid h-fit grid-rows-2 overflow-x-visible">
		<!-- item image -->
		<div class="grid">
			<img
				src={selectedItem.image.img.src}
				alt={selectedItem.name}
				class=" col-start-1 row-start-1 h-80 w-80 place-self-center"
			/>
			{#if selectedItem.plort_image !== undefined}
				<img
					src={selectedItem.plort_image.img.src}
					alt={selectedItem.name}
					class=" col-start-1 row-start-1 size-20 place-self-end"
				/>
			{/if}
		</div>

		<!-- item facts -->
		{#if selectedItem.facts && props.data.categories}
			<FactsComponent
				categories={props.data.categories}
				facts={selectedItem.facts}
			/>
		{/if}
	</div>

	<!-- item info -->
	<ScrollableComponent class="mt-4" reactiveValue={selectedIndex}>
		{#each selectedItem.info as infoSection}
			<InfoComponent
				icon={infoSection.icon}
				title={infoSection.title}
				content={infoSection.content}
			/>
		{/each}
	</ScrollableComponent>
</ThreeColumnPageComponent>
