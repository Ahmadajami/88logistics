<script lang="ts">
	import FeatureCard from '$lib/components/Features/feature-card.svelte';
	import type { FeatureModel } from '$lib/interface/feature';
	import { Laptop, ShipIcon, WarehouseIcon, Workflow } from '@lucide/svelte';
	import Heading from '$lib/components/Heading.svelte';
	import BlureFade from '../Animation/BlureFade.svelte';
	const feature_card_items: FeatureModel[] = [
		{
			id: 1,
			href: '/',
			title: 'Global Freight & Customs Solutions',
			body: 'Seamlessly manage international import and export operations with our expert freight forwarding and customs brokerage services.',
			icon: ShipIcon, // Represents international movement (ships, planes, trucks)
		},
		{
			id: 2,
			href: '/',
			title: 'Smart Warehousing & Distribution',
			body: 'Optimize your inventory and streamline order fulfillment with our advanced warehousing and efficient last-mile distribution network.',
			icon: WarehouseIcon, // Represents storage and distribution
		},
		{
			id: 3,
			href: '/',
			title: 'Logistics Technology Systems',
			body: 'Empower your operations with our cutting-edge Transportation (TMS) and Warehouse (WMS) Management Systems, offering real-time visibility and automation.',
			icon: Laptop, // Represents technology systems and software
		},
		{
			id: 4,
			href: '/',
			title: 'Strategic Supply Chain Consulting',
			body: 'Gain a competitive edge with our comprehensive corporate agency services, including supply chain optimization and tailored procurement support.',
			icon: Workflow, // Represents overall supply chain flow and strategic management
		},
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Heading header="Services" description="All 88Logistics Services" />
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
