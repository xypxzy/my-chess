import {Player} from "../models/Player.ts";
import {FC, useEffect, useRef, useState} from "react";
import {Colors} from "../models/Colors.ts";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void
}
const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if(timer.current) {
            clearTimeout(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000)
    }
    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }
    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }

    const handleRestart = () => {
        setWhiteTime(300);
        setBlackTime(300);
    }

    return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart game</button>
            </div>
            <h2>
                Черные - {blackTime}
            </h2>
            <h2>
                Белые - {whiteTime}
            </h2>
        </div>
    );
};

export default Timer;