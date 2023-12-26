<script lang="ts">
	export let view: boolean;
	export let toggleSidePanel: (open: boolean) => void;
</script>

<div class={view ? 'view side-panel' : 'side-panel'}>
	<button on:click={() => toggleSidePanel(false)}>Close</button>
	<slot />
</div>

<style>
	div.side-panel.view {
		right: 0;
	}
	div.side-panel {
		width: 300px;
		height: calc(100vh - 40px);
		padding: 20px;
		position: fixed;
		right: -342px;
		top: 0;
		background-color: var(--white);
		transition: 0.3s;
		z-index: 2;
		border-left: solid 3px var(--black);
	}
</style>
