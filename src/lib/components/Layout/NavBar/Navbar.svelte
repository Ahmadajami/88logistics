<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Component } from 'svelte';
	import MainNav from '$lib/components/Layout/NavBar/main-nav.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Theme from './Theme.svelte';

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
			title: 'Docs',
			href: '/docs',
		},
		{
			title: 'Components',
			href: '/docs/components',
		},
		{
			title: 'Blocks',
			href: '/blocks',
		},
		{
			title: 'Charts',
			href: '/charts/area',
		},
		{
			title: 'Themes',
			href: '/themes',
		},
		{
			title: 'Colors',
			href: '/colors',
		},
	];
</script>

<!--
<header class="bg-background sticky top-0 z-50 w-full pt-3">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div
			class="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4"
		>
			<Button href="/" variant="ghost" size="icon" class="hidden size-8 lg:flex">
				logo
				<span class="sr-only">shadcn-svelte</span>
			</Button>
			<MainNav items={mainNavItems} class="hidden lg:flex" />
		</div>
	</div>
</header>-->
<header class="bg-background sticky top-0 z-50 w-full pt-3">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div
			class="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4"
		>
			<Button href="/" variant="ghost" size="icon" class="size-10d hidden lg:flex">
				<img src="/logo.png" alt="88logistcs Company Logo" class="h-full w-full object-cover" />
				<span class="sr-only">shadcn-svelte</span>
			</Button>
			<MainNav items={mainNavItems} class="hidden lg:flex" />

			<div class="flex-grow"></div>
			<Theme />
		</div>
	</div>
</header>
<Separator orientation="horizontal" class="3xl:flex my-1" />
