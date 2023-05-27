import { create } from 'zustand';
import { CartItem } from '~types/Cart';
import { ProductItem } from '~types/Product';

interface UseUserCartState {
	userCart: CartItem[];
	addProductToCart: ({ shopId, product, count }: CartItem) => void;
	emptyCart: () => void;
	removeProductFromCart: (productId: ProductItem['id']) => void;
	incrementProductInCart: (productId: ProductItem['id']) => void;
	decrementProductInCart: (productId: ProductItem['id']) => void;
}

export const useUserCartState = create<UseUserCartState>((set) => ({
	userCart: [],
	addProductToCart: ({ shopId, product, count }) =>
		set((state) => {
			return { userCart: [...state.userCart, { shopId, product, count }] };
		}),
	emptyCart: () => set({ userCart: [] }),
	removeProductFromCart: (productId) =>
		set((state) => {
			const filteredUserCart = state.userCart.filter(
				(cartItem) => cartItem.product.id !== productId
			);
			return { userCart: filteredUserCart };
		}),
	incrementProductInCart: (productId) =>
		set((state) => {
			const newUserCart = state.userCart.map((cartItem) => {
				if (cartItem.product.id === productId) {
					const newCount = cartItem.count + 1;
					return {
						...cartItem,
						count: newCount >= 1000 ? 1000 : newCount,
					};
				}
				return cartItem;
			});
			return { userCart: newUserCart };
		}),
	decrementProductInCart: (productId) =>
		set((state) => {
			const newUserCart = state.userCart.map((cartItem) => {
				if (cartItem.product.id === productId) {
					const newCount = cartItem.count - 1;
					return { ...cartItem, count: newCount <= 0 ? 0 : newCount };
				}
				return cartItem;
			});
			return { userCart: newUserCart };
		}),
}));
