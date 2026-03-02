'use client'
import styles from './styles.module.css';
import { useEffect, useState } from "react";

export default function Title() {
    const title = "Maarcela Obeso";
    const speed = 50; // typing speed in milliseconds
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < title.length) {
          setDisplayedText(prevText => prevText + title.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
      return () => {
        clearInterval(typingInterval);
      };
    }, []);

    return (
        <h1 className={styles.title}>{displayedText || ' '}</h1>
    )
}