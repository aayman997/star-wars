import type { FilmType } from "@appTypes/Film.interface";
import type { PeopleType } from "@appTypes/People.interface";

export interface PlanetType {
	climate: string;
	created: Date;
	diameter: string;
	edited: Date;
	films: string[] | FilmType[];
	gravity: string;
	name: string;
	orbital_period: string;
	population: string;
	residents: string[] | PeopleType[];
	rotation_period: string;
	surface_water: string;
	terrain: string;
	url: string;
}
