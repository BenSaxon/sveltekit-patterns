<script lang="ts">
	import SidePanel from '../SidePanel.svelte';
	import { loadReviews, reviewsStore } from './store';

	export let view: boolean;
	export let toggleSidePanel: (open: boolean, prodId?: string) => void;
	export let productId: string | undefined;

	$: view, loadReviews(productId);
</script>

<SidePanel {view} {toggleSidePanel}>
	<p>{JSON.stringify($reviewsStore)}</p>
	<p>{productId}</p>
</SidePanel>
