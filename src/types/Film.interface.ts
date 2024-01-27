import type { PeopleType } from "@appTypes/People.interface";
import type { PlanetType } from "@appTypes/Planet.interface";
import type { SpecieType } from "@appTypes/Specie.interface";
import type { StarshipType } from "@appTypes/Starship.interface";
import type { VehicleType } from "@appTypes/Vehicle.interface";

export interface FilmType {
	characters: string[] | PeopleType[];
	created: Date;
	director: string;
	edited: Date;
	episode_id: string;
	opening_crawl: string;
	planets: string[] | PlanetType[];
	producer: string;
	release_date: Date;
	species: string[] | SpecieType[];
	starships: string[] | StarshipType[];
	title: string;
	url: string;
	vehicles: string[] | VehicleType[];
}
