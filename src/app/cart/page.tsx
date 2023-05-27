'use client';
import type { Metadata } from 'next';

import { APP } from '~constants/APP';

import { AppShell, Title } from '@mantine/core';

import { FooterLayout } from '~components/FooterLayout/FooterLayout';
import { HeaderLayout } from '~components/HeaderLayout/HeaderLayout';
import { StylesProvider } from '~components/StylesProvider/StylesProvider';

export default function Home() {
	return (
		<StylesProvider>
			<AppShell header={<HeaderLayout />} footer={<FooterLayout />}>
				<main>
					<Title order={3} pb="lg">
						Shopping Cart
					</Title>
				</main>
			</AppShell>
		</StylesProvider>
	);
}
