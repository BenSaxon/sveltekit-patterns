import type { Product } from '$lib/models';
import { getErrorMessage } from '$lib/utils/errorUtils';
// import { API_URL } from '$env/static/private';

export async function load({ fetch }) {
	try {
		const productsRequest = await fetch(
			'http://127.0.0.1:5001/merchant-ai-poc-dev/europe-west3' + '/getAllProducts',
			{
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const products: Product[] = await productsRequest.json();
		return { products: products, errorMessage: undefined };
	} catch (e) {
		return { products: undefined, errorMessage: getErrorMessage(e) };
	}
}
