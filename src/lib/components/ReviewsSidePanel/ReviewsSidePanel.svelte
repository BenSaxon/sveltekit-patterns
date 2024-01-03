<script lang="ts">
	import type { ActionData } from '../../../routes/$types';
	import Button from '../Button.svelte';
	import SidePanel from '../SidePanel.svelte';
	import { loadReviews, reviewsStore } from './store';

	export let view: boolean;
	export let formaData: ActionData;
	export let toggleSidePanel: (open: boolean, prodId?: string) => void;
	export let toggleAddReviewForm: (open: boolean, prodId?: string) => void;
	export let productId: string | undefined;

	$: {
		if (view) loadReviews(productId);
		else if (formaData) {
			loadReviews(productId);
		}
	}
</script>

<SidePanel {view} {toggleSidePanel}>
	<Button
		onClickHandler={() => toggleAddReviewForm(true, productId)}
		variant="primary"
		size="sm"
		--margin="20px 0 0 0">Add review</Button
	>
	{#if $reviewsStore.loading}
		<p>Loading...</p>
	{:else if $reviewsStore.data}
		{#each $reviewsStore.data as review}
			<div>
				<p>By {review.reviewerName}</p>
				<p>{review.description}</p>
				<p>Rating: {review.rating}/10</p>
			</div>
			<hr />
		{/each}
	{/if}
</SidePanel>
