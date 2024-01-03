<script lang="ts">
	export let name: string;
	export let type = 'text';
	export let autocomplete = '';
	export let placeholder = '';
	export let label = '';
</script>

{#if label}
	<div class="margin">
		<label
			>{label}
			<input {name} {...{ type }} {placeholder} {autocomplete} />
		</label>
	</div>
{:else}
	<input {name} {...{ type }} {placeholder} {autocomplete} class="margin" />
{/if}

<style>
	input {
		background: var(--light);
		border: solid 1px var(--darkGrey);
		border-radius: 10px;
		padding: 14px 10px;
		width: calc(100% - 20px);
		margin: 5px 0 0 0;
	}
	.margin {
		margin: var(--margin, 0);
	}
</style>
