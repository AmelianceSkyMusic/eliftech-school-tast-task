import type { MantineTheme } from '@mantine/core';

export const Button = {
	Button: {
		styles: (theme: MantineTheme) => ({
			root: {
				transition: 'background-color 0.2s linear, box-shadow 0.2s linear',
				'&:hover': {
					boxShadow: `0px 0px 8px 4px ${
						theme.colorScheme === 'dark'
							? theme.fn.rgba(
								theme.colors[theme.primaryColor][theme.fn.primaryShade() - 2],
								0.5,
							)
							: theme.fn.rgba(
								theme.colors[theme.primaryColor][theme.fn.primaryShade() - 2],
								0.5,
							)
					}`,
					backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade() - 1],
				},
				'&:active': {
					transition: 'background-color 0s linear, box-shadow 0s linear',
					backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade() + 1],
					boxShadow: `0px 0px 4px 4px ${theme.fn.rgba(theme.colors[theme.primaryColor][theme.fn.primaryShade()], 0.2)}`,
				},
			},
		}),
	},
};
