<script lang="ts">
	import Button from './Button.svelte';

	export let view: boolean;
	export let toggleSidePanel: (open: boolean) => void;
</script>

<div class={view ? 'view side-panel' : 'side-panel'}>
	<Button onClickHandler={() => toggleSidePanel(false)} variant="outline" size="sm">Close</Button>
	<slot />
</div>

<style>
	div.side-panel.view {
		right: 0;
	}
	div.side-panel {
		width: 400px;
		height: calc(100vh - 40px);
		padding: 20px;
		position: fixed;
		right: -442px;
		top: 0;
		background-color: var(--white);
		transition: 0.3s;
		z-index: 2;
		border-left: solid 3px var(--black);
	}
</style>
