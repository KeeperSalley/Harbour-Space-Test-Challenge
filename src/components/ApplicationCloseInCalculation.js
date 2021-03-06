import React, { useState, useEffect } from "react";
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext';
import {useContext} from 'react';
import Clock from './Clock';

function Renderer() {
  const {data, isPending, error} = useContext(ApprenticeshipContext);
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date(data.scholarship.application_end_date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
  /* Таймер работает */
    <Clock
       timerDays={timerDays}
       timerHours={timerHours}
       timerMinutes={timerMinutes}
       timerSeconds={timerSeconds}
     />

  );
}

export default Renderer;
