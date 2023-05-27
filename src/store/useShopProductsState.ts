import { create } from 'zustand';
import { getAllProducts } from '~app/(server)/api/products/data';
import { returnError } from '~helpers/returnError';
import { ProductItem } from '~types/Product';

interface UseShopProductsState {
	allShopProducts: Record<string, ProductItem[]>;
	loading: boolean;
	error: string | null;
	getAllProducts: () => Promise<void>;
}

export const useShopProductsState = create<UseShopProductsState>((set) => ({
	allShopProducts: {},
	loading: false,
	error: null,
	getAllProducts: async () => {
		set({ loading: true });
		try {
			const products = await getAllProducts();
			set({ allShopProducts: products });
		} catch (error) {
			set({ error: returnError(error) });
		} finally {
			set({ loading: false });
		}
	},
}));
