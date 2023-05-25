import React from 'react';

import type { Metadata } from 'next';

import { APP_NAME } from '~constants/APP_NAME';

export const metadata: Metadata = {
	title: `PageName | ${APP_NAME}`,
};

export default function Home() {
	return (
		<main>
			<h1>PageName</h1>
		</main>
	);
}
