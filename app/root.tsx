import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>PomoHub - The Ultimate Focus Timer</title>

				<meta name="title" content="PomoHub - The Ultimate Focus Timer" />
				<meta
					name="description"
					content="Boost your productivity and get in the zone with PomoHub, the Pomodoro timer designed to help you study smarter and stay focused."
				/>
				<meta
					name="keywords"
					content="pomodoro, timer, focus, productivity, study, work, time management, pomohub"
				/>
				<meta name="author" content="Dylan" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://pomo-hub-chi.vercel.app/" />
				<meta
					property="og:title"
					content="PomoHub - The Ultimate Focus Timer"
				/>
				<meta
					property="og:description"
					content="Boost your productivity and get in the zone with PomoHub, the Pomodoro timer designed to help you study smarter and stay focused."
				/>
				<meta
					property="og:image"
					content="https://pomo-hub-chi.vercel.app/banner.png"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://pomo-hub-chi.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="PomoHub - The Ultimate Focus Timer"
				/>
				<meta
					property="twitter:description"
					content="Boost your productivity and get in the zone with PomoHub, the Pomodoro timer designed to help you study smarter and stay focused."
				/>
				<meta
					property="twitter:image"
					content="https://pomo-hub-chi.vercel.app/banner.png"
				></meta>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
