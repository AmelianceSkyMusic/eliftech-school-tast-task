import { NextResponse } from 'next/server';

import { getAllShops, getShop } from './data';
import { isObjectEmpty } from '~/ameliance-scripts/scripts';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const obj = Object.fromEntries(searchParams.entries());

	let response;

	if (isObjectEmpty(obj)) response = await getAllShops();
	else if (obj.shop) response = await getShop(obj.shop);

	return NextResponse.json(response);
}
