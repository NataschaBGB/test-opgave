import LogoutButton from "@/components/ui/logout-button";

export default async function DashboardLayout({ children }) {
	return (
		<>
			<header>
				<LogoutButton />
			</header>
			<main>
				{children}
			</main>
		</>
	);
}