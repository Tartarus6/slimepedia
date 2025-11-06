<script lang="ts">
	interface Props {
		flipped?: boolean;
		class?: string;
	}

	let props: Props = $props();

	let flipped = props.flipped ?? false;
	let clazz = props.class ?? '';
</script>

<div>
	<svg
		width="25mm"
		height="25mm"
		viewBox="0 0 25 25"
		version="1.1"
		id="svg1"
		xmlns="http://www.w3.org/2000/svg"
		style={flipped ? 'transform:scale(-1,-1);' : ''}
		class={clazz}
	>
		<defs id="defs1" />
		<path
			id="rect7"
			style="fill:#de4f85;stroke-width:0.442;"
			d="M 5.4763939,10 H 10 V 7 a 1,1 153.43495 0 1 1.6,-0.8 l 7.641187,5.73089 a 0.71138714,0.71138714 90 0 1 0,1.13822 L 11.6,18.8 A 1,1 26.565051 0 1 10,18 V 15 H 5.4763939 A 0.47639388,0.47639388 45 0 1 5,14.523606 V 10.476394 A 0.47639388,0.47639388 135 0 1 5.4763939,10 Z"
		/>
	</svg>
</div>
