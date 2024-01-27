import type { FilmType } from "@appTypes/Film.interface";
import type { PlanetType } from "@appTypes/Planet.interface";
import type { SpecieType } from "@appTypes/Specie.interface";
import type { StarshipType } from "@appTypes/Starship.interface";
import type { VehicleType } from "@appTypes/Vehicle.interface";

export interface PeopleType {
	birth_year: string;
	created: Date;
	edited: Date;
	eye_color: string;
	films: string[] | FilmType[];
	gender: string;
	hair_color: string;
	height: string;
	homeworld: string | PlanetType;
	mass: string;
	name: string;
	skin_color: string;
	species: string[] | SpecieType[];
	starships: string[] | StarshipType[];
	url: string;
	vehicles: string[] | VehicleType[];
	image: string;
	specieName: string;
}
