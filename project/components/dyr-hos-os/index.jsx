import { getAnimals } from "@/lib/dal/animals";
import Section from "../section";
import AnimalCard from "../animal-card";
import { cacheLife } from "next/cache";

export default async function DyrHosOs() {
	"use cache";

	cacheLife({
		stale: 60 * 30,
		revalidate: 60 * 15,
		expire: 60 * 60 * 24,
	});

	const data = await getAnimals();

	return (
		<Section title="Dyr hos os">
			<ul>
				{data.success
					? data.animals.map(animal => 
						<li key={animal.id}>
							<AnimalCard 
								name={animal.name} 
								description={animal.description} 
								asset={animal.asset}
								id={animal.id}
							/>
						</li>)
					: <p>{data.message}</p>
				}
			</ul>
		</Section>
	);
}