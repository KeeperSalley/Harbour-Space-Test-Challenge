import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApprenticeshipTemp from './components/ApprenticeshipTemp';
import ApprenticeshipContextProvider from './contexts/ApprenticeshipContext'


/* End point to be used : /data-science-apprenticeship-zeptolab
  Get it as params in ApprenticeshipTemp component */

function App() {
  return (
    <Router>
        <div className="App">
            <ApprenticeshipContextProvider>
              <ApprenticeshipTemp/>
            </ApprenticeshipContextProvider>
        </div>
    </Router>
  );
}

export default App;
