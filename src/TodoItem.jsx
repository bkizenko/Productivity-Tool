import React, { useState } from 'react';
import Timer from './timer'; // Make sure the import path matches your actual file structure

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerStopped, setTimerStopped] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimer = () => {
    setTimerStarted(true);
  };

  const stopTimer = () => {
    setTimerStarted(false);
    setTimerStopped(true);

    setElapsedTime((prevElapsedTime) => prevElapsedTime + new Date().getTime() - prevElapsedTime);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
      {timerStarted ? (
        <Timer /> // Render the Timer component when timerStarted is true
      ) : (
        <button onClick={startTimer}>Start Timer</button> // Render the "Start Timer" button otherwise
      )}
      <button onClick={stopTimer}> Stop Timer </button >
    </li>
  );
} // add functionality to save elapsed time and track it over time
