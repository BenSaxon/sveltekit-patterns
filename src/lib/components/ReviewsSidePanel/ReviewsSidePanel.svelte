<script lang="ts">
	import SidePanel from '../SidePanel.svelte';

	export let view: boolean;
	export let toggleSidePanel: (open: boolean, prodId?: string) => void;
</script>

<SidePanel {view} {toggleSidePanel}>
	<p>hello</p>
</SidePanel>
