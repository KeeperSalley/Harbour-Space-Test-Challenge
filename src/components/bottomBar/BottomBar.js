import React from 'react';
import {useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'
import Renderer from '../ApplicationCloseInCalculation'
/*import BottomBarElement from './BottomBarElement'*/

const BottomBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext);
    /* console.log(`data`, data) */
    // component of remaimg time with deadline injected

    return (
      <div className="stickyBar">
        <div className="properity">
          <span className="title">{data.scholarship.company.name} </span>
          <span className="value">Data Science</span>
        </div>
        <div className="properity">
          <span className="title">Location</span>
          <span className="value"> {data.scholarship.location.name} </span>
        </div>
        <div className="properity">
          <span className="title">Duration</span>
          <span className="value"> {data.scholarship.duration} Year Full-Time</span>
        </div>
        <div className="properity">
          <span className="title">Start date</span>
          <span className="value"> {data.scholarship.scholarship_start_date}</span>
        </div>
        <div className="properity">
          <span className="title">End Date</span>
          <span className="value"> {data.scholarship.application_end_date}</span>
        </div>
        <div className="properity">
          <span className="title">Application closes in</span>
            <span className="value" id="timetoend"
              ><Renderer/></span
            >
        </div>
      </div>
    )
}

export default BottomBar;
