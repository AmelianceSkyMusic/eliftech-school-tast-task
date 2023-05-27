import { collection, getDocs } from 'firebase/firestore';
import { isObjectEmpty } from '~/ameliance-scripts/scripts';
import { returnError } from '~helpers/returnError';
import { db } from '~services/firebase/firebase';
import { SuccessResponse } from '~services/types/SuccessResponse';
import { Order } from '~types/Order';

export type OrderResponse = Record<string, Order>;

export interface GetAllOrdersResponse extends SuccessResponse {
	orders: OrderResponse;
}

export async function getAllOrders(): Promise<GetAllOrdersResponse> {
	const ordersRef = collection(db, 'orders');

	try {
		const docSnap = await getDocs(ordersRef);
		const orders: OrderResponse = {};
		docSnap.forEach((doc) => {
			const data = doc.data();
			orders[doc.id] = { ...data.orderId };
		});
		if (!isObjectEmpty(orders)) return { orders, status: 'success' };

		throw new Error(returnError("Can't find any orders!"));
	} catch (error) {
		throw new Error(returnError(error));
	}
}
