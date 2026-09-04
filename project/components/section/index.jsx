export default function Section({ title, children }) {
	return (
		<section className="">
			{title && <h2>{title}</h2>}
			<div className="w-full md:w-[60%] mx-auto p-6">
				{children}
			</div>
		</section>
	);
}