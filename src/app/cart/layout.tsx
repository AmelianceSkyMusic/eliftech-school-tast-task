import { Metadata } from 'next';

import { APP } from '~constants/APP';

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: `Shop | ${APP.name}`,
	description: 'the shops page',
	icons: { icon: '/favicon.svg' },
};

export default function Layout({ children }: RootLayoutProps) {
	return <>{children}</>;
}
