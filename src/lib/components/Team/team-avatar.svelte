<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { cn } from '$lib/utils';
	let { className, src, alt, fallback } = $props<{
		className?: string;
		src: string;
		alt: string;
		fallback: string;
	}>();
</script>

<Avatar.Root class={cn('mx-auto size-24', className)}>
	<Avatar.Image {src} {alt} />
	<Avatar.Fallback>{fallback}</Avatar.Fallback>
</Avatar.Root>
