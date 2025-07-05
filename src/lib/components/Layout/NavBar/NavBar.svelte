<script lang="ts">
	//Paraglide js import
	import { m } from '$lib/paraglide/messages';
	import { getLocale, localizeHref, setLocale } from '$lib/paraglide/runtime';

	//Components Import
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button';
	import Theme from '$lib/components/Layout/NavBar/Theme.svelte';
	import LanguagesNav from '$lib/components/Layout/NavBar/languages-nav.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	//Images Import
	import logo from '$lib/images/88-logistics-logo.webp';
	import fallbacklogo from '$lib/images/88-logistics-logo-fallback.png';

	//Icons Import
	import syria from '$lib/icon/sy.svg';
	import uk from '$lib/icon/gb.svg';
	//Lucide Icons Import
	import Menu from '@lucide/svelte/icons/menu';
	import Handshake from '@lucide/svelte/icons/handshake';
	import Settings from '@lucide/svelte/icons/settings';
	import Mail from '@lucide/svelte/icons/mail';
	import Users from '@lucide/svelte/icons/users';
	import Info from '@lucide/svelte/icons/info';
	import { type Icon as IconType } from '@lucide/svelte';
	import { page } from '$app/state';

	let isOpen = $state(false);
	type NavItem = {
		title: string;
		href: string;
		selected?: boolean;
		external?: boolean;
		label?: string;
		icon?: typeof IconType;
	};
	const navigationItems: NavItem[] = $state([
		{
			title: m.next_fluffy_donkey_gaze(),
			href: localizeHref('/#88Logistics_Services'),
			icon: Settings,
			selected: false,
		},
		{
			title: m.smart_cool_platypus_dig(),
			href: localizeHref('/#88Logistics_Partners'),
			icon: Handshake,
			selected: false,
		},
		{
			title: m.upper_same_mule_chop(),
			href: localizeHref('/#88Logistics_Team'),
			icon: Users,
			selected: false,
		},
		{
			title: m.new_ok_pelican_pull(),
			href: localizeHref('/#ContactUs'),
			icon: Mail,
			selected: false,
		},
		{
			title: m.known_slimy_giraffe_zap(),
			href: localizeHref('/about'),
			icon: Info,
			selected: false,
		},
	]);

	$effect(() => {
		const currentPath = page.url.hash
			? localizeHref(`/#${page.url.hash.slice(1)}`)
			: localizeHref(page.url.pathname);

		navigationItems.forEach((navItem) => {
			navItem.selected = navItem.href === currentPath;
		});
	});

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
					<a
						href={localizeHref('/')}
						class="flex items-center space-x-2"
						aria-label="88Logistics Homepage"
					>
						<picture>
							<source srcset={logo} type="image/webp" />
							<img
								src={fallbacklogo}
								alt="88Logistics company logo"
								class="size-8 rounded-sm"
								width="32"
								height="32"
							/>
						</picture>
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
							class:text-primary={item.selected}
							class="   text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<!-- Desktop CTA Button & Mobile Menu -->
				<div class="flex items-center space-x-4">
					<!-- Theme button - always visible -->
					<Theme />
					<div class="hidden md:block">
						<LanguagesNav />
					</div>
					<!-- Mobile Menu Sheet -->
					<div class="block md:hidden">
						<Sheet.Root bind:open={isOpen}>
							<Sheet.Trigger>
								<Menu class="h-6 w-6" />
								<span class="sr-only">Toggle menu</span>
							</Sheet.Trigger>

							<Sheet.Content
								side={getLocale() === 'ar' ? 'right' : 'left'}
								class="flex h-svh w-80 flex-col"
							>
								<Sheet.Header class="border-b">
									<div class="flex items-center justify-between px-4 py-4">
										<div class="flex items-center space-x-2">
											<picture>
												<source srcset={logo} type="image/webp" />
												<img
													src={fallbacklogo}
													alt="88Logistics company logo"
													class="size-8 rounded-sm"
													width="32"
													height="32"
												/>
											</picture>

											<span class="text-xl font-bold">88Logistics</span>
										</div>
									</div>
								</Sheet.Header>

								<!-- Flex layout for scrollable content and fixed footer -->
								<div class="flex min-h-0 flex-1 flex-col">
									<!-- Scrollable Navigation -->
									<div class="flex-1 space-y-2 overflow-y-auto px-4 py-6">
										{#each navigationItems as item}
											{@const Icon = item.icon}
											<a
												href={item.href}
												onclick={closeSheet}
												class="text-foreground/80 hover:bg-accent hover:text-foreground flex items-center space-x-3 rounded-lg px-3 py-3 transition-all duration-200"
											>
												<Icon class="h-5 w-5" />
												<span class="font-medium">{item.title}</span>
											</a>
										{/each}
									</div>
								</div>
								<Separator />
								<Sheet.Footer>
									<div class="flex flex-col">
										<Button
											size="sm"
											variant="ghost"
											onclick={() => {
												setLocale('ar');
											}}
										>
											{m.silly_small_kestrel_commend()}
											<span class="size-4">
												<img src={syria} alt="Arabic languge Flag" />
											</span>
										</Button>
										<Button
											size="sm"
											variant="ghost"
											onclick={() => {
												setLocale('en');
											}}
										>
											{m.mushy_teal_carp_grin()}
											<span class="size-4">
												<img src={uk} alt="English languge Flag" />
											</span>
										</Button>
									</div>
								</Sheet.Footer>
							</Sheet.Content>
						</Sheet.Root>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		view-transition-name: header;
	}
</style>
