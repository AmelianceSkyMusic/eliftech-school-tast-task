import { CartItem } from './Cart';
import { UserInfo } from './UserInfo';

export interface Order {
	orderItems: CartItem[];
	date: string;
	userInfo: UserInfo;
}
