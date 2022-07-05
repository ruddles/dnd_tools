<script lang="ts">
	import { parse } from 'postcss';

	import type { Beast, BeastSpeed } from 'src/types/beast';
	import type { BeastDictionary } from 'src/types/beast_dictionary';
	import { createEventDispatcher } from 'svelte';

	export const max_cr = 2;
	export let beasts_dictionary: BeastDictionary;

	const dispatch = createEventDispatcher();

	const speedSummary = (speed: BeastSpeed) => {
		let summary = '';
		if (speed.walk) summary += 'W';
		if (speed.swim) summary += 'S';
		if (speed.fly) summary += 'F';
		return `(${summary})`;
	};

	const selectBeast = (beast: Beast) => {
		dispatch('beast_selected', beast);
	};

	const formatCRHeader = (cr: number) => {
		if (cr == 0 || cr >= 1) {
			return cr.toString();
		}

		const dnom = 1 / cr;
		return `1/${dnom}`;
	};
</script>

<nav class="h-full overflow-y-auto" aria-label="Beasts">
	{#each Object.keys(beasts_dictionary)
		.map((k) => parseFloat(k))
		.sort()
		.filter((k) => k <= max_cr) as cr}
		<div class="relative">
			<div
				class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
			>
				<h3>CR: {formatCRHeader(cr)}</h3>
			</div>

			<ul class="relative z-0 divide-y divide-gray-200">
				{#each beasts_dictionary[cr] as beast}
					<li class="bg-white">
						<div
							class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
						>
							<a href="#" on:click={() => selectBeast(beast)} class="focus:outline-none flex-1">
								<span class="absolute inset-0" aria-hidden="true" />
								<p class="text-sm font-medium text-indigo-600">{beast.name}</p>
								<p class="text-sm text-gray-500 truncate">{speedSummary(beast.speed)}</p>
							</a>
							<div class="text-sm text-gray-900">
								<span class="mr-2">AC: {beast.armor_class}</span>
								<span>HP: {beast.hit_points}</span>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</nav>
