<script lang="ts">
	import DividerComponent from './DividerComponent.svelte';
	import type { Picture } from 'vite-imagetools';

	interface Props {
		categories: string[];
		facts: {
			value: string;
			icon: Picture;
		}[];
	}
	
	let props: Props = $props();

	function capitalizeWords(input: string): string {
		return input
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ');
	}
</script>

<div>
	<span class="bold text-xl font-bold">FACTS</span>

	<DividerComponent />

	<!-- section 1 -->
	<div class="grid grid-cols-1">
		{#each props.facts as fact, i}
			<div class="flex flex-row space-x-3 items-center">
				<enhanced:img src={fact.icon} alt="{fact.value} icon" class=" size-10" />
				<div class="grid grid-rows-2">
					<span>{capitalizeWords(props.categories[i])}</span>
					<span class="font-bold">{capitalizeWords(fact.value)}</span>
				</div>
			</div>

			<DividerComponent />
		{/each}
	</div>
</div>
