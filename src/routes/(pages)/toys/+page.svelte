<script lang="ts">
	import type { FullPageData } from '$lib';
	import DensePageComponent from '$lib/components/DensePageComponent.svelte';
	import type { PageData } from './$types';

	let { data }: { data: FullPageData } = $props();
</script>

<DensePageComponent {data} />
