import LoginForm from "@/components/forms/login-form";
import { Suspense } from "react";


export default function LoginPage() {
	return (
		<section>
			<h2>Log ind</h2>
			<Suspense fallback={null}>
				<LoginForm />
			</Suspense>
		</section>
	)
}