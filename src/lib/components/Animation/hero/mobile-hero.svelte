<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { m } from '$lib/paraglide/messages';
	
</script>

<section class="hide-scrollbar h-[80vh] snap-y overflow-x-hidden overflow-y-scroll md:h-svh">
	<div class="w-full px-4">
		<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
			<!-- Image shown on mobile only -->
			<div class="relative my-2 flex-1 p-8 md:hidden">
				<img
					src="/logo.png"
					alt="Hero"
					width="300"
					height="300"
					class="h-min w-full rounded-2xl p-10 shadow-lg"
				/>
			</div>

			<div class=" flex-1 space-y-6 text-center md:text-left">
				<h1 class="text-4xl leading-tight font-bold md:text-5xl">
					{m.cozy_pink_racoon_edit()}<br />{m.main_ok_camel_pinch()}
				</h1>
				<Button class="rounded-2xl px-6 py-4 text-lg">{m.less_male_jackdaw_cure()}</Button>
			</div>
		</div>
	</div>
</section>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
