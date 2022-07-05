<script lang="ts">
	import BeastDetails from '$lib/beast-details/BeastDetails.svelte';
	import BeastList from '$lib/beast_list/BeastList.svelte';
	import type { Beast } from 'src/types/beast';
	import type { BeastDictionary } from 'src/types/beast_dictionary';
	import { get_beasts } from '../../api_client/dnd5eapi';

	let beast: Beast | null;

	let load_beasts = async () => {
		return await get_beasts().then((data) => {
			let dict: BeastDictionary = {
				0: [],
				0.125: [],
				0.25: [],
				0.5: [],
				1: [],
				2: [],
				3: [],
				4: [],
				5: []
			};

			data
				.filter((b) => b.challenge_rating <= 2)
				.forEach((beast) => {
					dict[beast.challenge_rating].push(beast);
				});

			return dict;
		});
	};

	let beasts_promise = load_beasts();
</script>

<div class="w-1/4">
	{#await beasts_promise then beasts}
		<BeastList beasts_dictionary={beasts} on:beast_selected={(e) => (beast = e.detail)} />
	{/await}
</div>
<div class="w-3/4">
	<BeastDetails {beast} />
</div>
