import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    const startTimer = () => {
      const startTime = Date.now() - elapsedTime;
      intervalId = setInterval(() => {
        if (!paused) {
          const currentTime = Date.now();
          const newElapsedTime = currentTime - startTime;
          setElapsedTime(newElapsedTime);
        }
      }, 1000);
    };

    startTimer();

    return () => clearInterval(intervalId);
  }, [elapsedTime, paused]);

  const togglePause = () => {
    setPaused(!paused);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    const pad = (value) => (value < 10 ? `0${value}` : value);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="timer">
      <p> {formatTime(elapsedTime)}</p>
      <button onClick={togglePause}>
        {paused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default Timer;
