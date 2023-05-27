import { ProductItem, ProductItems } from '~types/Product';

import { allTheBest } from './allTheBest';
import { burgerMall } from './burgerMall';
import { manyFoodsStore } from './manyFoodsStore';
import { potatoesBox } from './potatoesBox';

export const SHOP_PRODUCTS: ProductItems = {
	burgerMall,
	allTheBest,
	manyFoodsStore,
	potatoesBox,
};

export async function getAllProducts(): Promise<ProductItems> {
	return await new Promise((resolve, reject) => {
		try {
			resolve(SHOP_PRODUCTS);
		} catch (error) {
			reject(error);
		}
	});
}

export async function getShopProducts(shop: string): Promise<ProductItem[]> {
	return await new Promise((resolve, reject) => {
		try {
			const data = SHOP_PRODUCTS[shop];
			if (data) resolve(data);
			throw new Error("Can't find any shop like this!");
		} catch (error) {
			reject(error);
		}
	});
}
