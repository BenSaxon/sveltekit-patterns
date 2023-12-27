import { describe, it, expect, vi, afterEach } from 'vitest';
import { load } from './+page';
import Page from './+page.svelte';
import { createTimestamp } from '$lib/utils/timeUtils';
import { render, screen } from '@testing-library/svelte';
import { mockProducts } from '$lib/utils/mockDataUtils';
import 'vitest-dom/extend-expect'; // requried for using matchers like toBeInTheDocment
import type { Product } from '$lib/models';

const apiResponse: Product[] = [
	{
		id: '1',
		title: 'Product 1',
		quantitySold: 10,
		createdAt: createTimestamp(),
		imageUrl: 'image1.jpg',
		price: 1500
	},
	{
		id: '2',
		title: 'Product 2',
		quantitySold: 20,
		createdAt: createTimestamp(),
		imageUrl: 'image2.jpg',
		price: 1000
	}
];

global.fetch = vi.fn().mockImplementation(() =>
	Promise.resolve({
		json: () => Promise.resolve(apiResponse)
	})
);

describe('home page load function', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it('successful response', async () => {
		const result = await load({ fetch });
		expect(result).toEqual({ products: apiResponse });
	});

	it('api returns error', async () => {
		global.fetch = vi.fn().mockRejectedValue(new Error('Failed to fetch data'));
		const result = await load({ fetch });

		expect(result).toEqual({
			products: undefined,
			errorMessage: 'Failed to fetch data'
		});
	});
});

describe('home page UI', () => {
	it('renders product cards', () => {
		render(Page, {
			data: {
				products: mockProducts,
				errorMessage: undefined
			},
			form: {
				message: undefined,
				success: false,
				product: undefined
			}
		});
		mockProducts.forEach((p) => {
			const card = screen.getByTestId(`product-card-${p.id}`);
			expect(card).toBeVisible();
		});
	});
});
