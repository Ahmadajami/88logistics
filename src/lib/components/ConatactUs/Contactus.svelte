<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	import { inquiryFormSchema, type InquiryFormSchema } from '$lib/schema/contact';
	import {
		type SuperValidated,
		type Infer,
		superForm,
		type FormResult,
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { m } from '$lib/paraglide/messages';
	import type { ActionData } from '../../../routes/$types';
	import { toast } from 'svelte-sonner';

	let { data }: { data: { form: SuperValidated<Infer<InquiryFormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zodClient(inquiryFormSchema),
		onUpdate({ form, result }) {
			const action = result.data as FormResult<ActionData>;

			if (form.valid && action.succsess) {
				toast(m.seemly_awful_eagle_emerge());
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="grid gap-4 lg:gap-6">
	<Card.Root class="w-full max-w-2xl">
		<Card.Header>
			<Card.Title>{m.loud_candid_goose_loop()}</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
				<Form.Field {form} name="firstname">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>{m.small_mild_iguana_smile()}</Form.Label>
							<Input type="text" {...props} bind:value={$formData.firstname} />
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="lastname">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>{m.slow_icy_camel_peek()}</Form.Label>
							<Input type="text" {...props} bind:value={$formData.lastname} />
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
			</div>

			<Form.Field {form} name="workEmail">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>{m.crazy_keen_osprey_nudge()}</Form.Label>
						<Input type="email" {...props} bind:value={$formData.workEmail} autocomplete="email" />
					{/snippet}
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
				<Form.Field {form} name="company">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>{m.hour_icy_horse_nail()}</Form.Label>
							<Input type="text" {...props} bind:value={$formData.company} />
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="companyWebsite">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>{m.tense_antsy_parakeet_catch()}</Form.Label>
							<Input type="text" {...props} bind:value={$formData.companyWebsite} />
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
			</div>

			<Form.Field {form} name="details">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>{m.white_bald_starfish_cherish()}</Form.Label>
						<Textarea {...props} rows={4} bind:value={$formData.details} />
					{/snippet}
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="privacyPolicy">
				<Form.Control>
					{#snippet children({ props })}
						<div class="ms-3 flex items-center space-x-2">
							<Checkbox {...props} bind:checked={$formData.privacyPolicy} />
							<Form.Label>
								{m.maroon_every_lobster_expand()}
								<a
									class="font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-hidden dark:text-blue-500"
									href="/">{m.extra_cozy_yak_quell()}</a
								>
							</Form.Label>
						</div>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</Card.Content>
		<Card.Footer>
			<div class="grid w-full">
				<Form.Button class="w-full">{m.spicy_inclusive_fox_explore()}</Form.Button>
			</div>
			<div class="mt-3 w-full text-center">
				<p class="text-sm text-gray-500 dark:text-neutral-500">
					{m.many_drab_niklas_grace()}
				</p>
			</div>
		</Card.Footer>
	</Card.Root>
</form>
