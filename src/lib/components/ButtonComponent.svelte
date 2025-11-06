<script lang="ts">
	// NOTE: Unused
	
	import { soundManager } from '$lib/scripts/sound';

	interface Props {
		src: string;
		alt: string;
		wiggle?: 'true' | 'false';
		extra_rounded?: 'true' | 'false';
		bigger_border?: 'true' | 'false';
		smaller_image?: 'true' | 'false';
		animate_on_hover?: 'true' | 'false';
		selected?: 'true' | 'false';
	}

	let props: Props = $props();
</script>

<div
	class="group grid h-full w-full justify-items-center transition-transform duration-200 ease-[cubic-bezier(.53,1.79,.58,1.05)] {props.animate_on_hover ===
	'true'
		? 'hover:scale-[1.2]'
		: ''} {props.selected === 'true' ? 'scale-[1.2]' : ''}"
	role="button"
	tabindex="0"
	onkeydown={(e) => e.key === 'Enter'}
>
	<div
		class="relative aspect-square scale-100 {props.extra_rounded === 'true'
			? 'rounded-main'
			: 'rounded-3xl'} {props.bigger_border === 'true'
			? 'border-[0.45em]'
			: 'border-4'} border-transparent bg-lightish-beige p-3 {props.animate_on_hover === 'true'
			? 'group-hover:border-lightish-blue group-hover:bg-light-blue'
			: ''} {props.selected === 'true' && props.animate_on_hover === 'false'
			? 'border-lightish-blue bg-light-blue'
			: 'hover:bg-light-pink'}"
	>
		<enhanced:img
			src={props.src}
			alt={props.alt}
			class="{props.smaller_image === 'false' ? 'scale-110' : ''} transition-transform {props.wiggle === 'true'
				? 'group-hover:animate-wiggle'
				: ''}"
		/>
	</div>
	<slot />
</div>
