<script lang="ts">
	import DensePageComponent from '$lib/components/DensePageComponent.svelte';
	// import type { PageData } from './$types';
	import type { FullPageData } from '$lib';

	let {data}: {data: FullPageData} = $props();
</script>

<DensePageComponent {data} />
