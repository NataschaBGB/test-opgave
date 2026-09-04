"use server";

import { cookies } from "next/headers";

export async function setCookieConsent(consent) {
	const cookieStore = await cookies();

	cookieStore.set({
		name: "COOKIE_CONSENT",
		value: JSON.stringify(consent),
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 60 * 60 * 24 * 365
	});
}

export async function hasCookieConsent() {
	const cookieStore = await cookies();
	return !cookieStore.has("COOKIE_CONSENT");
}