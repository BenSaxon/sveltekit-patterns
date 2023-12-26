<script lang="ts">
	import type { Timestamp } from 'firebase/firestore';
	import { currencyAndAmountFormatter } from '$lib/utils/currencyUtils';
	import Card from './Card.svelte';
	import { formatDate } from '$lib/utils/dateUtils';

	export let title: string;
	export let imageUrl: string | undefined;
	export let quantitySold: number;
	export let price: number;
	export let testId = 'product-card';
	export let productId: string;
	export let toggleReviewsSidePanel: (open: boolean, productId: string) => void;
</script>

<Card>
	<div class="image-container" data-testid={testId}>
		<img src={imageUrl} alt={`image of ${title}`} class="center-cropped" />
	</div>
	<h3>{title}</h3>
	<p>Sold: {quantitySold}</p>
	<p>{currencyAndAmountFormatter(price)}</p>
	<button on:click={() => toggleReviewsSidePanel(true, productId)}>Reviews</button>
</Card>

<style>
	.image-container {
		width: 100%;
		height: 250px;
		overflow: hidden;
		position: relative;
	}

	.center-cropped {
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: center;
	}
</style>
