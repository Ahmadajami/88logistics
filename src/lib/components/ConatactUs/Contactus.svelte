<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { inquiryFormSchema, type InquiryFormSchema } from '$lib/schema/contact';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let { data }: { data: { form: SuperValidated<Infer<InquiryFormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zodClient(inquiryFormSchema),
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance action="/" class="grid gap-4 lg:gap-6">
	<Card.Root class="w-full max-w-2xl">
		<Card.Header>
			<Card.Title>Fill in the form</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
				<Form.Field {form} name="firstname">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>First Name</Form.Label>
							<Input type="text" {...props} bind:value={$formData.firstname} />
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="lastname">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Last Name</Form.Label>
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
						<Form.Label>Work Email</Form.Label>
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
							<Form.Label>Company</Form.Label>
							<Input type="text" {...props} bind:value={$formData.company} />
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="companyWebsite">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Company Website</Form.Label>
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
						<Form.Label>Details</Form.Label>
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
								By submitting this form I have read and acknowledged the
								<a
									class="font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-hidden dark:text-blue-500"
									href="/">Privacy policy</a
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
				<Form.Button class="w-full">Send inquiry</Form.Button>
			</div>
			<div class="mt-3 w-full text-center">
				<p class="text-sm text-gray-500 dark:text-neutral-500">
					We'll get back to you in 1-2 business days.
				</p>
			</div>
		</Card.Footer>
	</Card.Root>
</form>
