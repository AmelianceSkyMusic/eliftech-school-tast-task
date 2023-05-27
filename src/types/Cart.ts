import { ProductItem } from './Product';
import { ShopItem } from './Shop';

export interface CartItem {
	shopId: ShopItem['id'];
	product: ProductItem;
	count: number;
}
