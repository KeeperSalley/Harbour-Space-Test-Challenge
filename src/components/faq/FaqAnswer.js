import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const FaqAnswer = ({selection}) => {
    const {data} = useContext(ApprenticeshipContext)
    let [isMore, rotate, setToggleState] = useState('');


    return <div>  { data && data.scholarship.faqs.items
                    .filter( item => {
                        return item.type === selection
                    })
                    .map( (el, i) => {
                        return <div className="format-row-item border-top" key={i}>
                        <Accordion id="Accordion">
        <AccordionSummary
          expandIcon={<div class="read-more">
            <div
              class="plus-minus"
            >
              <span class="horizontal-bar" />
              <span class="vertical-bar" />
            </div>
          </div>}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <h2 className="format-1third-section">{selection}</h2>
          <Typography id="question">{el.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {el.answer.map( (an,i) => {
            return <Typography id="answer">{an.data}</Typography>
        })}
        </AccordionDetails>

      </Accordion>

                            </div>
                    })
        }
    </div>
}

export default FaqAnswer
