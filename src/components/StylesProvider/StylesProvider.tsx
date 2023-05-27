import type { ColorScheme } from '@mantine/core';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

import { APP } from '~constants/APP';

import { components } from './components';

interface StylesProvider {
	children: React.ReactNode;
}

export function StylesProvider({ children }: StylesProvider) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: `${APP.name}/mantine-color-scheme`,
		defaultValue: 'dark',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) => {
		const newColorScheme =
			value || (colorScheme === 'dark' ? 'light' : 'dark');
		setColorScheme(newColorScheme);
	};

	useHotkeys([['ctrl+shift+l', () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme,
					defaultRadius: 'md',
					activeStyles: {
						transform: 'none',
					},
					components,
				}}
			>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
