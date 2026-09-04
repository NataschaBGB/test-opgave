import { getAnimalById, getAnimals } from "@/lib/dal/animals";
import Image from "next/image";
import { notFound } from "next/navigation";


export const instant = false;

// bruge denne før komponentet
// statiske parametre som DyrDetaljer bruger.
// I stedet for at få parameter fra URL, får den dem fra denne funktion.
export async function generateStaticParams() {
	// fetch alle dyr
	const data = await getAnimals();

	

	// return et objekt hvor det valgte dyrs (det dyr man har klikket på) id er lig med et id i animals array'et.
	// map looper igennem hvert objekt i et array og returnerer et nyt array
	const params = data.success && data.animals.map(animal => ({
		id: animal.id.toString()
	}));

	return params;
}


export default async function DyrDetaljer({ params }) {
	"use cache";
	const { id } = await params;

	const data = await getAnimalById(id);

	if (!data.success) {
		// fejlhåndtering goes here...
		notFound();
	}

	if (data.success) return (
		<>
			<h1>{data.animal.name}</h1>
			<Image src={data.animal.asset.url} alt="" height={data.animal.asset.height} width={data.animal.asset.width} />
			{/* dangerouslySetInnerHTML - i tilfælde af at det der kommer tilbage fra api'et indeholder noget html. Hvis det der kommer tilbage indeholder et <script></script>, så tager vi kun fat i det vi skal have fat i */}
			<p dangerouslySetInnerHTML={{ __html: data.animal.description }} />
		</>
	);
}