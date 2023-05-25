'use client';

import { AppShell } from '@mantine/core';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { FooterLayout } from '~components/FooterLayout/FooterLayout';
import { HeaderLayout } from '~components/HeaderLayout/HeaderLayout';
import { StylesProvider } from '~components/StylesProvider/StylesProvider';
import { APP } from '~constants/APP';

import 'react-material-symbols/dist/rounded.css';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: `${APP.name}`,
	description: 'description',
	icons: { icon: '/favicon.svg' },
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<StylesProvider>
					<AppShell footer={<FooterLayout />} header={<HeaderLayout />}>
						<main>{children}</main>
					</AppShell>
				</StylesProvider>
			</body>
		</html>
	);
}
