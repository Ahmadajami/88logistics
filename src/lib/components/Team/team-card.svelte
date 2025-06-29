<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import TeamAvatar from '$lib/components/Team/team-avatar.svelte';
	import { cn } from '$lib/utils';
	let {
		avatarSrc = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
		avatarAlt,
		avatarFallback,
		name,
		title,
		className,
	} = $props<{
		avatarSrc: string;
		avatarAlt: string;
		avatarFallback: string;
		name: string;
		title: string;
		className?: string;
	}>();
</script>

<Card.Root class={cn(' h-full w-full p-6 text-center', className)}>
	<Card.Content class="flex  h-full w-full flex-col justify-center p-0">
		<TeamAvatar src={avatarSrc} alt={avatarAlt} fallback={avatarFallback} />

		<div class="mt-2 sm:mt-4">
			<h3 class="font-medium text-gray-800 dark:text-neutral-200">{name}</h3>
			<p class="text-sm text-gray-600 dark:text-neutral-400">{title}</p>
		</div>
	</Card.Content>
</Card.Root>
