<script lang="ts">
	import Timeline from '$lib/components/Animation/Timeline/Timeline.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { m } from '$lib/paraglide/messages';
	import { Eye, PackageSearch, Settings } from '@lucide/svelte';

	let timeLine = [
		{
			id: 1,
			title: '1. Start As AASCO.LLc',
			content:
				"Select the component that best suits your needs from Eldora UI's versatile collection, designed to simplify and enhance your development process.",
			image: 'https://i.pinimg.com/736x/ca/aa/49/caaa49d386d84f2d037d0abcc919778f.jpg',
			icon: Settings,
		},
		{
			id: 2,
			title: '2. Upgrade into Distribution Company',
			content:
				'Enhance functionality by incorporating utility helpers that align with the selected component, ensuring seamless integration and customization.',
			image: 'https://i.pinimg.com/736x/a5/dc/0a/a5dc0af50d185b7f9111949b17e17e1a.jpg',
			icon: PackageSearch,
		},
		{
			id: 3,
			title: '3. Now At 88Logistics',
			content:
				"Simply copy and paste the provided code into your project, making the process quick and hassle-free. You're now ready to see the magic in action!",
			image: 'https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg',
			icon: Eye,
		},
	];
</script>

<section class=" my-10">
	<div class=" my-c mx-auto">
		<div class="ml-10">
			<Heading header={m.known_slimy_giraffe_zap()} description={m.flat_sunny_otter_clap()} />
		</div>
		<p class="my-0.5 px-4">
			{m.grand_even_stork_conquer()}
		</p>
		<Separator orientation="horizontal" class="w-full " />
	</div>
</section>
<Timeline data={timeLine} />

<section class="h-[20vh]"></section>
<Separator orientation="horizontal" class="w-full " />
<section class="w-full px-6 py-12">
	<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">
		<!-- Left: Office Info -->
		<div>
			<Heading header={m.minor_flat_dove_breathe()} description={m.proof_least_squid_accept()} />
			<ul class="space-y-2 text-gray-700">
				<li><strong>{m.lucky_wise_alligator_aim()}:</strong> {m.silly_vivid_duck_tend()}</li>
				<li><strong>{m.neat_even_manatee_learn()}:</strong> ...</li>
				<li><strong>{m.neat_trick_bumblebee_tickle()}:</strong> (123) 456-7890</li>
			</ul>
		</div>

		<!-- Right: Embedded Map -->
		<div class="h-[300px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[400px]">
			<!-- svelte-ignore a11y_missing_attribute -->
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6852445107936!2d36.280503080784346!3d33.50759494672997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e001851e44f9%3A0x6b1c2b1e2b1c2b1e!2sYour%20Office%20Location!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s"
				width="600"
				height="450"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			>
			</iframe>
		</div>
	</div>
</section>

<style>
	.my-c {
		margin-inline: auto;
		padding-inline: 2rem;
	}
</style>
