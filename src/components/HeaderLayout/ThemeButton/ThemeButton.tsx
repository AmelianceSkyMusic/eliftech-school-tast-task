import { useState } from 'react';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';

import { Icon } from '~components/Icon/Icon';

export function ThemeButton() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const [isDark, setIsDark] = useState(colorScheme === 'dark');

	const handleThemeSwitchOnChange = () => {
		setIsDark((prev) => !prev);
		toggleColorScheme();
	};

	return (
		<ActionIcon
			onClick={handleThemeSwitchOnChange}
			title="Toggle color scheme"
		>
			{isDark ? <Icon name="light_mode" /> : <Icon name="dark_mode" />}
		</ActionIcon>
	);
}
