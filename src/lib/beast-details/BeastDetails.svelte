<script lang="ts">
	import type { Beast } from 'src/types/beast';

	export let beast: Beast | null;
</script>

{#if beast}
	<p>{beast.name}</p>
{:else}
	<p>Select a beast...</p>
{/if}
