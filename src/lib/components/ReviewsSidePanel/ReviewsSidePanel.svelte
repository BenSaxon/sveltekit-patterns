<script lang="ts">
	import type { ActionData } from '../../../routes/$types';
	import SidePanel from '../SidePanel.svelte';
	import { loadReviews, reviewsStore } from './store';

	export let view: boolean;
	export let formaData: ActionData;
	export let toggleSidePanel: (open: boolean, prodId?: string) => void;
	export let toggleAddReviewForm: (open: boolean, prodId?: string) => void;
	export let productId: string | undefined;

	$: {
		if (view) loadReviews(productId);
		else if (formaData?.success) {
			loadReviews(productId);
		}
	}
</script>

<SidePanel {view} {toggleSidePanel}>
	<button on:click={() => toggleAddReviewForm(true, productId)}>Add review</button>
	{#if $reviewsStore.loading}
		<p>Loading...</p>
	{:else if $reviewsStore.data}
		{#each $reviewsStore.data as review}
			<div>
				<p>By {review.reviewerName}</p>
				<p>{review.description}</p>
				<p>Rating: {review.rating}</p>
			</div>
			<hr />
		{/each}
	{/if}
</SidePanel>
