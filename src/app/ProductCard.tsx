'use client';
import { AspectRatio, Button, Card, Group, Image, Text } from '@mantine/core';
import { useShopsState } from '~store/useShopsState';

import { useUserCartState } from '~store/useUserCartState';
import { ProductItem } from '~types/Product';

interface ProductCardProps {
	productItem: ProductItem;
}

export function ProductCard({ productItem }: ProductCardProps) {
	const addProductToCart = useUserCartState((state) => state.addProductToCart);
	const currentShopId = useShopsState((state) => state.currentShopId);
	const userCart = useUserCartState((state) => state.userCart);
	const removeProductFromCart = useUserCartState(
		(state) => state.removeProductFromCart
	);

	const handleAddButtonOnClick = () => {
		addProductToCart({
			shopId: currentShopId,
			product: productItem,
			count: 1,
		});
	};

	const isInCart =
		userCart.findIndex(
			(cartItem) => cartItem.product.id === productItem.id
		) >= 0;

	const handleRemoveButtonOnClick = () => {
		removeProductFromCart(productItem.id);
	};

	return (
		<Card
			padding="lg"
			radius="md"
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Card.Section>
				<AspectRatio bg="white" ratio={1 / 1} mx="auto">
					<Image
						src={productItem.image}
						width="100%"
						alt={productItem.title}
					/>
				</AspectRatio>
			</Card.Section>

			<Group position="apart" mt="md" mb="xs">
				<Text weight={500}>{productItem.title}</Text>
				<Text>{`$${productItem.price}`}</Text>
			</Group>

			<Text size="sm" color="dimmed">
				{productItem.description}
			</Text>

			<Group sx={{ flexGrow: 1 }} mt="md">
				{productItem.available !== 0 ? (
					isInCart ? (
						<Button
							variant="light"
							fullWidth
							color="red"
							radius="sm"
							mt="auto"
							onClick={handleRemoveButtonOnClick}
						>
							Remove from cart
						</Button>
					) : (
						<Button
							variant="light"
							fullWidth
							color="blue"
							radius="sm"
							mt="auto"
							onClick={handleAddButtonOnClick}
						>
							Add to cart
						</Button>
					)
				) : (
					<Button mt="auto" fullWidth radius="sm" disabled>
						Not available
					</Button>
				)}
			</Group>
		</Card>
	);
}
