<script lang="ts">
	import Spinner from './Spinner.svelte';

	export let variant: 'primary' | 'outline' | 'icon' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let background: 'orange' | 'black' = 'black';
	export let flat = false;
	export let loading = false;
	export let disabled = false;
	export let onClickHandler: (() => void) | undefined = undefined;
	export let testId = 'button';
	export let type: 'button' | 'submit' = 'button';
</script>

<button
	class={variant + ' ' + size + ' ' + background}
	class:flat
	class:loading
	class:disabled
	on:click={() => (loading || disabled ? null : onClickHandler ? onClickHandler() : null)}
	data-testid={testId}
	{type}
>
	<div class={loading ? `spinner-wrapper loading ${size}` : `spinner-wrapper ${size}`}>
		<Spinner orangeBackground={background === 'orange'} />
	</div>
	<slot />
</button>

<style>
	button {
		cursor: pointer;
		border-radius: 10px;
		font-weight: bold;
		transition: 0.3s;
		position: relative;
		margin: var(--margin, 0px);
		display: block;
	}
	button.sm {
		padding: 10px 20px;
	}
	button.md {
		padding: 15px 30px;
	}
	button.lg {
		padding: 20px 50px;
	}
	button.disabled,
	button.loading {
		cursor: not-allowed;
	}
	button.flat {
		box-shadow: none;
	}
	button.black:focus {
		outline: none;
		-webkit-box-shadow: 0px 0px 0px 4px rgba(255, 120, 0, 1);
		-moz-box-shadow: 0px 0px 0px 4px rgba(255, 120, 0, 1);
		box-shadow: 0px 0px 0px 4px rgba(255, 120, 0, 1);
	}
	button.orange:focus {
		outline: none;
		-webkit-box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
		-moz-box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
		box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
	}

	/* ----------------- */
	/* -----PRIMARY----- */
	/* ----------------- */
	button.primary {
		border: 0;
		background: var(--orange);
		border: solid 2px var(--orange);
		color: white;
	}
	button.primary.black {
		background: var(--black);
		border: solid 2px var(--black);
	}
	button.primary.orange {
		background: var(--orange);
		border: solid 2px var(--orange);
	}
	button.primary.black.disabled {
		background-color: var(--lightGrey);
		border: solid 2px var(--lightGrey);
		color: var(--offBlack);
	}
	button.primary.orange.disabled {
		background-color: var(--lightGrey);
		border: solid 2px var(--lightGrey);
		color: var(--offBlack);
	}
	button.primary.black:hover {
		background-color: var(--offBlack);
		color: var(--white);
	}
	button.primary.orange:hover {
		background-color: var(--lightOrange);
		color: var(--offBlack);
	}
	button.primary.black:active {
		background-color: var(--black);
	}
	button.primary.orange:active {
		background-color: var(--orange);
	}
	button.primary.black.disabled:active,
	button.primary.black.disabled:hover {
		background-color: var(--lightGrey);
		border: solid 2px var(--lightGrey);
		color: var(--offBlack);
	}
	button.primary.orange.disabled:active,
	button.primary.orange.disabled:hover {
		background-color: var(--lightGrey);
		border: solid 2px var(--lightGrey);
		color: var(--offBlack);
	}
	button.primary.orange.loading {
		color: transparent;
		background-color: var(--orange);
	}
	button.primary.black.loading {
		color: transparent;
		background-color: var(--black);
	}

	/* ----------------- */
	/* -----OUTLINE----- */
	/* ----------------- */
	button.outline.orange {
		background: var(--white);
		border: solid 2px var(--orange);
		color: var(--orange);
	}
	button.outline.black {
		background: var(--white);
		border: solid 2px var(--black);
		color: var(--black);
	}
	button.outline.black.disabled {
		background-color: var(--lightGrey);
		border: solid 2px var(--lightGrey);
		color: var(--offBlack);
		border-color: var(--darkGrey);
	}
	button.outline.orange.disabled {
		background-color: var(--lightGrey);
		border: solid 2px var(--darkGrey);
		color: var(--offBlack);
	}
	button.black.outline:hover,
	button.orange.outline:hover {
		background-color: var(--lightOrange);
		color: var(--black);
	}
	button.black.outline:active,
	button.orange.outline:active {
		background-color: var(--orange);
	}
	button.black.outline.disabled:active,
	button.black.outline.disabled:hover,
	button.orange.outline.disabled:active,
	button.orange.outline.disabled:hover {
		background-color: var(--lightGrey);
		border: solid 2px var(--darkGrey);
		color: var(--offBlack);
	}
	button.outline.orange.loading {
		color: transparent;
		background-color: var(--orange);
	}
	button.outline.black.loading {
		color: transparent;
		background-color: var(--black);
	}
	/* ----------------- */
	/* -----ICON----- */
	/* ----------------- */
	button.icon {
		padding: 10px;
		background: transparent;
		border: 0;
	}

	div.spinner-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		display: none;
		align-items: center;
		justify-content: center;
		z-index: 1;
		top: 0;
		left: 0;
	}
	div.spinner-wrapper.loading {
		display: flex;
	}
</style>
