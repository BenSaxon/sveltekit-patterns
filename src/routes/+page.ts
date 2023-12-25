import getProducts from '$lib/api/products/getProducts';
import { getErrorMessage } from '$lib/utils/errorUtils';
import type { Timestamp } from 'firebase/firestore';

export interface Product {
	id?: string;
	title: string;
	quantitySold: number;
	createdAt: Timestamp;
	imageUrl?: string;
	price: number;
}

export async function load() {
	try {
		const products: Product[] = await getProducts();
		return { products: products, errorMessage: undefined };
	} catch (e) {
		return { products: undefined, errorMessage: getErrorMessage(e) };
	}
}
