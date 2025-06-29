<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import TeamCard from '$lib/components/Team/team-card.svelte';

	import * as Card from '$lib/components/ui/card/index.js';
	import BorderBeam from '$lib/components/Animation/BorderBeam.svelte';

	interface TeamMember {
		avatarSrc: string;
		avatarAlt: string;
		avatarFallback: string;
		name: string;
		title: string;
	}

	let { teamMembers }: { teamMembers: TeamMember[] } = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-4 lg:px-6 lg:py-14">
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<Heading header="Our Team" description="Creative people building the future." />
	</div>

	<Card.Root class="relative overflow-hidden rounded-xl p-6 md:p-8">
		<BorderBeam size={250} duration={12} delay={0.2} />

		<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 md:gap-12 lg:grid-cols-5">
			{#each teamMembers as member (member.name)}
				<div class="relative z-10 h-full">
					<TeamCard
						avatarSrc={member.avatarSrc}
						avatarAlt={member.avatarAlt}
						avatarFallback={member.avatarFallback}
						name={member.name}
						title={member.title}
					/>
				</div>
			{/each}
		</div>
	</Card.Root>
</div>
