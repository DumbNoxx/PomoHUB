import { HomePage } from "../pages/home/homepage";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: "PomoHub - The Ultimate Focus Timer" },
		{
			name: "description",
			content:
				"Boost your productivity and get in the zone with PomoHub, the Pomodoro timer designed to help you study smarter and stay focused.",
		},
	];
}

export default function Home() {
	return <HomePage />;
}
