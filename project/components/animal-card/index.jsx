import Image from "next/image";
import Link from "next/link";


export default function AnimalCard({ name, description, asset, id }) {
	return (
		<Link href={`/dyr/${id}`}>
			<article>
				<Image src={asset.url} alt="" height={asset.height} width={asset.width} />
				<h2>{name}</h2>
				<p>{description}</p>
			</article>
		</Link>
	);
}