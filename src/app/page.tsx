'use client';

import { useEffect } from 'react';

import { AppShell, Title } from '@mantine/core';

import { FooterLayout } from '~components/FooterLayout/FooterLayout';
import { HeaderLayout } from '~components/HeaderLayout/HeaderLayout';
import { NavbarLayout } from '~components/NavbarLayout/NavbarLayout';
import { StylesProvider } from '~components/StylesProvider/StylesProvider';

import { ProductCardsGrid } from './ProductCardsGrid';
import { useShopsState } from '~store/useShopsState';
import Loading from './loading';
import { shallow } from 'zustand/shallow';
import { useShopProductsState } from '~store/useShopProductsState';

export default function Home() {
	const { allShops, currentShopId, loadingShops, getAllShops } = useShopsState(
		(state) => ({
			allShops: state.allShops,
			currentShopId: state.currentShopId,
			loadingShops: state.loading,
			getAllShops: state.getAllShops,
		}),
		shallow
	);

	const { getAllProducts, loadingProducts } = useShopProductsState(
		(state) => ({
			getAllProducts: state.getAllProducts,
			loadingProducts: state.loading,
		}),
		shallow
	);

	useEffect(() => {
		getAllProducts();
		if (!allShops) getAllShops();
	}, []);

	if (loadingShops && loadingProducts) return <Loading />;

	return (
		<StylesProvider>
			<AppShell
				header={<HeaderLayout />}
				footer={<FooterLayout />}
				navbar={<NavbarLayout />}
			>
				<main>
					<Title order={3} pb="lg">
						{(allShops && allShops[currentShopId].name) || ''}
					</Title>
					<ProductCardsGrid />
				</main>
			</AppShell>
		</StylesProvider>
	);
}
