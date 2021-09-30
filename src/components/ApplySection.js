import React from 'react';
import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext';
import BottomBarElement from './bottomBar/BottomBarElement';
import Renderer from './ApplicationCloseInCalculation';

const ApplySection = () => {
    const {data, isPending, error} = useContext(ApprenticeshipContext)
    console.log(`data`, data)

    return data && (
        <section className="format-section background-bottom reverse" style={{ backgroundImage: "url(/img/Pattern.png)" }}>
            <div className="format-half-section">
                <h1>{/*{data.scholarship.name}*/}
                    Interaction Design Apprenticeship
                    <img className="stamp" src="/img/Icon.jpg" alt="Icon" ></img>
                </h1>
                   <p>
                        <b>A fully funded work-study program to launch your tech career</b>
                   </p>
                <p>
                    {data.scholarship.description[0].data}
                </p>
                <p>
                    <b>Position: </b>
                    Marketing Performance
                </p>
                <button className="btn">Apply now</button>
            </div>

            <div className="format-half-section halfright">
                <header>
                    <img src="/img/Logo.jpg" alt="logo"/>
                    <div>
                        <div className="powerby">Powered by:</div>
                        <div>{data.scholarship.company.name}</div>
                    </div>
                </header>

                <div >
                    <div className="counterdown format-item-box ">
                        <h2>Application closes in</h2>
                        <Renderer/>
                    </div>

                    <div className="details format-item-box">
                        <div>
                            <div>
                                <BottomBarElement title='Location' content={data.scholarship.location.name}/>
                            </div>
                            <div>
                                <BottomBarElement title='Start date' content={data.scholarship.scholarship_start_date}/>
                            </div>
                        </div>

                        <div>
                            <div>
                                <BottomBarElement title='Duration' content={data.scholarship.duration + " full year"}/>
                            </div>
                            <div>
                                <BottomBarElement title='End Date' content={data.scholarship.application_end_date}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default ApplySection;
