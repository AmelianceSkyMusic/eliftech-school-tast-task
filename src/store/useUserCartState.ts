import { create } from 'zustand';
import { ProductItem } from '~types/Product';
import { ShopItem } from '~types/Shop';

interface CartItem {
	shopId: ShopItem['id'];
	product: ProductItem;
	count: number;
}

interface UseUserCartState {
	userCart: CartItem[];
	addProductToCart: ({ shopId, product, count }: CartItem) => void;
	removeProductFromCart: (productId: ProductItem['id']) => void;
}

export const useUserCartState = create<UseUserCartState>((set) => ({
	userCart: [],
	addProductToCart: ({ shopId, product, count }) =>
		set((state) => {
			return { userCart: [...state.userCart, { shopId, product, count }] };
		}),
	removeProductFromCart: (productId) =>
		set((state) => {
			const filteredUserCart = state.userCart.filter(
				(cartItem) => cartItem.product.id !== productId
			);
			return { userCart: filteredUserCart };
		}),
}));
