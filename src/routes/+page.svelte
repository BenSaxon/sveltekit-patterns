<script lang="ts">
	// import { enhance } from '$app/forms';
	import Dialog from '$lib/components/Dialog.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import HStack from '$lib/components/HStack.svelte';

	import { storeTest } from './store.js';
	import ReviewsSidePanel from '$lib/components/ReviewsSidePanel/ReviewsSidePanel.svelte';

	export let data;
	export let form;

	let viewAddProductForm = false;
	const handleToggleViewProductForm = (open: boolean) => {
		viewAddProductForm = open;
	};

	let openReviewsSidePanel = false;
	let productId: string | undefined = undefined;

	const toggleReviewsSidePanel = (open: boolean, prodId?: string) => {
		openReviewsSidePanel = open;
		productId = prodId;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Dialog isOpen={viewAddProductForm} handleIsOpen={handleToggleViewProductForm}>
	<h3>Add product</h3>
	<form method="POST" action="?/postProduct">
		<label>
			Title
			<input name="title" />
		</label>
		<label>
			Image URL
			<input name="imageUrl" />
		</label>
		<label>
			Price (pence)
			<input name="price" />
		</label>
		<HStack>
			<button on:click={() => handleToggleViewProductForm(false)} type="button">Close</button>
			<button type="submit">Add product</button>
		</HStack>
	</form>
	{#if form?.message}
		<p>{form?.message.toString()}</p>
	{/if}
</Dialog>

<ReviewsSidePanel view={openReviewsSidePanel} toggleSidePanel={toggleReviewsSidePanel} />

<section>
	<button on:click={() => handleToggleViewProductForm(true)}>Add product</button>
</section>

<section class="products">
	{#if data.errorMessage}
		<p>{data.errorMessage}</p>
	{/if}

	{#if data.products}
		{#each data.products as product}
			<ProductCard
				imageUrl={product.imageUrl}
				price={product.price}
				quantitySold={product.quantitySold}
				title={product.title}
				testId={`product-card-${product.id}`}
				{toggleReviewsSidePanel}
				productId={product.id || ''}
			/>
		{/each}
	{/if}
</section>

<style>
	section.products {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		justify-content: center;
		align-items: center;
		/* flex: 0.6; */
	}
</style>
