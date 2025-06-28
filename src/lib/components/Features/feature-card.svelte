<script lang="ts">
	import type { FeatureModel } from '$lib/interface/feature';
	import * as Card from '$lib/components/ui/card/index.js';

	let { feature }: { feature: FeatureModel } = $props();
</script>

<Card.Root
	class="group flex h-full cursor-pointer flex-col justify-between rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
>
	<Card.Header>
		{#if feature.icon}
			{@const Icon = feature.icon}
			<Icon class="flex size-12 items-center justify-center rounded-xl" color="gold" />
		{/if}
		<Card.Title
			class="mt-5 text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400"
		>
			{feature.title}
		</Card.Title>
		<Card.Description class="mt-1 text-gray-600 dark:text-neutral-400">
			{feature.body}
		</Card.Description>
	</Card.Header>
	<Card.Footer>
		<a href={feature.href} class="sr-only">Go to {feature.title}</a>
	</Card.Footer>
</Card.Root>
