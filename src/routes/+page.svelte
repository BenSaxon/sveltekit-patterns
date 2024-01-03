<script lang="ts">
	import Dialog from '$lib/components/Dialog.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import HStack from '$lib/components/HStack.svelte';

	import ReviewsSidePanel from '$lib/components/ReviewsSidePanel/ReviewsSidePanel.svelte';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import { goto } from '$app/navigation';

	export let data;
	export let form;

	let buttonIsLoading = false;
	let showFormMessage = false;

	let viewAddProductForm = false;
	const handleToggleViewProductForm = (open: boolean) => {
		viewAddProductForm = open;
		showFormMessage = false;
	};

	let openReviewsSidePanel = false;
	let productId: string | undefined = undefined;

	const toggleReviewsSidePanel = (open: boolean, prodId?: string) => {
		openReviewsSidePanel = open;
		productId = prodId;
		showFormMessage = false;
	};

	let viewAddReviewForm = false;
	const toggleAddReviewForm = (open: boolean) => {
		viewAddReviewForm = open;
		showFormMessage = false;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Dialog isOpen={viewAddProductForm} handleIsOpen={handleToggleViewProductForm}>
	<h3>Add product</h3>
	<form
		method="POST"
		action="?/postProduct"
		use:enhance={() => {
			buttonIsLoading = true;
			return async ({ result, update }) => {
				buttonIsLoading = false;
				showFormMessage = true;
				if (result.type === 'redirect') {
					goto(result.location);
				} else {
					await update();
				}
			};
		}}
	>
		<Input name="title" label="Title:" --margin="20px 0 0 0" />
		<Input name="imageUrl" label="Image URL:" --margin="20px 0 0 0" />
		<Input name="price" label="Price:" type="number" --margin="20px 0 0 0" />
		<HStack --margin="40px 0 0 0">
			<Button
				onClickHandler={() => handleToggleViewProductForm(false)}
				type="button"
				size="sm"
				variant="outline"
				disabled={buttonIsLoading}>Close</Button
			>
			<Button
				type="submit"
				loading={buttonIsLoading}
				size="sm"
				variant="primary"
				background="orange">Add product</Button
			>
		</HStack>
	</form>
	{#if form?.message && showFormMessage}
		<p>{form?.message.toString()}</p>
	{/if}
</Dialog>

<Dialog isOpen={viewAddReviewForm} handleIsOpen={handleToggleViewProductForm}>
	<h3>Add review for {productId}</h3>
	<form
		method="POST"
		action="?/postReview"
		use:enhance={() => {
			buttonIsLoading = true;
			return async ({ result, update }) => {
				buttonIsLoading = false;
				showFormMessage = true;
				if (result.type === 'redirect') {
					goto(result.location);
				} else {
					await update();
				}
			};
		}}
	>
		<Input name="reviewerName" label="Reviewer name:" --margin="20px 0 0 0" />
		<Input name="description" label="Description:" --margin="20px 0 0 0" />
		<Input name="rating" label="Rating (1-10):" type="number" --margin="20px 0 0 0" />
		<input name="productId" value={productId} type="hidden" />
		<HStack --margin="40px 0 0 0">
			<Button
				onClickHandler={() => toggleAddReviewForm(false)}
				type="button"
				size="sm"
				variant="outline"
				disabled={buttonIsLoading}>Close</Button
			>
			<Button
				type="submit"
				loading={buttonIsLoading}
				onClickHandler={() => null}
				size="sm"
				variant="primary"
				background="orange">Add review</Button
			>
		</HStack>
	</form>
	{#if form?.message && showFormMessage}
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
