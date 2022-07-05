import axios from 'axios';
import type { Beast } from 'src/types/beast';

const root = 'https://www.dnd5eapi.co/graphql';

export const get_beasts = async (): Promise<Beast[]> => {
	// const props = ['name', 'type', 'challenge_rating'].join('\n');
	const props = `{
        name,
        type,
        challenge_rating,
        speed {
            walk,
            swim,
            fly,
        },
        armor_class,
        hit_points,
        size
    }`;

	let body = {
		query: `query Monsters($filter: FilterFindManyMonsterInput) {\n  monsters(filter: $filter) ${props} \n}`,
		variables: { filter: { type: 'beast' } }
	};
	let res = await axios.post(root, body);
	return res.data.data.monsters;
};
