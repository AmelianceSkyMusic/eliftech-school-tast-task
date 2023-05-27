'use client';
import { useUserCartState } from '~store/useUserCartState';
import { ProductCard } from './ProductCard';
import { Text, Flex, Title, Group, Button, ScrollArea } from '@mantine/core';
import { useOrdersState } from '~store/useOrdersState';

interface ProductListProps {}

export function ProductList({}: ProductListProps) {
	const loading = useOrdersState((state) => state.loading);
	const userCart = useUserCartState((state) => state.userCart);
	const totalSum = userCart.reduce((acc, cartItem) => {
		return acc + cartItem.count * cartItem.product.price;
	}, 0);

	return (
		<Flex direction="column" gap="lg">
			<Title order={4}>Product list</Title>
			<ScrollArea.Autosize mah={'60vh'}>
				<Flex direction="column" gap="md">
					{userCart.length > 0 ? (
						userCart.map((cartItem) => {
							return (
								<ProductCard
									key={cartItem.product.id}
									cartItem={cartItem}
								/>
							);
						})
					) : (
						<Text>No products here</Text>
					)}
				</Flex>
			</ScrollArea.Autosize>
			<Group position="right" mt="md">
				<Text fz="lg" fw={700}>{`Total sum: $${totalSum}`}</Text>
				<Button type="submit" disabled={totalSum <= 0} loading={loading}>
					Submit
				</Button>
			</Group>
		</Flex>
	);
}
