import { Metadata } from 'next';

import { APP } from '~constants/APP';

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: `History | ${APP.name}`,
	description: 'history',
	icons: { icon: '/favicon.svg' },
};

export default function Layout({ children }: RootLayoutProps) {
	return <>{children}</>;
}
