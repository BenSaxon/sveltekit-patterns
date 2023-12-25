import type { Product } from '../../../routes/+page';

const getProducts = async (): Promise<Product[]> => {
	const productsRequest = await fetch(
		'http://127.0.0.1:5001/merchant-ai-poc-dev/europe-west3/getAllProducts',
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
	return products;
};

export default getProducts;
