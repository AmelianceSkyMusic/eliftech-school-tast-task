import type { Metadata } from 'next';

import { APP } from '~constants/APP';

export const metadata: Metadata = {
	title: `Shopping Cart | ${APP.name}`,
};

export default function Home() {
	return <h1>Shopping Cart</h1>;
}
