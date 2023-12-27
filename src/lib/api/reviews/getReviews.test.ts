import { describe, it, expect, vitest, afterEach, vi } from 'vitest';
import getReviews from './getReviews';
import { getErrorMessage } from '$lib/utils/errorUtils';
import { mockReviews } from '$lib/utils/mockDataUtils';

global.fetch = vitest.fn().mockImplementation(() =>
	Promise.resolve({
		json: () => Promise.resolve(mockReviews)
	})
);

describe('getProducts', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it('returns data', async () => {
		const result = await getReviews('productId');
		expect(result).toEqual(mockReviews);
	});
	it('throws error response', async () => {
		global.fetch = vitest.fn().mockRejectedValue(new Error('Failed to fetch data'));

		try {
			await getReviews('productId');
		} catch (error) {
			expect(getErrorMessage(error)).toEqual('Failed to fetch data');
		}
	});
});
