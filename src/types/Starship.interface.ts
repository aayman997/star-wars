import type { FilmType } from "@appTypes/Film.interface";
import type { PeopleType } from "@appTypes/People.interface";

export interface StarshipType {
	MGLT: string;
	cargo_capacity: string;
	consumables: string;
	cost_in_credits: string;
	created: Date;
	crew: string;
	edited: Date;
	hyperdrive_rating: string;
	length: string;
	manufacturer: string;
	max_atmosphering_speed: string;
	model: string;
	name: string;
	passengers: string;
	films: string[] | FilmType[];
	pilots: string[] | PeopleType[];
	starship_class: string;
	url: string;
}
