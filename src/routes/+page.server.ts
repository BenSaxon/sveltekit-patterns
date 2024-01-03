import type { Product, Review } from '$lib/models';
import { getErrorMessage } from '$lib/utils/errorUtils.js';
import { fail } from '@sveltejs/kit';

interface PostProductResponse {
	message?: string;
	product?: Product;
	success?: boolean;
}
interface PostReviewResponse {
	message?: string;
	review?: Review;
	success?: boolean;
}
export const actions = {
	postProduct: async ({ request }) => {
		try {
			const data = await request.formData();
			const title = data.get('title');
			const imageUrl = data.get('imageUrl');
			const price = data.get('price');
			if (!title) throw new Error('Title is required');
			if (!imageUrl) throw new Error('Image url is required');
			if (!price) throw new Error('Price is required');
			const body = {
				title: title,
				imageUrl: imageUrl,
				price: price
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
	},
	postReview: async ({ request }) => {
		try {
			const data = await request.formData();
			const reviewerName = data.get('reviewerName');
			const rating = data.get('rating');
			const description = data.get('description');
			const productId = data.get('productId');

			if (!reviewerName) throw new Error('Reviewer name is required');
			if (!rating) throw new Error('Rating is required');
			if (!description) throw new Error('Description is required');
			if (!productId) throw new Error('ProductId is required');

			const body = {
				reviewerName,
				rating,
				description,
				productId
			};
			const postReviewRequest = await fetch(
				'http://127.0.0.1:5001/merchant-ai-poc-dev/europe-west3/postReview',
				{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				}
			);
			const response: PostReviewResponse = await postReviewRequest.json();
			response.success = true;
			return response;
		} catch (error) {
			return fail(400, { message: getErrorMessage(error) || 'An error occurred.', success: false });
		}
	}
};
