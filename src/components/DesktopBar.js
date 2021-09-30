import React from 'react';
import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'

const DesktopBar = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    return (
      <nav>
          <ul className="primary-nav">
              <li><img id="logo" src="/img/logo.svg" alt="Harbour Space logo" /></li>
              <li className="apply-now">Apply now</li>
              <li className="menu">
                <span className="top">
                  <div className=""/>
                </span>
                <span className="middle" />
                <span className="bottom">
                  <div className="" />
                </span>
              </li>
          </ul>
      </nav>
  )
}

export default DesktopBar;
