<script lang="ts">
	import RoomyPageComponent from '$lib/components/RoomyPageComponent.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<RoomyPageComponent {data} cols={2} rows={3} />
