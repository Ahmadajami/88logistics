<script lang="ts">
	import BlureFade from '$lib/components/Animation/BlureFade.svelte';

	import MyHero from '$lib/components/Animation/my-hero.svelte';
	import Features from '$lib/components/Features/Features.svelte';
	import Partners from '$lib/components/Partner/Partners.svelte';

	import { onMount } from 'svelte';
	let isMobile = $state(false);

	onMount(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		isMobile = mediaQuery.matches;

		const handler = (event: MediaQueryListEvent) => {
			isMobile = event.matches;
		};
		mediaQuery.addEventListener('change', handler);

		return () => {
			mediaQuery.removeEventListener('change', handler);
		};
	});
</script>

<MyHero bind:isMobile />

<Features />

<section id="88Logistics Partner" class="container mx-auto my-8 px-4 sm:px-6 md:px-10">
	<BlureFade delay={0.8}>
		<Partners />
	</BlureFade>
</section>
