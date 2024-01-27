import type { PlanetType } from "@appTypes/Planet.interface";
import type { PeopleType } from "@appTypes/People.interface";
import type { FilmType } from "@appTypes/Film.interface";

export interface SpecieType {
	average_height: string;
	average_lifespan: string;
	classification: string;
	created: Date;
	designation: string;
	edited: Date;
	eye_colors: string;
	hair_colors: string;
	homeworld: string | PlanetType;
	language: string;
	name: string;
	people: string[] | PeopleType[];
	films: string[] | FilmType[];
	skin_colors: string;
	url: string;
}
