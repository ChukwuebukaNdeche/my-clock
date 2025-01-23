import React, { useState, useEffect } from 'react'
import styles from './Clock.module.css'
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? "PM" : "AM";

        return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`)
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }
    return (
        <>
            <div className={styles.center}>
                <div className={styles.clock_container}>
                    <div>
                        <span>{formatTime()}</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Clock