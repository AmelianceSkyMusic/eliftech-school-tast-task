'use client';

import { Center, Loader } from '@mantine/core';

export default function Loading() {
	return (
		<Center h={'100vh'} m="auto">
			<Loader />
		</Center>
	);
}
