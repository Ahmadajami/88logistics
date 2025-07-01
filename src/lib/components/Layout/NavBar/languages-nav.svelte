<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import syria from '$lib/icon/sy.svg';
	import uk from '$lib/icon/gb.svg';
	//import { m } from '$lib/paraglide/messages';
	import { setLocale } from '$lib/paraglide/runtime';
	import { Languages } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
		<Languages />
		<span class="sr-only">Change language</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item class="flex flex-row justify-between" onclick={() => setLocale('ar')}>
			{m.silly_small_kestrel_commend()}
			<span class="size-4">
				<img src={syria} alt="Arabic languge Flag" />
			</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item class="flex flex-row justify-between" onclick={() => setLocale('en')}>
			{m.mushy_teal_carp_grin()}
			<span class="size-4">
				<img src={uk} alt="English languge Flag" />
			</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
