<script lang="ts">
	export let href = '';
	export let hover = true;
	export let testId = 'card';
</script>

{#if href}
	<a {href}>
		<div class="card" class:hover data-testid={testId}>
			<slot />
		</div>
	</a>
{:else}
	<div class="card" data-testid={testId}>
		<slot />
	</div>
{/if}

<style>
	a {
		text-decoration: none;
	}
	div.card {
		width: calc(100% - 46px);
		padding: 20px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		border-radius: 10px;
		color: var(--black);
		background: var(--white);
		height: auto;
		transition: 0.3s;
		border: solid 3px var(--black);
		flex-shrink: 0;
		flex-grow: 1;
		overflow: hidden;
		position: relative;
	}
	div.card.hover:hover {
		background: var(--black);
		border-color: var(--black);
		color: var(--white);
		transition: 0.3s;
	}
</style>
