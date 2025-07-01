<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import type { Component } from 'svelte';
	import MainNav from '$lib/components/Layout/NavBar/main-nav.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Theme from './Theme.svelte';
	import { AlignJustify, XIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import LanguagesNav from './languages-nav.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { fade } from 'svelte/transition';

	type NavItem = {
		title: string;
		href?: string;
		disabled?: boolean;
		external?: boolean;
		label?: string;
		icon?: Component;
	};
	const mainNavItems: NavItem[] = [
		{
			title: m.next_fluffy_donkey_gaze(),
			href: localizeHref('#88Logistics_Services'),
		},
		{
			title: m.smart_cool_platypus_dig(),
			href: localizeHref('#88Logistics_Partners'),
		},
		{
			title: m.upper_same_mule_chop(),
			href: localizeHref('#88Logistics_Team'),
		},
		{
			title: m.new_ok_pelican_pull(),
			href: localizeHref('#ContactUs'),
		},
		{
			title: m.known_slimy_giraffe_zap(),
			href: localizeHref('/about'),
		},
	];

	let isOpen = $state(false);

	// Function to toggle the hamburger menu and body overflow
	function openMenu() {
		isOpen = !isOpen;
	}
</script>

<header class="bg-background sticky top-0 z-50 my-2 w-full pt-3">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div
			class="3xl:fixed:container flex h-(--header-height) items-center space-x-4 **:data-[slot=separator]:!h-4"
		>
			<Button href="/" variant="ghost" size="icon" class="hidden size-10 lg:flex">
				<img src="/logo.png" alt="88logistics Company Logo" class="h-full w-full object-cover" />
				<span class="sr-only">88logistics Company</span>
			</Button>
			<MainNav items={mainNavItems} class="hidden lg:flex" />

			<Button variant="outline" size="icon" class="ml-auto lg:hidden" onclick={openMenu}>
				<span class="sr-only">Toggle menu</span>
				{#if isOpen}
					<div transition:fade>
						<XIcon strokeWidth={1.4} class="text-foreground" />
					</div>
				{:else}
					<div transition:fade>
						<AlignJustify strokeWidth={1.4} class="text-foreground" />
					</div>
				{/if}
			</Button>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div class="flex-grow" />

			<Theme />

			<LanguagesNav />
		</div>
	</div>
</header>
<Separator orientation="horizontal" class="3xl:flex my-1" />

<Sheet.Root bind:open={isOpen}>
	<Sheet.Content class="px-8" side={getLocale() == 'ar' ? 'right' : 'left'}>
		<Sheet.Header>
			<Sheet.Title>{m.just_spicy_tadpole_ascend()}</Sheet.Title>
		</Sheet.Header>

		<MainNav items={mainNavItems} class="flex flex-col items-start " />
	</Sheet.Content>
</Sheet.Root>
