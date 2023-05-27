import { NextResponse } from 'next/server';

import { getAllProducts, getShopProducts } from './data';

import { isObjectEmpty } from '~/ameliance-scripts/scripts';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const obj = Object.fromEntries(searchParams.entries());

	let response;

	if (isObjectEmpty(obj)) {
		response = await getAllProducts();
	} else if (obj.shop) {
		response = await getShopProducts(obj.shop);
	}

	return NextResponse.json(response);
}
