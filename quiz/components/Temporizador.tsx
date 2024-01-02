import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps{
    duracao: number;
    tempoEsgotado: ()=> void
}
export default function Temporizador(props: TemporizadorProps){

    
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer
            size={120}
            isPlaying
            duration={props.duracao}
            onComplete={props.tempoEsgotado}
            colors={["#BCE596",'#F7B801','#ED827A']}
            colorsTime={[
                (10 / props.duracao) * 100,
                (5 / props.duracao) * 100,
                (0 / props.duracao) * 100,
              ]}
            >{({remainingTime})=> remainingTime}</CountdownCircleTimer>
        </div>
    )
}