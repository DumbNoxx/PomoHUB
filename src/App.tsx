import './App.css'
import ArrowUp from "@/assets/arrow-up.svg";
import ArrowDown from "@/assets/arrow-down.svg";
import { CardLabelDisplay } from './components/organism/cardLabelDisplay/CardLabelDisplay';
import { CardTimerDisplay } from './components/organism/cardTimerDisplay/CardTimerDisplay';
import type { ButtonProps } from './schemas/components';
import { Layout } from './components/template/layout/Layout';

export const App = () => {
  const hola = () => console.log("Hola mundo");
  const adios = () => console.log("adios, mundo");
  const buttons: ButtonProps[] = [
    { id: "test 1", icon: ArrowDown, className: "test 1", isLink: false, func: hola },
    { id: "test 2", icon: ArrowUp, className: "test 2", isLink: false, func: adios },
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
                textLabel2={0}
                isTimer={false}
                isLinkButton={false}
                isTimerLabel={true}
                textTitle='Break Length'
                nameIcon1={ArrowDown}
                nameIcon2={ArrowUp}
              />
              <CardLabelDisplay
                textLabel={25}
                textLabel2={0}
                isTimer={false}
                isLinkButton={false}
                isTimerLabel={true}
                textTitle='Session Length'
                nameIcon1={ArrowDown}
                nameIcon2={ArrowUp}
              />
            </section>
            <section>
              <CardTimerDisplay
                minutesTimer={25}
                secondsTimer={0}
                textLabel='Session'
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

