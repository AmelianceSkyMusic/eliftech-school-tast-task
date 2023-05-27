export interface ProductItem {
	id: string;
	title: string;
	price: number;
	description: string;
	image: string;
	available: number;
}

export type ProductItems = Record<string, ProductItem[]>;
