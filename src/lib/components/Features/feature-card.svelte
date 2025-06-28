<script lang="ts">
	import { type Icon as IconType } from '@lucide/svelte';
	let { href = '/', icon }: { href?: string; icon: typeof IconType } = $props();
</script>

<a
	class="group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
	{href}
>
	{#if icon}
		{@const Icon = icon}
		<Icon class="flex size-12 items-center justify-center rounded-xl " color="gold" />
	{/if}

	<div class="mt-5">
		<h3
			class="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400"
		>
			Responsive
		</h3>
		<p class="mt-1 text-gray-600 dark:text-neutral-400">
			Responsive, and mobile-first project on the web
		</p>
		<span
			class="mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline"
		>
			Learn more Arrow
		</span>
	</div>
</a>
