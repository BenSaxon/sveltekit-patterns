<script lang="ts">
	export let alignItems: 'center' | 'flex-start' | 'flex-end' = 'center';
	export let justifyContent:
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'space-around'
		| 'space-evenly'
		| 'space-between' = 'flex-start';
	export let gap: '0px' | '5px' | '10px' | '20px' = '20px';
	export let flexWrap: 'wrap' | 'nowrap' = 'wrap';

	$: alignItemsClass = 'align-' + alignItems;
	$: JustifyContentClass = 'justify-' + justifyContent;
</script>

<div class={`row-wrapper ${alignItemsClass} ${JustifyContentClass} gap-${gap} ${flexWrap}`}>
	<slot />
</div>

<style>
	div {
		margin: var(--hstack-margin, 0);
	}
	div.row-wrapper {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
	div.wrap {
		flex-wrap: wrap;
	}
	div.no-wrap {
		flex-wrap: nowrap;
	}
	div.align-center {
		align-items: center;
	}
	div.align-flex-start {
		align-items: flex-start;
	}
	div.align-flex-end {
		align-items: center;
	}
	div.justify-center {
		justify-content: center;
	}
	div.justify-flex-start {
		justify-content: flex-start;
	}
	div.justify-flex-end {
		justify-content: flex-end;
	}
	div.justify-space-around {
		justify-content: space-around;
	}
	div.justify-space-evenly {
		justify-content: space-evenly;
	}
	div.justify-space-between {
		justify-content: space-between;
	}
	div.gap-0px {
		gap: 0px;
	}
	div.gap-5px {
		gap: 5px;
	}
	div.gap-10px {
		gap: 10px;
	}
	div.gap-20px {
		gap: 20px;
	}
</style>
