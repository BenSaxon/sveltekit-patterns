<script lang="ts">
	export let color: 'white' | 'black' | 'orange' = 'white';
	export let orangeBackground = false;
</script>

<div class={orangeBackground ? `spinner ${color} orange-background` : `spinner ${color}`} />

<style>
	.spinner {
		border-top: 3px solid transparent;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		animation: spin 1s linear infinite;
		margin: 0 auto;
	}
	.spinner.white {
		border: 3px solid var(--white);
		border-top: 3px solid var(--black);
	}
	.spinner.white.orange-background {
		border-top: 3px solid var(--orange);
	}
	.spinner.black {
		border: 3px solid var(--black);
		border-top: 3px solid white;
	}
	.spinner.orange {
		border: 3px solid var(--orange);
		border-top: 3px solid white;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
