import { LoginPage } from "~/pages/login/loginpage";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: "PomoHub - Login" },
		{
			name: "description",
			content:
				"Boost your productivity and get in the zone with PomoHub, the Pomodoro timer designed to help you study smarter and stay focused.",
		},
	];
}

export default function Login() {
	return <LoginPage />;
}
