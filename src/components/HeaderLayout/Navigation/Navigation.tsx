import { Box, createStyles, NavLink } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '~constants/ROUTES';

const useStyles = createStyles(() => ({
	container: {
		display: 'flex',
		height: '100%',
	},
	link: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 'auto',
	},
}));

export function Navigation() {
	const { classes: c } = useStyles();
	const currentPathName = usePathname();

	return (
		<Box component="nav" className={c.container}>
			<NavLink
				className={c.link}
				label="Shop"
				component={Link}
				href={ROUTES.home}
				active={currentPathName === ROUTES.home}
			/>
			<NavLink
				className={c.link}
				label="Shopping Cart"
				component={Link}
				href={ROUTES.cart}
				active={currentPathName === ROUTES.cart}
			/>
		</Box>
	);
}
