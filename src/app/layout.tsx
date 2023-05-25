import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { APP_NAME } from '~constants/APP_NAME';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: `${APP_NAME}`,
	description: 'description',
	icons: { icon: '/favicon.svg' }
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({
	children,
}: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
