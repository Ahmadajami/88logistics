import { superValidate } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { inquiryFormSchema } from '$lib/schema/contact';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(inquiryFormSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(inquiryFormSchema));
		

		if (!form.valid) {
			return fail(400, {
				form,
				succsess: false,
			});
		}
		return {
			form,
			succsess: true,
		};
	},
};
