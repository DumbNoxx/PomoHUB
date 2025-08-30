import './App.css'
import ArrowUp from "@/assets/arrow-up.svg";
import ArrowDown from "@/assets/arrow-down.svg";
import Play from "@/assets/play.svg";
import Pause from "@/assets/pause.svg";
import Reload from "@/assets/refresh-cw.svg";
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
    { id: "test 1", icon: Play, className: "test 1", isLink: false, func: start },
    { id: "test 2", icon: Pause, className: "test 2", isLink: false, func: pause },
    { id: "test 3", icon: Reload, className: "test 2", isLink: false, func: reset },
  ];

  return (
    <>
      <Layout
        headerContent={<h1>PomoHUB</h1>}
        mainContent={
          <>
            <section>
              <CardLabelDisplay
                textLabel={labelBreak}
                isTimer={false}
                isLinkButton={false}
                isTimerLabel={true}
                textTitle='Break Length'
                nameIcon1={ArrowDown}
                nameIcon2={ArrowUp}
                funcButton1={decrementTimeRest}
                funcButton2={incrementTimeRest}

              />
              <CardLabelDisplay
                textLabel={labelSession}
                isTimer={false}
                isLinkButton={false}
                isTimerLabel={true}
                textTitle='Session Length'
                nameIcon1={ArrowDown}
                nameIcon2={ArrowUp}
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
        footerContent={<p>Hola</p>}
      />
    </>
  )
}

