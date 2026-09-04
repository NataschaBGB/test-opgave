import "./globals.css";
import BannerController from "@/components/ui/cookie-consent/banner-controller";

export const metadata = {
	title: {
		default: "Dyrevelfærd",
		template: "%s | Dyrevelfærd"
	},
	description: "Foreningen for Dyrevelfærd arbejder med at redde søde små kattekillinger og regnorme",
	keywords: ['Dyrevelfærd', 'Foreningen dyrevelfærd', 'beskyttelse af dyr', 'dyrebeskyttelse', 'dyreværn', 'adoption af dyr', 'frivillig dyrevelfærd'],
};

export default async function RootLayout({ children }) {
	return (
		<html
			lang="da"
			className="h-full antialiased"
		>
			<body className="min-h-full">
				{children}
				<BannerController />
				{/* BannerController og button i dette layout, men IKKE footer */}
				<footer>
					<button command="show-modal" commandfor="cookie-settings">Cookie indstillinger</button>
				</footer>
			</body>
		</html>
	);
}
