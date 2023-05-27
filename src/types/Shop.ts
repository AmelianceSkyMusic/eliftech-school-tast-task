export interface ShopItem {
	id: string;
	name: string;
	description: string;
	address: string;
}

export type ShopItems = Record<string, ShopItem>;
