import type { Product, Review } from '$lib/models';
import { createTimestamp } from './timeUtils';

export const mockProducts: Product[] = [
	{
		id: '1',
		title: 'Product 1',
		quantitySold: 10,
		createdAt: createTimestamp(),
		imageUrl: 'image1.jpg',
		price: 800
	},
	{
		id: '2',
		title: 'Product 2',
		quantitySold: 20,
		createdAt: createTimestamp(),
		imageUrl: 'image2.jpg',
		price: 500
	}
];

export const mockReviews: Review[] = [
	{
		id: '1',
		description: 'Review 1',
		createdAt: createTimestamp(),
		rating: 4,
		reviewerName: 'Ben Saxon',
		productId: 'product1'
	},
	{
		id: '2',
		description: 'Review 2',
		createdAt: createTimestamp(),
		rating: 2,
		reviewerName: 'Bob Marley',
		productId: 'product2'
	}
];
