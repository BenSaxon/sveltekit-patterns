<script lang="ts">
	export let isOpen = false;
	export let handleIsOpen: (open: boolean) => void;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleIsOpen(false);
		}
	}
</script>

<div
	id="overlay"
	on:click={() => handleIsOpen(false)}
	on:keydown={handleKeyDown}
	class={isOpen ? 'visible' : 'hidden'}
	role="presentation"
>
	<dialog
		open={isOpen}
		class={isOpen ? 'visible' : 'hidden'}
		on:click|stopPropagation
		on:keydown={handleKeyDown}
		role="presentation"
	>
		<slot />
	</dialog>
</div>

<style>
	div#overlay {
		width: calc(100vw - 40px);
		height: calc(100vh - 40px);
		position: fixed;
		background: rgba(0, 0, 0, 0.2);
		z-index: 20;
		top: 0;
		left: 0;
		transition: opacity 0.3s;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}
	div#overlay.visible {
		visibility: visible;
	}
	div#overlay.hidden {
		visibility: hidden;
	}
	dialog {
		z-index: 21;
		position: relative;
		border-radius: 10px;
		padding: 10px 30px 30px 30px;
		width: 100%;
		max-width: 600px;
		max-height: calc(100% - 40px);
		overflow: scroll;
		-webkit-box-shadow: 0px 0px 19px 0px rgba(184, 184, 184, 1);
		-moz-box-shadow: 0px 0px 19px 0px rgba(184, 184, 184, 1);
		box-shadow: 0px 0px 19px 0px rgba(184, 184, 184, 1);
	}
	@keyframes fadeInUpwards {
		0% {
			opacity: 0;
			transform: translateY(30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	dialog.visible {
		animation-name: fadeInUpwards;
		animation-duration: 0.5s;
	}
</style>
