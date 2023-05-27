import { Metadata } from 'next';

import { APP } from '~constants/APP';

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: `Shopping Cart | ${APP.name}`,
	description: 'the shopping cart page',
	icons: { icon: '/favicon.svg' },
};

export default function Layout({ children }: RootLayoutProps) {
	return <>{children}</>;
}
