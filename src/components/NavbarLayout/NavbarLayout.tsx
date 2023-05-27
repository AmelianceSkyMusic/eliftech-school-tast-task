import { Navbar } from '@mantine/core';

import { NavbarLink } from './NavbarLink';
import { useShopsState } from '~store/useShopsState';
import Loading from '~app/loading';
import { shallow } from 'zustand/shallow';

export function NavbarLayout() {
	const { allShops, allShopIds, loading } = useShopsState(
		(state) => ({
			allShops: state.allShops,
			allShopIds: state.allShopIds,
			loading: state.loading,
		}),
		shallow
	);

	if (loading) return <Loading />;

	return (
		<Navbar width={{ base: 180 }} height={'auto'} p="xs">
			<Navbar.Section grow mt="md">
				{allShopIds &&
					allShops &&
					allShopIds.map((shopId) => (
						<NavbarLink
							key={allShops[shopId].name}
							shopName={allShops[shopId].name}
							shopId={allShops[shopId].id}
						/>
					))}
			</Navbar.Section>
		</Navbar>
	);
}
