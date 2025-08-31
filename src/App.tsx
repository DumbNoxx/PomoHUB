import './App.css'
import Plus from "@/assets/plus.svg";
import Minus from "@/assets/minus.svg";
import type { ButtonProps } from './schemas/components';
import { useTimer } from './hooks/useTimer';
import { CardLabelDisplay } from './components/organism/cardLabelDisplay/CardLabelDisplay';
import { CardTimerDisplay } from './components/organism/cardTimerDisplay/CardTimerDisplay';
import { Layout } from './components/template/layout/Layout';
import { useLabelSession } from './hooks/useLabelSession';
import { useLabelBreak } from './hooks/useLabelBreak';

export const App = () => {

  const { labelBreak, incrementTimeRest, decrementTimeRest } = useLabelBreak(5);
  const { labelSession, incrementTimeSession, decrementTimeSession } = useLabelSession(25);
  const { timeLeft, start, pause, reset, mode } = useTimer({
    sessionTime: labelSession,
    breakTime: labelBreak
  });

  const buttons: ButtonProps[] = [
    { id: "play", className: "test 1", isLink: false, func: start, text: "Start" },
    { id: "pause", className: "test 2", isLink: false, func: pause, text: "Pause" },
    { id: "reset", className: "test 2", isLink: false, func: reset, text: "Reset" },
  ];

  return (
    <>
      <Layout
        headerContent={<h1>Pomo<span>Hub</span></h1>}
        mainContent={
          <>
            <section className="options-container">
              <CardLabelDisplay
                textLabel={labelBreak}
                isTimer={false}
                isLinkButton={false}
                isTimerLabel={true}
                textTitle='Break'
                nameIcon1={Minus}
                nameIcon2={Plus}
                funcButton1={decrementTimeRest}
                funcButton2={incrementTimeRest}

              />
              <CardLabelDisplay
                textLabel={labelSession}
                isTimer={false}
                isLinkButton={false}
                isTimerLabel={true}
                textTitle='Session'
                nameIcon1={Minus}
                nameIcon2={Plus}
                funcButton1={decrementTimeSession}
                funcButton2={incrementTimeSession}
              />
            </section>
            <section>
              <CardTimerDisplay
                minutesTimer={timeLeft / 60}
                textLabel={mode === "session" ? "Session" : "Break"}
                buttons={buttons}
              />
            </section>
          </>
        }
        footerContent={<p></p>}
      />
    </>
  )
}

