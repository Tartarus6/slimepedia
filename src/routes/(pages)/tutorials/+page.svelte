<script lang="ts">
	import { onMount } from 'svelte';
	import { soundManager } from '$lib';
	import { getNavigateIndex, navigationKeys } from '$lib/scripts/utils';
	import DividerComponent from '$lib/components/DividerComponent.svelte';
	import type { TutorialsPageData, TutorialTextBlock, TutorialIconBlock } from './+page.ts';
	import ScrollableComponent from '$lib/components/ScrollableComponent.svelte';
	import ThreeColumnPageComponent from '$lib/components/ThreeColumnPageComponent.svelte';

	let {data}: {data: TutorialsPageData} = $props();

	let selectedIndex = $state(0);
	// svelte-ignore state_referenced_locally
	let selectedItem = $state(data.content[selectedIndex]);

	onMount(() => {
		window.addEventListener('keydown', handleNavigateKeydown);

		return () => {
			// clean up the event listeners when component is destroyed
			window.removeEventListener('keydown', handleNavigateKeydown);
		};
	});

	function setSelectedItem(item: any, playSound?: boolean) {
		selectedItem = item;
		let newSelectedIndex = data.content.indexOf(item);

		soundManager.playClick7();

		selectedIndex = newSelectedIndex;
	}

	function handleNavigateKeydown(event: KeyboardEvent) {
		if (!navigationKeys.up.concat(navigationKeys.down).includes(event.key)) {
			return;
		}

		const newIndex = getNavigateIndex(1, data.content.length, selectedIndex, event);

		setSelectedItem(data.content[newIndex]);
	}
</script>



<!-- main content -->
<ThreeColumnPageComponent icon={data.icon} title={data.title} itemName={selectedItem.title} itemBlurb={selectedItem.blurb}>
	<!-- grid -->
	<div class="px-6">
		<div class="flex flex-col h-full grid-cols-1 grid-rows-{data.content.length} gap-3">
			{#each data.content as item}
				<button class="group" onmousedown={() => setSelectedItem(item)} onmouseenter={() => soundManager.playRollover()} aria-label="{item.title} button">
					<div class="grid w-full">
						<div
							class="col-start-1 row-start-1 rounded-full w-full h-10 p-3 transition-transform duration-275 ease-[cubic-bezier(.53,1.79,.58,1.05)]
							{selectedItem.title === item.title
								? 'scale-[1.1] bg-lightish-blue'
								: 'scale-100 group-hover:scale-[1.1] group-hover:bg-lighter-blue'}"
						>
						</div>
						<span class="col-start-1 row-start-1 z-10 self-center justify-self-start px-6 text-xl origin-left transition-transform duration-275 ease-[cubic-bezier(.53,1.79,.58,1.05)] pointer-events-none {selectedItem.title === item.title ? 'scale-[1.1] text-white!' : 'group-hover:scale-[1.1] group-hover:text-white!'}">{item.title}</span>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<!-- tutorial content -->
	<ScrollableComponent class="pt-4" reactiveValue={selectedIndex}>
		<div class="flex flex-col gap-4">
			<!-- for each content block (like a paragraph block or an input block with each row having input icons and corresponding text) -->
			{#each selectedItem.pageContent as contentBlock}
				<!-- if current block is an icon block (several lines that start with icons, where text after icons must line up) -->
				{#if Array.isArray(contentBlock)}
					<div class="grid grid-cols-[auto_1fr] gap-y-3">
						<!-- for each row -->
						{#each contentBlock as row}
							<div class="flex flex-row mr-4 gap-1 place-content-center">
								<!-- icons that goes in a box, usually for keyboard keys -->
								{#if row.boxIcons}
									{#each row.boxIcons as icon}
										<div class="size-8 content-center justify-center text-center rounded-md border-2 border-white bg-bluegray">
											<!-- text icon (like for pressing 'F' key) -->
											{#if typeof icon === 'string'}
												<div class='translate-y-[0.1em]'>
													<span class="text-xl" style="color: white; font-family: Hemisphers;">{icon}</span>
												</div>
											<!-- else it's an image icon like for pressing the shift key -->
											{:else}
												<enhanced:img src={icon} alt="icon" />
											{/if}
										</div>
									{/each}
								{/if}
								<!-- bare icons, usually for mouse or controller buttons -->
								{#if row.bareIcons}
									{#each row.bareIcons as icon}
										<div class="size-8">
											<enhanced:img src={icon} alt="icon" class="size-8 p-0.5" />
										</div>
									{/each}
								{/if}
							</div>
							<span class="col-start-2 self-center text-lg">{row.text}</span>
						{/each}
					</div>
				<!-- else it's a text block -->
				{:else}
					<div>
						{#if contentBlock.sectionTitle}
							<div class="bg-blueblack px-4 py-1 rounded-full mb-2">
								<span class="text-white! text-2xl">{contentBlock.sectionTitle}</span>
							</div>
						{/if}
						<span class="whitespace-pre-line text-lg">{@html contentBlock.text}</span>
					</div>
				{/if}
			{/each}
		</div>
	</ScrollableComponent>

	<!-- tutorial image -->
	<div>
		<enhanced:img
			src={selectedItem.image}
			alt={selectedItem.title + " image"}
			class=" col-start-1 row-start-1 size-auto"
		/>
	</div>
</ThreeColumnPageComponent>
