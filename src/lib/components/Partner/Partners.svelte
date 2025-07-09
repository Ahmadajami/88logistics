<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import Meteors from '$lib/components/Animation/Meteors.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import nine_logo from '$lib/images/partners/911_logo.webp';
	import mb_logo from '$lib/images/partners/mb_logo.webp';
	import lol from '$lib/images/partners/lol.webp';
	import ajami from '$lib/images/partners/ajami_logo.webp';
	import crystal_logo from '$lib/images/partners/crystal_logo.webp';
	import fallbacklogo from '$lib/images/88-logistics-logo-fallback.png';
	import { onMount } from 'svelte';

	const more = [nine_logo, mb_logo, lol, ajami, crystal_logo];
	const images = [nine_logo, mb_logo, lol, ajami, crystal_logo, ...more];

	type AxisDirectionOptionType = 'ltr' | 'rtl';

	let dir: AxisDirectionOptionType = $derived<AxisDirectionOptionType>(
		getLocale() === 'ar' ? 'rtl' : 'ltr',
	);
	onMount(() => {
		console.log('mounted');
	});
</script>

<Heading header={m.elegant_same_meerkat_pinch()} description={m.dark_watery_javelina_relish()} />
<div
	class="bg-background relative flex h-fit w-full items-center justify-center overflow-hidden rounded-lg border p-8 sm:p-12 md:p-16 md:shadow-xl lg:p-20"
>
	<Meteors number={30} />
	<Carousel.Root
		class="z-10 w-full"
		opts={{
			direction: dir,
			loop: true,
		}}
		plugins={[
			Autoplay({
				delay: 2000,
			}),
		]}
	>
		<Carousel.Content>
			{#each images as srcset}
				<Carousel.Item class="basis-1/2  text-center sm:basis-1/3   md:basis-1/4 lg:basis-1/5">
					<picture>
						<source {srcset} type="image/webp" />
						<img
							src={fallbacklogo}
							alt="88Logistics Parterns logos"
							style=" aspect-ratio: 3/2; object-fit: contain; mix-blend-mode: color-burn;"
						/>
					</picture>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</div>
