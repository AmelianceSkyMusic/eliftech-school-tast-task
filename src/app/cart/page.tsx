'use client';

import { AppShell, Title } from '@mantine/core';

import { FooterLayout } from '~components/FooterLayout/FooterLayout';
import { HeaderLayout } from '~components/HeaderLayout/HeaderLayout';
import { StylesProvider } from '~components/StylesProvider/StylesProvider';
import { CartForm } from './CartForm';

export default function Home() {
	return (
		<StylesProvider>
			<AppShell header={<HeaderLayout />} footer={<FooterLayout />}>
				<main>
					<Title order={3} pb="lg">
						Shopping Cart
					</Title>
					<CartForm />
				</main>
			</AppShell>
		</StylesProvider>
	);
}
