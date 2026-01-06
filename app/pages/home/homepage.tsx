import { Button } from "~/components/atoms/buttons/Button";
import { formatText } from "./common/formatTimer";
import { CardBreakTimer } from "./components/CardBreakTimer";
import { useLabelBreak } from "./hooks/useLabelBreak";
import { useLabelSession } from "./hooks/useLabelSession";
import { useTimer } from "./hooks/useTimer";
import { NavLink } from "~/components/atoms/navLinks/NavLink";

export function HomePage() {
	const { labelBreak, incrementTimeRest, decrementTimeRest } = useLabelBreak(5);
	const { labelSession, incrementTimeSession, decrementTimeSession } =
		useLabelSession(25);
	const { timeLeft, start, pause, reset, mode } = useTimer({
		sessionTime: labelSession,
		breakTime: labelBreak,
	});
	return (
		<main className="flex flex-col gap-12 text-center w-full h-screen items-center justify-center">
			<h1 className="text-4xl font-bold text-white">
				Pomo{" "}
				<NavLink href="/login" isBlank={false} variant="navLogin">
					Hub
				</NavLink>
			</h1>
			<section className="w-full flex items-center justify-center flex-col gap-5">
				<article className=" flex items-center justify-between max-w-72 w-full ">
					<div className="flex flex-col gap-3 font-bold">
						<CardBreakTimer
							title="Break"
							fButton1={decrementTimeRest}
							fButton2={incrementTimeRest}
							time={labelBreak}
						/>
					</div>
					<div className="flex flex-col gap-3 font-bold">
						<CardBreakTimer
							title="Session"
							fButton1={decrementTimeSession}
							fButton2={incrementTimeSession}
							time={labelSession}
						/>
					</div>
				</article>
				<article className=" flex items-center justify-center gap-4 flex-col p-8">
					<h2 className="text-8xl font-bold">{formatText(timeLeft / 60)}</h2>
					<div className="flex items-center justify-center flex-col gap-8">
						<p className="text-orangePH font-bold text-2xl">
							{mode === "session" ? "Session" : "Break"}
						</p>
						<div className="flex items-center justify-center gap-12 text-2xl">
							<Button variant="timer" onAction={start}>
								Start
							</Button>
							<Button variant="timer" onAction={pause}>
								Pause
							</Button>
							<Button variant="timer" onAction={reset}>
								Reset
							</Button>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
}
