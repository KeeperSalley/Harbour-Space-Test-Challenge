import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
    <div className="countdown format-row-item">
        <span> {timerDays} Day : </span>
        <span> {timerHours} Hrs : </span>
        <span> {timerMinutes} Min : </span>
        <span> {timerSeconds} Sec</span>
    </div>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;
