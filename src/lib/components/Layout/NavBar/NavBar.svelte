<script lang="ts">
	import {
		Menu,
		Handshake,
		Info,
		Users,
		Settings,
		Mail,
		type Icon as IconType,
	} from '@lucide/svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, localizeHref, setLocale } from '$lib/paraglide/runtime';
	import Theme from './Theme.svelte';
	import LanguagesNav from './languages-nav.svelte';
	import syria from '$lib/icon/sy.svg';
	import uk from '$lib/icon/gb.svg';

	let isOpen = $state(false);
	type NavItem = {
		title: string;
		href?: string;
		disabled?: boolean;
		external?: boolean;
		label?: string;
		icon?: typeof IconType;
	};
	const navigationItems: NavItem[] = [
		{
			title: m.next_fluffy_donkey_gaze(),
			href: localizeHref('#88Logistics_Services'),
			icon: Settings,
		},
		{
			title: m.smart_cool_platypus_dig(),
			href: localizeHref('#88Logistics_Partners'),
			icon: Handshake,
		},
		{
			title: m.upper_same_mule_chop(),
			href: localizeHref('#88Logistics_Team'),
			icon: Users,
		},
		{
			title: m.new_ok_pelican_pull(),
			href: localizeHref('#ContactUs'),
			icon: Mail,
		},
		{
			title: m.known_slimy_giraffe_zap(),
			href: localizeHref('/about'),
			icon: Info,
		},
	];

	function closeSheet() {
		isOpen = false;
	}
</script>

<header
	class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<nav>
		<div class="container mx-auto px-4">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo -->
				<div class="flex items-center">
					<a href={localizeHref('/')} class="flex items-center space-x-2">
						<img src="/logo.png" alt="88Logistics company logo" class="size-8 rounded-sm" />
						<span class="sr-only">
							<h1>88Logistics - Freight and Logistics Solutions</h1>
						</span>
						<span class="text-foreground text-xl font-bold">88Logistics</span>
					</a>
				</div>

				<!-- Desktop Navigation -->
				<div class="hidden items-center space-x-8 md:flex">
					{#each navigationItems as item}
						<a
							href={item.href}
							class="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<!-- Desktop CTA Button -->
				<div class="hidden items-center space-x-4 md:flex">
					<Theme />
					<LanguagesNav />
				</div>
				<!-- Mobile Menu Sheet -->
				<div class="md:hidden">
					<Sheet.Root bind:open={isOpen}>
						<Sheet.Trigger>
							<Button variant="ghost" size="sm" class="p-2">
								<Menu class="h-6 w-6" />
								<span class="sr-only">Toggle menu</span>
							</Button>
						</Sheet.Trigger>

						<Sheet.Content
							side={getLocale() == 'ar' ? 'right' : 'left'}
							class="flex max-h-screen w-80 flex-col"
						>
							<Sheet.Header>
								<div class="my-3 flex items-center justify-between border-b px-4 pt-4 pb-4">
									<div class="flex items-center space-x-2">
										<img src="/logo.png" alt="88Logistics mobile logo" class="h-8 w-auto" />
										<span class="text-xl font-bold">88Logistics</span>
									</div>
								</div>
							</Sheet.Header>

							<!-- Flex layout for scrollable content and fixed footer -->
							<div class="flex flex-1 flex-col">
								<!-- Scrollable Navigation -->
								<div class="flex-1 space-y-2 overflow-y-auto px-4 py-6">
									{#each navigationItems as item}
										{@const Icon = item.icon}
										<a
											href={item.href}
											onclick={closeSheet}
											class="text-foreground/80 hover:text-foreground hover:bg-accent flex items-center space-x-3 rounded-lg px-3 py-3 transition-all duration-200"
										>
											<Icon class="h-5 w-5" />
											<span class="font-medium">{item.title}</span>
										</a>
									{/each}
								</div>

								<!-- Fixed Footer -->
								<Sheet.Footer class="flex flex-col space-y-3 border-t px-4 py-4">
									<Button
										onclick={() => {
											setLocale('ar');
										}}
										size="lg"
										variant="ghost"
									>
										{m.silly_small_kestrel_commend()}
										<span class="size-4">
											<img src={syria} alt="Arabic languge Flag" />
										</span>
									</Button>
									<Button
										onclick={() => {
											setLocale('en');
										}}
										size="lg"
										variant="ghost"
									>
										{m.mushy_teal_carp_grin()}
										<span class="size-4">
											<img src={uk} alt="English languge Flag" />
										</span>
									</Button>
								</Sheet.Footer>
							</div>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
	</nav>
</header>
