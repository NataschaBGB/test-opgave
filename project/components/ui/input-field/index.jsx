export default function InputField({ label, type, name, placeholder, status, value }) {
	return (
		<div>
			<label>
				<span>{label}</span>
				<input
					type={type}
					name={name}
					defaultValue={value}
					placeholder={placeholder}
					className={`border px-3 py-2 ${Boolean(status) ? "border-red-500" : "border-gray-100"} rounded-md`}
					aria-invalid={Boolean(status)}
					aria-labelledby={Boolean(status) ? `${name}_statusMessage` : undefined}
				/>
			</label>
			{Boolean(status) && <p id={`${name}_statusMessage`} role="alert">
				{status?.map((message, index) => (
					<span className="text-red-500" key={`${message}_${index}`}>
						{message}
					</span>
				))}
			</p>}
		</div>
	);
}