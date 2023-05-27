import { doc, setDoc } from 'firebase/firestore';
import { getCurrentDateInMs } from '~/ameliance-scripts';
import { returnError } from '~helpers/returnError';
import { db } from '~services/firebase/firebase';
import { returnSuccess } from '~services/helpers/returnSuccess';
import { SuccessResponse } from '~services/types/SuccessResponse';
import { Order } from '~types/Order';

export async function addOrder({
	orderItems,
	userInfo,
}: Omit<Order, 'date'>): Promise<SuccessResponse> {
	const date = getCurrentDateInMs().toString();
	const orderRef = doc(db, 'orders', date);
	try {
		await setDoc(orderRef, {
			orderId: {
				date,
				orderItems,
				userInfo,
			},
		});
		return returnSuccess();
	} catch (error) {
		throw new Error(returnError(error));
	}
}
