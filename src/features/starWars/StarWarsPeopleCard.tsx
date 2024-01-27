import type { SpeciesColorKeys } from "@appTypes/SpeciesColor.interface";
import { clsx } from "clsx";
import Dialog from "@components/Dialog";
import StarWarPeopleDetails from "@features/starWars/StarWarPeopleDetails";
import getIdFromUrl from "@utils/getIdFromUrl";

interface SpeciesColorMapType {
	background: string;
	color: string;
}

const speciesColorMap: Record<SpeciesColorKeys, SpeciesColorMapType> = {
	human: { background: "bg-blue-500", color: "text-white" },
	droid: { background: "bg-yellow-600", color: "text-black" },
	wookie: { background: "bg-brown-700", color: "text-white" },
	hutt: { background: "bg-green-700", color: "text-white" },
	sullustan: { background: "bg-yellow-500", color: "text-black" },
	ewok: { background: "bg-brown-500", color: "text-white" },
	gungan: { background: "bg-green-500", color: "text-black" },
	"twi'lek": { background: "bg-purple-400", color: "text-black" },
	togruta: { background: "bg-red-500", color: "text-black" },
	mirialan: { background: "bg-green-500", color: "text-black" },
	"mon calamari": { background: "bg-blue-300", color: "text-black" },
	nautolan: { background: "bg-green-600", color: "text-black" },
	trandoshan: { background: "bg-yellow-700", color: "text-black" },
	rodian: { background: "bg-green-600", color: "text-black" },
	geonosian: { background: "bg-yellow-600", color: "text-black" },
	toydarian: { background: "bg-yellow-400", color: "text-black" },
	besalisk: { background: "bg-red-600", color: "text-white" },
	"yoda's species": { background: "bg-green-500", color: "text-black" },
	toong: { background: "bg-gray-400", color: "text-black" },
	kaminoan: { background: "bg-blue-200", color: "text-black" },
	aleena: { background: "bg-blue-600", color: "text-white" },
	vulptereen: { background: "bg-purple-600", color: "text-white" },
	xexto: { background: "bg-indigo-500", color: "text-white" },
	tholothian: { background: "bg-rose-500", color: "text-black" },
	quermian: { background: "bg-yellow-300", color: "text-black" },
	chagrian: { background: "bg-blue-700", color: "text-white" },
	clawdite: { background: "bg-green-800", color: "text-white" },
	skakoan: { background: "bg-gray-600", color: "text-white" },
	kaleesh: { background: "bg-red-700", color: "text-white" },
	"pau'an": { background: "bg-purple-700", color: "text-white" },
	"kel dor": { background: "bg-purple-300", color: "text-black" },
};

export default function StarWarsPeopleCard({ name, image, specieName, url }: Readonly<{ name: string; image: string; specieName: string; url: string }>) {
	const cardColor = speciesColorMap[specieName as SpeciesColorKeys] || { background: "bg-indigo-500", text: "text-white" };

	const id = getIdFromUrl(url, "people");

	return (
		<Dialog>
			<Dialog.Open opens={`people_${id}`}>
				<div
					className={clsx(
						`aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1
						hover:shadow-2xl`,
						cardColor.color,
						cardColor.background,
					)}
				>
					<img className="h-3/4 w-full object-cover" src={image} alt={name} />
					<h3 className="p-2 font-sans text-lg font-bold text-white">{name}</h3>
				</div>
			</Dialog.Open>
			<Dialog.Window name={`people_${id}`}>
				<StarWarPeopleDetails peopleId={id} name={name} />
			</Dialog.Window>
		</Dialog>
	);
}
