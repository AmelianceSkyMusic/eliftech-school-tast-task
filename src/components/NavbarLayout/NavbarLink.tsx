import React from 'react';

import { Text, UnstyledButton, createStyles } from '@mantine/core';
import { useShopsState } from '~store/useShopsState';
import { shallow } from 'zustand/shallow';
import { useUserCartState } from '~store/useUserCartState';

interface NavbarLinkProps {
	shopName: string;
	shopId: string;
}

interface CreateStylesProps {
	active: boolean;
}

const useStyles = createStyles((theme, { active }: CreateStylesProps) => ({
	button: {
		display: 'block',
		width: '100%',
		padding: theme.spacing.md,
		backgroundColor: active
			? theme.fn.rgba(
					theme.colors[theme.primaryColor][theme.fn.primaryShade() - 2],
					0.3
			  )
			: '',
		borderLeft: active
			? `8px solid ${theme.fn.rgba(
					theme.colors[theme.primaryColor][theme.fn.primaryShade() - 2],
					0.3
			  )}`
			: '8px solid rgba(0, 0, 0, 0)',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		'&:hover': {
			backgroundColor: !active
				? theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0]
				: '',
		},
		'&:disabled': {
			opacity: '30%',
			pointerEvents: 'none',
		},
		cursor: active ? 'auto' : 'pointer',
	},
}));

export function NavbarLink({ shopName, shopId }: NavbarLinkProps) {
	const { currentShopId, setCurrentShopId } = useShopsState(
		(state) => ({
			currentShopId: state.currentShopId,
			setCurrentShopId: state.setCurrentShopId,
		}),
		shallow
	);

	const userCart = useUserCartState((state) => state.userCart);

	const shopIdFromCart = userCart && userCart[0]?.shopId;

	const active = shopId === (shopIdFromCart || currentShopId);

	const { classes: c } = useStyles({ active });

	const handelShopNameOnClick = () => {
		setCurrentShopId(shopId);
	};

	return (
		<UnstyledButton
			className={c.button}
			onClick={handelShopNameOnClick}
			disabled={userCart.length > 0 && userCart[0].shopId !== shopId}
		>
			<Text size="sm" fw="500">
				{shopName}
			</Text>
		</UnstyledButton>
	);
}
