import getProducts from '$lib/api/products/getProducts';
import type { Product } from '$lib/models';
import { getErrorMessage } from '$lib/utils/errorUtils';

export async function load({ fetch }) {
	try {
		const products: Product[] = await getProducts(fetch);
		return { products: products, errorMessage: undefined };
	} catch (e) {
		return { products: undefined, errorMessage: getErrorMessage(e) };
	}
}
