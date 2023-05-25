import type { Metadata } from 'next';

import { APP } from '~constants/APP';

export const metadata: Metadata = {
	title: `Shop | ${APP.name}`,
};

export default async function Home() {
	return <h1>Shop</h1>;
}
