import { Card, Image, Text, Flex, ActionIcon } from '@mantine/core';
import { shallow } from 'zustand/shallow';
import { Icon } from '~components/Icon/Icon';
import { useUserCartState } from '~store/useUserCartState';
import { CartItem } from '~types/Cart';

interface ProductCardProps {
	cartItem: CartItem;
}

export function ProductCard({ cartItem }: ProductCardProps) {
	const {
		incrementProductInCart,
		decrementProductInCart,
		removeProductFromCart,
	} = useUserCartState(
		(state) => ({
			incrementProductInCart: state.incrementProductInCart,
			decrementProductInCart: state.decrementProductInCart,
			removeProductFromCart: state.removeProductFromCart,
		}),
		shallow
	);

	const productItem = cartItem.product;

	const handleMinusButtonOnClick = () => {
		decrementProductInCart(productItem.id);
	};

	const handlePlusButtonOnClick = () => {
		incrementProductInCart(productItem.id);
	};

	const handleRemoveButtonOnClick = () => {
		removeProductFromCart(productItem.id);
	};

	return (
		<Card padding="lg" radius="md">
			<Flex direction="column" gap="md">
				<Flex align="center" gap="md">
					<Image
						radius="xs"
						src={productItem.image}
						height={80}
						width={80}
						alt={productItem.title}
					/>

					<Flex direction="column" gap="md" sx={{ flexGrow: 1 }}>
						<Flex justify="space-between" align="center">
							<Text weight={500}>{productItem.title}</Text>
							<Text>{`$${productItem.price}`}</Text>
						</Flex>

						<Flex align="center" gap="md">
							<ActionIcon
								variant="light"
								radius="sm"
								onClick={handleRemoveButtonOnClick}
							>
								<Icon name="delete"></Icon>
							</ActionIcon>
							<Flex
								justify="flex-end"
								align="center"
								gap="sm"
								sx={{ flexGrow: 1 }}
							>
								<Text>{`×${cartItem.count}`}</Text>
								<ActionIcon
									variant="light"
									color="red"
									radius="sm"
									onClick={handleMinusButtonOnClick}
									disabled={cartItem.count <= 0}
								>
									<Icon name="remove"></Icon>
								</ActionIcon>
								<ActionIcon
									variant="light"
									color="green"
									radius="sm"
									onClick={handlePlusButtonOnClick}
								>
									<Icon name="add"></Icon>
								</ActionIcon>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Card>
	);
}
