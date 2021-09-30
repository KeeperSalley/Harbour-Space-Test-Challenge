import React from 'react';
import {useParams} from 'react-router-dom';
import {useContext} from 'react';
import {ApprenticeshipContext} from '../contexts/ApprenticeshipContext'
import BottomBar from './bottomBar/BottomBar'
import DesktopBar from './DesktopBar'
import Faq from './faq/Faq'
import ApplySection from './ApplySection'
import AboutSection from './AboutSection'
import Testimonials from './Testimonials'


const ApprenticeshipTemp = () => {

    const {apprenticeshipType} = useParams();
    const {useFetchApi} = useContext(ApprenticeshipContext);
    useFetchApi('https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab');

    const {data, isPending, error} = useContext(ApprenticeshipContext);
    console.log(`data`, data);

    return data && (
        <div className="apprenticeship-temp">
            <DesktopBar/>

            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}
            {/* <div>{data.meta.title}</div> */}
            <ApplySection/>
            <AboutSection/>
            <Testimonials/>
            <Faq/>
            <BottomBar/>
         </div>
     );

}

export default ApprenticeshipTemp;
