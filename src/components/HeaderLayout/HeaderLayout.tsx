import { Box, createStyles, Header, Title } from '@mantine/core';

import { APP } from '~constants/APP';

import { Navigation } from './Navigation/Navigation';
import { ThemeButton } from './ThemeButton/ThemeButton';

const useStyles = createStyles(() => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '100%',
	},

	controls: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '16px',
		height: '100%',
	},
}));

export function HeaderLayout() {
	const { classes: c } = useStyles();

	return (
		<Header height={{ base: 70 }} px="md">
			<Box className={c.container}>
				<Title order={4}>{APP.name}</Title>
				<Box className={c.controls}>
					<Navigation />
					<ThemeButton />
				</Box>
			</Box>
		</Header>
	);
}
