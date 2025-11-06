<script lang="ts">
	//todo: make a button component
	//todo: make the slime image in the button 'bounce', not the whole button
	//todo: fix 'divFacts is null' error when resizing main page after leaving slime page
	// bla bla

	import { onDestroy, tick } from 'svelte';
	import { onMount } from 'svelte';
	import DividerComponent from './DividerComponent.svelte';
	import { soundManager } from '$lib/scripts/sound';
	import { getNavigateIndex, navigationKeys } from '$lib/scripts/utils';
	import type { FullPageData } from '$lib';
	import ThreeColumnPageComponent from './ThreeColumnPageComponent.svelte';
	import ScrollableComponent from './ScrollableComponent.svelte';

	interface Props {
		data: FullPageData;
		cols: number;
		rows: number;
	}

	let props: Props = $props();

	let selectedIndex = $state(0);
	// svelte-ignore state_referenced_locally
	let selectedItem = $state(props.data.content[selectedIndex]);

	let divGrid: HTMLDivElement;
	let divInfo: HTMLDivElement;
	let scrollBar: HTMLDivElement;
	let scrollThumb: HTMLDivElement;
	let divImage: HTMLDivElement;

	let cols = Math.round(props.cols);
	let rows = Math.round(props.rows);

	onMount(() => {
		window.addEventListener('keydown', handleNavigateKeydown);

		return () => {
			window.removeEventListener('keydown', handleNavigateKeydown);
		};
	});

	function setSelectedItem(item: any) {
		selectedItem = item;
		soundManager.playClick7();
	}

	function handleNavigateKeydown(event: KeyboardEvent) {
			if (!navigationKeys.up.concat(navigationKeys.down, navigationKeys.left, navigationKeys.right).includes(event.key)) {
			return;
		}
		const newIndex = getNavigateIndex(cols, props.data.content.length, selectedIndex, event);

		selectedIndex = newIndex;
		setSelectedItem(props.data.content[selectedIndex]);
	}
</script>

<!-- main content -->
<ThreeColumnPageComponent icon={props.data.icon} title={props.data.title} itemName={selectedItem.name} itemBlurb={selectedItem.blurb}>
	<!-- grid -->
	<div class="h-full px-6">
		<div class="grid h-fit grid-cols-{cols} grid-rows-{rows} gap-3">
			{#each props.data.content as item}
				<button onmousedown={() => setSelectedItem(item)} onmouseenter={() => soundManager.playRollover()} aria-label="{item.name} button">
					<div
						class="group relative aspect-square overflow-visible rounded-3xl border-4 p-3 transition-transform duration-275 ease-[cubic-bezier(.53,1.79,.58,1.05)]
						{selectedItem.name === item.name
							? 'z-20 scale-[1.1] border-lightish-blue bg-light-blue'
							: 'scale-100 border-transparent bg-lightish-beige hover:z-10 hover:scale-[1.1] hover:bg-lighter-blue'}"
					>
						<enhanced:img
							src={item.image}
							alt={item.name}
							class="scale-100 transition-transform duration-275 ease-[cubic-bezier(.53,1.79,.58,1.05)] group-hover:scale-110"
						/>
					</div>
				</button>
			{/each}
			<!-- placeholders for remaining slots to keep formatting correct -->
			{#each Array(cols * rows - props.data.content.length) as _}
				<div class="aspect-square"></div>
			{/each}
		</div>
	</div>

	<!-- item info -->
	<ScrollableComponent class="pt-4" reactiveValue={selectedIndex}>
		<span>
			<span class="whitespace-pre-wrap text-[1.1em]">{selectedItem.info}</span>
		</span>
	</ScrollableComponent>

	<!-- item image -->
	<div class="grid">
		<enhanced:img
			src={selectedItem.image}
			alt={selectedItem.name}
			class=" col-start-1 row-start-1 size-auto"
		/>
	</div>
</ThreeColumnPageComponent>
