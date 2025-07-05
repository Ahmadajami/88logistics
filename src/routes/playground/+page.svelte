<!-- Navigation.svelte -->
<script>
	// Just track current hash for styling
	let currentHash = $state('');

	/*$effect(() => {
		const updateHash = () => {
			currentHash = window.location.hash;
		};

		updateHash(); // Initial value
		window.addEventListener('hashchange', updateHash);

		return () => window.removeEventListener('hashchange', updateHash);
	});*/
</script>

<nav>
	<a href="#about" class:active={currentHash === '#about'}> about </a>

	<a href="#services" class:active={currentHash === '#services'}> services </a>

	<a href="#contact" class:active={currentHash === '#contact'}>contact </a>
</nav>

<main>
	<section id="about">
		<!-- content -->
		<h1>About</h1>
	</section>

	<section id="services">
		<!-- content -->
		<h1>services</h1>
	</section>

	<section id="contact">
		<h1>contact</h1>
	</section>
</main>

<style>
	.active {
		background-color: var(--accent-color);
		color: white;
	}
	section {
		min-height: 100vh;
	}
</style>
