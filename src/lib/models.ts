import type { Timestamp } from 'firebase/firestore';

export interface Review {
	id?: string;
	reviewerName: string;
	rating: number;
	createdAt: Timestamp;
	description: string;
	productId: string;
}

export interface Product {
	id?: string;
	title: string;
	quantitySold: number;
	createdAt: Timestamp;
	imageUrl?: string;
	price: number;
}
