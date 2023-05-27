import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import Loading from '~app/loading';
import { useOrdersState } from '~store/useOrdersState';
import { HistoryCard } from './HistoryCard';
import { Flex, Text } from '@mantine/core';
import { useShopsState } from '~store/useShopsState';

export default function HistoryCards() {
	const { allShops, loadingShops, getAllShops } = useShopsState(
		(state) => ({
			allShops: state.allShops,
			loadingShops: state.loading,
			getAllShops: state.getAllShops,
		}),
		shallow
	);

	const { loadingOrders, allOrders, getAllOrders } = useOrdersState(
		(state) => ({
			loadingOrders: state.loading,
			allOrders: state.allOrders,
			getAllOrders: state.getAllOrders,
		}),
		shallow
	);

	useEffect(() => {
		getAllOrders();
		if (!allShops) getAllShops();
	}, []);

	if (loadingShops && loadingOrders) return <Loading />;

	return (
		<Flex direction="column" gap="xl">
			{allOrders && allOrders?.length > 0 ? (
				allOrders?.map((order) => <HistoryCard order={order} />)
			) : (
				<Text>No history here</Text>
			)}
		</Flex>
	);
}
