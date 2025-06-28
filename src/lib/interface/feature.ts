import { type Icon as IconType } from '@lucide/svelte';
export interface FeatureModel {
	id: number;
	icon: typeof IconType;
	body: string;
	title: string;
	href: string;
}
