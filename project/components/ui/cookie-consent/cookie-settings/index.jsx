"use client";

import { useRef } from "react";
import { setCookieConsent } from "../action";
import Switch from "../../switch";

export default function CookieSettings() {
	const dialogRef = useRef(null);

	async function handleSubmit(event) {
		event.preventDefault();
		await setCookieConsent({
			essential: true,
			analytics: event.target.analytics.checked,
			consent: true,
		});
		dialogRef.current?.close();
	}

	return (
		<dialog
			ref={dialogRef}
			id="cookie-settings"
			className="hidden w-full md:w-[50%] min-h-64 rounded-md p-4 fixed inset-0 m-auto open:grid">
			<h2>Cookie indstillinger</h2>
			<form onSubmit={handleSubmit}>
				<Switch name="essential" label="Nødvendige" checked={true} disabled={true} />
				<Switch name="analytics" label="Trafik og analytics" />
				<button type="submit">Gem</button>
				<button type="button" command="close" commandfor="cookie-settings">Luk</button>
			</form>
		</dialog>
	);
}