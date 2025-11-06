<script lang="ts">
	import DividerComponent from '$lib/components/DividerComponent.svelte';
    import type { Picture } from 'vite-imagetools'
	import TitleComponent from './TitleComponent.svelte';

    interface Props {
        icon: Picture;
        title: string;
        itemName: string;
        itemBlurb: string;
		class?: string;
        children: any;
    }

    let props: Props = $props();
</script>

<div class="grid grid-cols-[30%_1fr_30%] grid-rows-[auto_1fr] gap-x-6 h-full w-full {props.class}">
	<!-- Page Icon and Title -->
	<TitleComponent icon={props.icon} title={props.title}></TitleComponent>
    <!-- Item Name and Blurb -->
	<div class="col-span-2 flex flex-col h-22">
		<span class="text-3xl font-bold">{props.itemName.toUpperCase()}</span>
		<div class="overflow-visible w-full h-10 flex items-center">
			<span class="text-lg">{props.itemBlurb}</span>
		</div>

		<DividerComponent></DividerComponent>
	</div>

    <!-- Child Content -->
	{@render props.children()}
</div>
