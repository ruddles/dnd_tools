<script lang="ts">
	import { formatCr } from '$lib/beast_utils';

	import type { Beast } from 'src/types/beast';

	export let beast: Beast | null;

	const reset = () => {
		beast = null;
	};
</script>

<div class="flex h-full m-4 overflow-y-auto">
	{#if beast}
		<div class="flex flex-1 h-8 text-gray-900">
			<div class="w-1/3">
				{beast.name}
				<span class="text-sm text-gray-500">(CR {formatCr(beast.challenge_rating)})</span>
			</div>
			<div class="w-1/3">{beast.size} beast</div>
			<div class="w-1/3 flex items-end justify-end">
				<button
					class="inline-flex items-center px-2 py-1 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none sm:text-sm"
					on:click={reset}>X</button
				>
			</div>
		</div>
	{:else}
		<div class="flex flex-1 h-full items-center justify-center">Select a beast...</div>
	{/if}
</div>
