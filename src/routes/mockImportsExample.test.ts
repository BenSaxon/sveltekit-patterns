// import { createTimestamp } from '$lib/utils/timeUtils';
// const timestamp = createTimestamp();
// const mockGetProducts = vi.hoisted(() => {
// 	return () => [
// 		{
// 			id: '1',
// 			title: 'Product 1',
// 			quantitySold: 10,
// 			createdAt: timestamp,
// 			imageUrl: 'image1.jpg'
// 		},
// 		{
// 			id: '2',
// 			title: 'Product 2',
// 			quantitySold: 20,
// 			createdAt: timestamp,
// 			imageUrl: 'image2.jpg'
// 		}
// 	];
// });
// const mockGetProductsError = vi.hoisted(() => {
// 	return () => {
// 		throw new Error('an error occured');
// 	};
// });
import { describe, it, expect, vi, afterEach } from 'vitest';
import { load } from './+page';

const mockedResponse = [
	{
		id: '1',
		title: 'Product 1',
		quantitySold: 10,
		createdAt: {
			nanoseconds: 67000000,
			seconds: 1703420277
		},
		imageUrl: 'image1.jpg'
	},
	{
		id: '2',
		title: 'Product 2',
		quantitySold: 20,
		createdAt: {
			nanoseconds: 67000000,
			seconds: 1703420277
		},
		imageUrl: 'image2.jpg'
	}
];

describe.skip('load', () => {
	afterEach(() => {
		// vi.restoreAllMocks();
		vi.resetModules();
		vi.resetAllMocks();
	});
	it('should return products', async () => {
		vi.mock('$lib/api/products/getProducts', () => {
			return { default: () => mockedResponse };
		});

		const result = await load();

		expect(result).toEqual({ products: mockedResponse });
	});

	it('should return error message', async () => {
		vi.mock('$lib/api/products/getProducts', () => {
			return {
				default: () => {
					throw new Error('an error occured');
				}
			};
		});

		const result = await load();

		expect(result).toEqual({
			products: undefined,
			errorMessage: 'an error occured'
		});
	});
});
