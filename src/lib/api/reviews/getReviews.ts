import type { Review } from '$lib/models';

const getReviews = async (productId: string): Promise<Review[]> => {
	console.log(
		new URLSearchParams({
			productId: productId
		})
	);
	const reviewsRequest = await fetch(
		`http://127.0.0.1:5001/merchant-ai-poc-dev/europe-west3/getAllReviews?` +
			new URLSearchParams({
				productId: productId
			}).toString(),
		{
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	const reviews: Review[] = await reviewsRequest.json();
	return reviews;
};

export default getReviews;
