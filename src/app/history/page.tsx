'use client';

import { AppShell, Title } from '@mantine/core';
import { FooterLayout } from '~components/FooterLayout/FooterLayout';
import { HeaderLayout } from '~components/HeaderLayout/HeaderLayout';
import { StylesProvider } from '~components/StylesProvider/StylesProvider';
import HistoryCards from './HistoryCards';

export default function History() {
	return (
		<StylesProvider>
			<AppShell header={<HeaderLayout />} footer={<FooterLayout />}>
				<main>
					<Title order={3} pb="lg">
						History
					</Title>
					<HistoryCards />
				</main>
			</AppShell>
		</StylesProvider>
	);
}
