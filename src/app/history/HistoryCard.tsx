import {
	Card,
	Divider,
	Flex,
	Image,
	SimpleGrid,
	Text,
	Title,
} from '@mantine/core';
import { parseCurrentDateFromMs } from '~/ameliance-scripts/scripts';
import { useShopsState } from '~store/useShopsState';
import { Order } from '~types/Order';

interface HistoryCardProps {
	order: Order;
}

export function HistoryCard({ order }: HistoryCardProps) {
	const allShops = useShopsState((state) => state.allShops);
	const date = parseCurrentDateFromMs(order.date);
	const orderDate = date.toLocaleDateString();
	const orderTime = date.toLocaleTimeString();
	const totalSum = order.orderItems.reduce((acc, cartItem) => {
		return acc + cartItem.count * cartItem.product.price;
	}, 0);

	return (
		<Card padding="xl" radius="md">
			<Flex direction="column" gap="md">
				<Title order={4}>{`Order ID: ${order.date}`}</Title>
				<Divider />
				<Flex direction="column" gap="xl">
					<SimpleGrid
						cols={2}
						spacing="xl"
						breakpoints={[
							{ maxWidth: 'lg', cols: 2 },
							{ maxWidth: 'sm', cols: 1 },
						]}
					>
						<Flex direction="column" gap="xs">
							<Title order={5}>
								{allShops && allShops[order.orderItems[0].shopId].name}
							</Title>
							<Text size="xs">{`Date: ${orderDate} ${orderTime}`}</Text>
							<Text size="xs">{`User: ${order.userInfo.name}`}</Text>
							<Text size="xs">{`Address: ${order.userInfo.address}`}</Text>
							<Text size="xs">{`Total sum: $${totalSum}`}</Text>
						</Flex>
						<Flex direction="column" gap="xl" sx={{ flexGrow: 1 }}>
							{order.orderItems.map((item) => (
								<Flex
									key={`${item.shopId}-${item.product.id}`}
									gap="sm"
								>
									<Image
										radius="xs"
										src={item.product.image}
										height={80}
										width={80}
										alt={item.product.title}
									/>
									<Flex direction="column">
										<Text weight={500}>{item.product.title}</Text>
										<Text size="xs">{`Price: $${item.product.price}`}</Text>
										<Text size="xs">{`Count: x${item.count}`}</Text>
									</Flex>
								</Flex>
							))}
						</Flex>
					</SimpleGrid>
				</Flex>
			</Flex>
		</Card>
	);
}
