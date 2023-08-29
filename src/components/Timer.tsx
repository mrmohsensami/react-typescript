import { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0);
    let intervalRef = useRef<null | number>(null);
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            stopTimer();
        };
    }, []);
    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
        }
    };
    return (
        <div>
            {timer}
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};

export default Timer;
