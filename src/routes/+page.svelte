<script lang="ts">
	import Dialog from '$lib/components/Dialog.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import HStack from '$lib/components/HStack.svelte';

	import ReviewsSidePanel from '$lib/components/ReviewsSidePanel/ReviewsSidePanel.svelte';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';

	export let data;
	export let form;

	let buttonLoadingState = false;
	const postData = () => {
		buttonLoadingState = true;
		return () => (buttonLoadingState = false);
	};

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

	let viewAddReviewForm = false;
	const toggleAddReviewForm = (open: boolean) => {
		viewAddReviewForm = open;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Dialog isOpen={viewAddProductForm} handleIsOpen={handleToggleViewProductForm}>
	<h3>Add product</h3>
	<form method="POST" action="?/postProduct" use:enhance={postData}>
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
			<button
				on:click={() => handleToggleViewProductForm(false)}
				type="button"
				disabled={buttonLoadingState}>Close</button
			>
			<button type="submit" disabled={buttonLoadingState}>Add product</button>
		</HStack>
	</form>
	{#if form?.message}
		<p>{form?.message.toString()}</p>
	{/if}
</Dialog>

<Dialog isOpen={viewAddReviewForm} handleIsOpen={handleToggleViewProductForm}>
	<h3>Add review for {productId}</h3>
	<form method="POST" action="?/postReview" use:enhance={postData}>
		<label>
			Reviewer name
			<input name="reviewerName" />
		</label>
		<label>
			Description
			<input name="description" />
		</label>
		<label>
			Rating (1-10)
			<input name="rating" type="number" />
		</label>
		<input name="productId" value={productId} type="hidden" />
		<HStack>
			<button
				on:click={() => toggleAddReviewForm(false)}
				type="button"
				disabled={buttonLoadingState}>Close</button
			>
			<button type="submit" disabled={buttonLoadingState}>Add review</button>
		</HStack>
	</form>
	{#if form?.message}
		<p>{form?.message.toString()}</p>
	{/if}
</Dialog>

<ReviewsSidePanel
	view={openReviewsSidePanel}
	toggleSidePanel={toggleReviewsSidePanel}
	{productId}
	formaData={form}
	{toggleAddReviewForm}
/>

<section>
	<Button
		onClickHandler={() => handleToggleViewProductForm(true)}
		variant="primary"
		background="orange"
		--margin="20px 0">Add product</Button
	>
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
