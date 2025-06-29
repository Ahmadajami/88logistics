<script lang="ts">
	let { header, description }: { header: string; description: string } = $props();
</script>

<h1
	class="z-10 mx-3 my-3.5 bg-gradient-to-br from-amber-400 to-yellow-600 bg-clip-text text-3xl font-semibold tracking-tight whitespace-pre-wrap text-transparent sm:text-4xl md:text-5xl dark:from-white dark:to-blue-900/40"
>
	{header}
</h1>
<p class="mx-5 mb-4 text-black dark:text-white">{description}</p>
