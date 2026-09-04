"use client";

import { useEffect, useRef } from "react";
import { setCookieConsent } from "../action";
import { motion } from "motion/react";


export default function CookieBanner({ showBanner = false }) {
	const bannerRef = useRef(null);

	async function handleAcceptAll() {
		await setCookieConsent({
			essential: true,
			analytics: true,
			consent: true
		});
		bannerRef.current?.close();
	}

	async function handleRejectAll() {
		await setCookieConsent({
			essential: true,
			analytics: false,
			consent: true,
		});
		bannerRef.current?.close();
	}

	useEffect(function () {
		if (showBanner) {
			bannerRef.current?.showModal();
		}
		if (!showBanner) {
			bannerRef.current?.close();
		}
	}, [showBanner]);

	return (
		<motion.dialog
			ref={bannerRef}
			initial={{ transform: "translateY(200px)" }}
			animate={{ transform: "translateY(0)" }}
			transition={{ duration: 0.8, type: "spring" }}
			className="backdrop:bg-black/20 backdrop:backdrop-blur-sm hidden open:grid grid-cols-12 fixed top-auto bottom-0 left-0 right-0 m-0 w-full max-w-none px-32 py-4"
		>
			<div className="col-span-8">
				<h2 className="text-2xl font-bold">Cookies</h2>
				<p>
					Vi bruger egne cookies samt cookies fra tredjepart til statistik,
					optimering, præferencer, markedsføring og målrettet indhold.
					Information kan blive delt med tredjepart. Vi behandler information
					fra cookies samt de data du indtaster, oplyser og tidligere har oplyst.
					Ved at klikke "Acceptér alle" giver du samtykke til cookies og behandling
					af persondata.
				</p>
			</div>
			<div className="flex flex-col col-span-3 col-start-11 col-end-13 gap-2">
				<button className="bg-black text-white py-2 font-semibold outline-cyan-400" onClick={handleAcceptAll}>Acceptér alle</button>
				<button className="bg-black text-white py-2 font-semibold outline-cyan-400" onClick={handleRejectAll}>Afvis alle</button>
				<button className="border py-2 font-semibold" command="show-modal" commandfor="cookie-settings">Cookie indstillinger</button>
			</div>
		</motion.dialog>
	);
}