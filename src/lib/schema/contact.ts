import { m } from '$lib/paraglide/messages';
import { z } from 'zod';

/**
 * Zod schema for the inquiry form.
 * Defines the structure and validation rules for each form field.
 */
export const inquiryFormSchema = z.object({
	/**
	 * First name of the user. Must be a string and is required.
	 */
	firstname: z.string().min(1, { message: m.knotty_arable_eagle_cook() }),

	/**
	 * Last name of the user. Must be a string and is required.
	 */
	lastname: z.string().min(1, { message: m.quick_these_panda_absorb() }),

	/**
	 * Work email of the user. Must be a valid email format and is required.
	 */
	workEmail: z
		.string()
		.email({ message: m.brave_flat_giraffe_find() })
		.min(1, { message: m.seemly_keen_wolf_attend() }),

	/**
	 * Company name. Must be a string and is required.
	 */
	company: z.string().min(1, { message: m.away_solid_warthog_climb() }),

	/**
	 * Company website URL. Must be a string and can be an empty string if not provided.
	 * You might want to add a `.url()` validation if a valid URL is strictly necessary.
	 * For now, it's a string, allowing empty.
	 */
	companyWebsite: z.string().optional().or(z.literal('')), // Allows empty string or undefined

	/**
	 * Details provided by the user. Must be a string and is required.
	 */
	details: z.string().min(1, { message: m.orange_fancy_cat_dance() }),

	/**
	 * Privacy policy acceptance checkbox. Must be a boolean and strictly true to be valid.
	 */
	privacyPolicy: z.boolean().refine((val) => val === true, {
		message: m.empty_brave_sparrow_strive(),
	}),
});

/**
 * Infer the TypeScript type from the Zod schema for easy use.
 */
export type InquiryFormSchema = typeof inquiryFormSchema;
