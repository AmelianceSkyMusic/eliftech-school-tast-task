'use client';
import { SimpleGrid } from '@mantine/core';

import { shallow } from 'zustand/shallow';

import { ProductCard } from './ProductCard';
import { useShopProductsState } from '~store/useShopProductsState';
import Loading from './loading';
import { useShopsState } from '~store/useShopsState';
import { useUserCartState } from '~store/useUserCartState';

export function ProductCardsGrid() {
	const { allShopProducts, loadingProducts } = useShopProductsState(
		(state) => ({
			allShopProducts: state.allShopProducts,
			loadingProducts: state.loading,
		}),
		shallow
	);

	const { currentShopId, loadingShop } = useShopsState(
		(state) => ({
			currentShopId: state.currentShopId,
			loadingShop: state.loading,
		}),
		shallow
	);

	const userCart = useUserCartState((state) => state.userCart);

	const shopIdFromCart = userCart && userCart[0]?.shopId;

	if (loadingProducts || loadingShop) return <Loading />;

	return (
		<SimpleGrid
			cols={4}
			breakpoints={[
				{ maxWidth: 'lg', cols: 3 },
				{ maxWidth: 'md', cols: 2 },
				{ maxWidth: 'sm', cols: 1 },
			]}
		>
			{allShopProducts &&
				currentShopId &&
				allShopProducts[shopIdFromCart || currentShopId].map(
					(productItem) => (
						<ProductCard key={productItem.id} productItem={productItem} />
					)
				)}
		</SimpleGrid>
	);
}
