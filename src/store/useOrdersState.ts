import { create } from 'zustand';
import { sortArrayOfObj } from '~/ameliance-scripts/scripts';
import { returnError } from '~helpers/returnError';
import { addOrder } from '~services/firebase/database/orders/addOrder';
import { getAllOrders } from '~services/firebase/database/orders/getAllOrders';
import { Order } from '~types/Order';

interface UseOrdersState {
	loading: boolean;
	error: string | null;
	allOrders: Order[] | null;
	getAllOrders: () => Promise<void>;
	submitOrder: ({
		orderItems,
		userInfo,
	}: Omit<Order, 'date'>) => Promise<void>;
}

export const useOrdersState = create<UseOrdersState>((set) => ({
	loading: false,
	error: null,
	allOrders: null,
	getAllOrders: async () => {
		set({ loading: true });
		try {
			const response = await getAllOrders();

			const allOrders = sortArrayOfObj(
				Object.values(response.orders),
				'date'
			).reverse();
			set(() => ({ allOrders }));
		} catch (error) {
			set({ error: returnError(error) });
		} finally {
			set({ loading: false });
		}
	},
	submitOrder: async ({ orderItems, userInfo }) => {
		set({ loading: true });
		try {
			await addOrder({ orderItems, userInfo });
		} catch (error) {
			set({ error: returnError(error) });
		} finally {
			set({ loading: false });
		}
	},
}));
