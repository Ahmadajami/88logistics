<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Layout/NavBar/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />
{@render children()}
