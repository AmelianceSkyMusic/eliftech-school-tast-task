import { Box, createStyles, NavLink } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '~constants/ROUTES';
import { useUserCartState } from '~store/useUserCartState';

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
	const userCart = useUserCartState((state) => state.userCart);

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
				label={`Cart (${userCart.length})`}
				component={Link}
				href={ROUTES.cart}
				active={currentPathName === ROUTES.cart}
			/>
			<NavLink
				className={c.link}
				label={`History`}
				component={Link}
				href={ROUTES.history}
				active={currentPathName === ROUTES.history}
			/>
		</Box>
	);
}
