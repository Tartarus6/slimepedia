<script lang="ts">
	interface Props {
		class?: string;
	}

	let props: Props = $props();
</script>

<div
	class="my-2 box-border h-0 w-full border-t-[0.175em] border-dashed border-gray-400 border-opacity-30 {props.class}"
></div>
