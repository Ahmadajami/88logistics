<script lang="ts">
	import FeatureCard from '$lib/components/Services/service-card.svelte';
	import type { FeatureModel } from '$lib/interface/feature';
	import { HandshakeIcon, Laptop, WarehouseIcon, Workflow } from '@lucide/svelte';
	import Heading from '$lib/components/Heading.svelte';
	import BlureFade from '../Animation/BlureFade.svelte';
	import { m } from '$lib/paraglide/messages';
	const feature_card_items: FeatureModel[] = [
		{
			id: 1,
			href: '/contact-us',
			title: m.small_born_stingray_cry(),
			body: m.knotty_weary_wasp_adapt(),
			icon: HandshakeIcon,
		},
		{
			id: 2,
			href: '/',
			title: m.north_least_niklas_pout(),
			body: m.tiny_few_kitten_dial(),
			icon: WarehouseIcon, // Represents storage and distribution
		},
		{
			id: 3,
			href: '/',
			title: m.nimble_major_cod_mend(),
			body: m.bad_smug_piranha_breathe(),
			icon: Laptop, // Represents technology systems and software
		},
		{
			id: 4,
			href: '/',
			title: m.topical_silly_niklas_advise(),
			body: m.gaudy_ok_puffin_breathe(),
			icon: Workflow, // Represents overall supply chain flow and strategic management
		},
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Heading header={m.fluffy_bad_pelican_blink()} description={m.fun_quiet_dolphin_evoke()} />
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each feature_card_items as feature, idx}
			<BlureFade id={feature.id.toString()} delay={0.25 + idx * 0.2} once={false}>
				<div class="h-full">
					<FeatureCard {feature} />
				</div>
			</BlureFade>
		{/each}
	</div>
</div>
