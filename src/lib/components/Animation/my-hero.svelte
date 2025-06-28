<script lang="ts">
	import { Motion, useElementScroll, useTransform } from 'svelte-motion';
	import { Button } from '$lib/components/ui/button/index.js';
	import { mode } from 'mode-watcher';

	const sv = useElementScroll();
	const { scrollY } = sv;
	export let isMobile = false;

	$: x = isMobile ? '0px' : useTransform(scrollY, [0, 500], ['0px', '-700px']);
</script>

<section
	bind:this={sv.ref}
	class="hide-scrollbar h-[80vh] snap-y overflow-x-hidden overflow-y-scroll md:h-svh"
>
	<div class="w-full px-4">
		<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
			<div class="flex-1 space-y-6 text-center md:text-left">
				<h1 class="text-4xl leading-tight font-bold md:text-5xl">
					Empower Your Workflow<br />with Modern Tools
				</h1>
				<Button class=" rounded-2xl px-6 py-4 text-lg ">Get Started</Button>
			</div>

			<div class="relative my-2 flex-1 p-8">
				<Motion
					style={{ y: scrollY, x: x }}
					transition={{
						easings: 'easeInOut', // cubic-bezier easing
					}}
					let:motion
				>
					{#if mode.current === 'light'}
						<img
							src="/logo.png"
							alt="Hero"
							width="300"
							height="300"
							class="h-min w-full rounded-2xl p-10 shadow-lg"
							use:motion
						/>
					{:else}
						<img
							src="/light.png"
							alt="Hero"
							width="300"
							height="300"
							class="h-min w-full rounded-2xl p-10 shadow-lg"
							use:motion
						/>
					{/if}
				</Motion>
			</div>
		</div>
	</div>

	<div class="w-fullpx-4 py-60">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row-reverse"
		>
			<div class="flex-1 space-y-6 text-center md:text-left">
				<h1 class="text-4xl leading-tight font-bold md:text-5xl">
					Seamless Integration<br />with Smooth Animations
				</h1>
				<Button class=" rounded-2xl px-6 py-4 text-lg">Get Started</Button>
			</div>

			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div class="relative flex-1" />
		</div>
	</div>
</section>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
		width: 0; /* For good measure, though display: none should be enough */
		height: 0; /* In case of horizontal scrollbar */
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
