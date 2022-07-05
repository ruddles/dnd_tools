export interface Beast {
	name: string;
	type: string;
	challenge_rating: number;
	speed: BeastSpeed;
	armor_class: number;
	hit_points: number;
}

export interface BeastSpeed {
	walk?: string;
	swim?: string;
	fly?: string;
}
