import { describe, it, expect, afterEach, vi } from 'vitest';
import getProducts from './getProducts';
import { getErrorMessage } from '$lib/utils/errorUtils';
import { mockProducts } from '$lib/utils/mockDataUtils';

// global.fetch = vitest.fn().mockImplementation(() =>
// 	Promise.resolve({
// 		json: () => Promise.resolve(mockProducts)
// 	})
// );

describe('getProducts', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it('returns data', async () => {
		const result = await getProducts(fetch);
		expect(result).toEqual(mockProducts);
	});
	it('throws error response', async () => {
		// global.fetch = vitest.fn().mockRejectedValue(new Error('Failed to fetch data'));

		try {
			await getProducts(fetch);
		} catch (error) {
			expect(getErrorMessage(error)).toEqual('Failed to fetch data');
		}
	});
});
