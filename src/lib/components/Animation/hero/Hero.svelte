<script lang="ts">
	import DesktopHero from '$lib/components/Animation/hero/desktop-hero.svelte';
	import MobileHero from '$lib/components/Animation/hero/mobile-hero.svelte';

	let { isMobile = $bindable() } = $props();
</script>

{#if isMobile}
	<MobileHero />
{:else}
	<DesktopHero />
{/if}
