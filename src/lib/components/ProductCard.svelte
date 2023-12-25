<script lang="ts">
	import type { Timestamp } from 'firebase/firestore';
	import { currencyAndAmountFormatter } from '$lib/utils/currencyUtils';
	import Card from './Card.svelte';
	import { formatDate } from '$lib/utils/dateUtils';

	export let title: string;
	export let imageUrl: string | undefined;
	export let quantitySold: number;
	export let price: number;
	export let createdAt: Timestamp;
	export let testId = "product-card"
</script>

<Card>
	<div class="image-container" data-testid={testId}>
		<img src={imageUrl} alt={`image of ${title}`} class="center-cropped" />
	</div>
	<h3>{title}</h3>
	<p>Sold: {quantitySold}</p>
	<p>{currencyAndAmountFormatter(price)}</p>
	<!-- <p>{formatDate(createdAt.toDate())}</p> -->
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
