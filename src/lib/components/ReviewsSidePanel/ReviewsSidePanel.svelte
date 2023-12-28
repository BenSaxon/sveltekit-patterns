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
		if (view && formaData) loadReviews(productId);
	}
</script>

<SidePanel {view} {toggleSidePanel}>
	<p>{JSON.stringify($reviewsStore)}</p>
	<p>{productId}</p>
	<button on:click={() => toggleAddReviewForm(true, productId)}>Add review</button>
</SidePanel>
