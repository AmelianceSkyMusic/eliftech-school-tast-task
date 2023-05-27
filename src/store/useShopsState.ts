import { create } from 'zustand';
import { getAllShops, getShop } from '~app/(server)/api/shops/data';
import { returnError } from '~helpers/returnError';
import { ShopItem, ShopItems } from '~types/Shop';

interface UseShopsState {
	loading: boolean;
	error: string | null;
	currentShopId: ShopItem['id'];
	allShops: ShopItems | null;
	allShopIds: string[] | null;
	shop: ShopItem | null;
	setCurrentShopId: (shopId: ShopItem['id']) => void;
	getAllShops: () => Promise<void>;
	getShop: (shop: string) => Promise<void>;
}

export const useShopsState = create<UseShopsState>((set) => ({
	loading: false,
	error: null,
	currentShopId: '',
	allShops: null,
	allShopIds: null,
	shop: null,
	setCurrentShopId: (shopId) => {
		set({ currentShopId: shopId });
	},
	getAllShops: async () => {
		set({ loading: true });
		try {
			const shops = await getAllShops();
			const allShopIds = Object.entries(shops)
				.map((entriesItem) => entriesItem[1].id)
				.sort();
			set((state) => ({
				allShops: shops,
				allShopIds,
				currentShopId: state.currentShopId || allShopIds[0],
			}));
		} catch (error) {
			set({ error: returnError(error) });
		} finally {
			set({ loading: false });
		}
	},
	getShop: async (shopName) => {
		set({ loading: true });
		try {
			const shop = await getShop(shopName);
			set({ shop });
		} catch (error) {
			set({ error: returnError(error) });
		} finally {
			set({ loading: false });
		}
	},
}));
