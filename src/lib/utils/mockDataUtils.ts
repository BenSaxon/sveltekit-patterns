import type { Product } from '../../routes/+page';
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
