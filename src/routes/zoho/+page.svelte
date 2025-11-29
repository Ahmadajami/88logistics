<script lang="ts">
	import Dodo from '$lib/components/Dodo.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>
<Dodo/>