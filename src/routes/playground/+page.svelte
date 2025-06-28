<script lang="ts">
	import { Motion, useElementScroll, useTransform } from 'svelte-motion';
	import { Button } from '$lib/components/ui/button/index.js';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Directly destructure scrollY from useElementScroll()
	// When no 'ref' or 'target' is provided, it defaults to tracking window scroll.
	const sv = useElementScroll();
	const { scrollY } = sv;
	

	// Define a reactive variable for mobile state
	const isMobile = writable(false);

	onMount(() => {
		// Define your mobile breakpoint (e.g., max-width: 768px for md in Tailwind)
		const mediaQuery = window.matchMedia('(max-width: 768px)');

		// Set initial state
		$isMobile = mediaQuery.matches;

		// Listen for changes
		const handler = (event: MediaQueryListEvent) => {
			$isMobile = event.matches;
		};
		mediaQuery.addEventListener('change', handler);

		// Cleanup on unmount
		return () => {
			mediaQuery.removeEventListener('change', handler);
		};
	});

	// Conditionally set the 'x' transform based on screen size
	// Keeping y: scrollY for a subtle vertical parallax, but you could also make it conditional
	$: x = $isMobile ? '0px' : useTransform(scrollY, [0, 500], ['0px', '-700px']);
</script>

<section bind:this={sv.ref} class="hide-scrollbar h-svh overflow-x-hidden">
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
					<img
						src="/logo.png"
						alt="Hero"
						width="300"
						height="300"
						class="h-min w-full rounded-2xl p-10 shadow-lg"
						use:motion
					/>
				</Motion>
			</div>
		</div>
	</div>
</section>

<div class="w-full px-4 py-60">
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

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	/* If you want to hide the *global* scrollbar, apply this to body or a top-level wrapper */
	/* .hide-scrollbar::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	} */

	/* Hide scrollbar for IE, Edge and Firefox */
	/* .hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	} */

	/* For the updated code, the 'hide-scrollbar' class is likely not needed on the section itself.
	   If you want to hide the scrollbar for the entire page, apply this styling globally
	   (e.g., in app.css or a global style block targeting html/body).
	*/
</style>
