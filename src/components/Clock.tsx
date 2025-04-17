'use client'
import styles from './styles.module.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
export default function Clock() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setSecond(date.getSeconds()/60);
            setMinute((second + date.getMinutes())/60);
            setHour((minute + date.getHours())/12);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.clock}>
                <div className={styles.background}>COMING SOON</div>
            <div className={`${styles.hand} ${styles.hour}`} style={{transform: `translate(-50%) rotate(${hour * 360}deg)`}} ></div>
            <div className={`${styles.hand} ${styles.minute}`} style={{transform: `translate(-50%) rotate(${minute * 360}deg)`}}></div>
            <div className={`${styles.hand} ${styles.second}`} style={{transform: `translate(-50%) rotate(${second * 360}deg)`}}></div>
            <div className={`${styles.number} ${styles.number1}`}>|</div>
            <div className={`${styles.number} ${styles.number2}`}>|</div>
            <div className={`${styles.number} ${styles.number3}`}>|</div>
            <div className={`${styles.number} ${styles.number4}`}>|</div>
            <div className={`${styles.number} ${styles.number5}`}>|</div>
            <div className={`${styles.number} ${styles.number6}`}>|</div>
            <div className={`${styles.number} ${styles.number7}`}>|</div>
            <div className={`${styles.number} ${styles.number8}`}>|</div>
            <div className={`${styles.number} ${styles.number9}`}>|</div>
            <div className={`${styles.number} ${styles.number10}`}>|</div>
            <div className={`${styles.number} ${styles.number11}`}>|</div>
            <div className={`${styles.number} ${styles.number12}`}>|</div>
        </div>
    )
}   