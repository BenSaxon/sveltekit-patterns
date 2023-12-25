import { fail } from '@sveltejs/kit';
import type { Product } from './+page';

interface PostProductResponse {
	message?: string;
	product?: Product;
	success?: boolean;
}
export const actions = {
	postProduct: async ({ request }) => {
		try {
			const data = await request.formData();
			const title = data.get('title');
			const imageUrl = data.get('imageUrl');
			if (!title) throw new Error('title is required');
			if (!imageUrl) throw new Error('image url is required');
			const body = {
				title: data.get('title'),
				imageUrl: data.get('imageUrl')
			};
			const postProductRequest = await fetch(
				'http://127.0.0.1:5001/merchant-ai-poc-dev/europe-west3/postProduct',
				{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				}
			);
			const response: PostProductResponse = await postProductRequest.json();
			response.success = true;
			return response;
		} catch (error) {
			return fail(400, { message: 'An error occurred.', success: false });
		}
	}
};
