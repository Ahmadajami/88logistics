<script lang="ts">
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    
    import { resetMode, setMode } from "mode-watcher";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { m } from "$lib/paraglide/messages";
   </script>
    
   <DropdownMenu.Root>
    <DropdownMenu.Trigger
     class={buttonVariants({ variant: "outline", size: "icon" })}
    >
     <SunIcon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
     />
     <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
     />
     <span class="sr-only">{m.safe_neat_gopher_twirl()}</span>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
     <DropdownMenu.Item onclick={() => setMode("light")}>{m.polite_ornate_ox_link()}</DropdownMenu.Item
     >
     <DropdownMenu.Item onclick={() => setMode("dark")}>{m.even_super_boar_lead()}</DropdownMenu.Item>
     <DropdownMenu.Item onclick={() => resetMode()}>{m.fine_brief_alpaca_startle()}</DropdownMenu.Item>
    </DropdownMenu.Content>
   </DropdownMenu.Root>