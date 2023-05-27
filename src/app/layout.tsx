import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { APP } from '~constants/APP';

import 'react-material-symbols/dist/rounded.css';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: `Shop | ${APP.name}`,
	description: 'the shops page',
	icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
