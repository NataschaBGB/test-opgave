// Alt indhold der er i route "dashboard" og alle sider under (f.eks. "dashboard/user") skal beskyttes.
// Man må ikke kunne se disse sider, medmindre man er logget ind (altså der er sat en FD_AUTH_TOKEN i cookies).


export default function DashboardPage() {
	return (
		<h1>Super hemmeligt instrumentbræt</h1>
	)
}