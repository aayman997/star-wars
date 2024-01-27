import type { FilmType } from "@appTypes/Film.interface";
import type { PeopleType } from "@appTypes/People.interface";

export interface VehicleType {
	cargo_capacity: string;
	consumables: string;
	cost_in_credits: string;
	created: Date;
	crew: string;
	edited: Date;
	length: string;
	manufacturer: string;
	max_atmosphering_speed: string;
	model: string;
	name: string;
	passengers: string;
	pilots: string[] | PeopleType[];
	films: string[] | FilmType[];
	url: string;
	vehicle_class: string;
}
