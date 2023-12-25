<script lang="ts">
	// import { enhance } from '$app/forms';
	import Dialog from '$lib/components/Dialog.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { storeTest } from './store.js';

	export let data;
	export let form;

	let viewAddProductForm = false;
	const handleToggleViewProductForm = (open: boolean) => {
		viewAddProductForm = open;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Dialog isOpen={viewAddProductForm} handleIsOpen={handleToggleViewProductForm}>
	<form method="POST" action="?/postProduct">
		<label>
			Title
			<input name="title" />
		</label>
		<label>
			Image URL
			<input name="imageUrl" />
		</label>
		<button>Add product</button>
	</form>
</Dialog>

<section>
	<button on:click={() => handleToggleViewProductForm(true)}>Add product</button>
</section>

<p data-testid="hello-text">hello-text</p>

<section class="products">
	{#if form?.message}
		<p>{form?.message.toString()}</p>
	{/if}

	{#if data.errorMessage}
		<p>{data.errorMessage}</p>
	{/if}

	{#if data.products}
		{#each data.products as product}
			<ProductCard
				createdAt={product.createdAt}
				imageUrl={product.imageUrl}
				price={product.price}
				quantitySold={product.quantitySold}
				title={product.title}
				testId={`product-card-${product.id}`}
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
