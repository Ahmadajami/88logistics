<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Layout/NavBar/NavBar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	let { children } = $props();
</script>

<ModeWatcher />
<Toaster />
<Navbar />
{@render children()}
