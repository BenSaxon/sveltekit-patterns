import getReviews from '$lib/api/reviews/getReviews';
import type { Review } from '$lib/models';
import { getErrorMessage } from '$lib/utils/errorUtils';
import { writable } from 'svelte/store';

interface ReviewStore {
	data: Review[] | undefined;
	loading: boolean | undefined;
	errorMessage: string | undefined;
}
export const reviewsStore = writable<ReviewStore>({
	data: undefined,
	loading: true,
	errorMessage: undefined
});

export const loadReviews = async (productId: string | undefined) => {
	reviewsStore.set({
		data: undefined,
		loading: true,
		errorMessage: undefined
	});
	if (!productId) return;
	try {
		const reviews = await getReviews(productId);
		reviewsStore.set({
			data: reviews,
			loading: false,
			errorMessage: undefined
		});
	} catch (e) {
		reviewsStore.set({
			data: undefined,
			loading: false,
			errorMessage: getErrorMessage(e)
		});
	}
};
