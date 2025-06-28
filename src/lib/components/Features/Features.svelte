<script lang="ts">
	import FeatureCard from '$lib/components/Features/feature-card.svelte';
	import { Box } from '@lucide/svelte';
	const items = [
		{
			icon: Box,
		},
		{
			icon: Box,
		},
		{
			icon: Box,
		},
		{
			icon: Box,
		},
	];
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid items-center space-x-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each items as item}
			<FeatureCard icon={item.icon} />
		{/each}
	</div>
</div>
<!-- End Icon Blocks -->
