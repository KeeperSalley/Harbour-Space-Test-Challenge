import React from 'react';
import {useContext, useState} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const DesktopBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    const [toggleState, setToggleState] = useState("");
    function toggle() {
    setToggleState(toggleState === "" ? "open" : "");
  }
    return (
      <nav>
        <img id="logo" src="/img/logo.svg" alt="Harbour Space logo" />
        <div class="user-action">
          <div class="apply-now">
            <span>APPLY NOW</span>
          </div>
          <div class="menu">
            <div className={`menu ${toggleState}`} onClick={toggle}>
              <span class="top">
                <div class='' />
              </span>
              <span class="middle" />
              <span class="bottom">
                <div class='' />
              </span>
            </div>
          </div>
        </div>
      </nav>

  )
}

export default DesktopBar;
