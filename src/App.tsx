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

export const App = () => {
  const { labelSession, incrementTimeSession, decrementTimeSession } = useLabelSession(25);
  const { timer, startTimer, pauseTimer, restarTimer, isRest } = useTimer(labelSession);

  const buttons: ButtonProps[] = [
    { id: "test 1", icon: Play, className: "test 1", isLink: false, func: startTimer },
    { id: "test 2", icon: Pause, className: "test 2", isLink: false, func: pauseTimer },
    { id: "test 3", icon: Reload, className: "test 2", isLink: false, func: restarTimer },
  ];

  return (
    <>
      <Layout
        headerContent={<h1>PomoHUB</h1>}
        mainContent={
          <>
            <section>
              <CardLabelDisplay
                textLabel={5}
                isTimer={false}
                isLinkButton={false}
                isTimerLabel={true}
                textTitle='Break Length'
                nameIcon1={ArrowDown}
                nameIcon2={ArrowUp}

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
                minutesTimer={timer / 60}
                textLabel='Session'
                isRest={isRest}
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

