<script lang="ts">
	export let maxWidth: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="center">
	<div class={`container ${maxWidth}`}><slot /></div>
</div>

<style>
	div.center {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	div.container {
		height: 100%;
		width: 100%;
		margin: var(--container-margin, 0);
	}
	div.container.sm {
		max-width: 500px;
	}
	div.container.md {
		max-width: 700px;
	}
	div.container.lg {
		max-width: 900px;
	}
</style>
