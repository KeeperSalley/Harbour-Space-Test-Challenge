import React from 'react';
import {useState, useContext} from 'react';
import {ApprenticeshipContext} from '../../contexts/ApprenticeshipContext'

const FaqAnswer = ({selection}) => {
    /*console.log(`selection`, selection)*/
    const {data, isPending, error} = useContext(ApprenticeshipContext)

    return <div>  { data && data.scholarship.faqs.items
                    .filter( item => {
                        return item.type === selection
                    })
                    .map( (el, i) => {
                        return <div className="format-row-item border-top" key={i}>
                                    <h2 className="format-1third-section">{selection}</h2>
                                    <details className="format-2third-section">
                                        <summary>{el.question}</summary>
                                        {el.answer.map( (an,i) => {
                                            return <p className="answer text-small" key={i}>{an.data}</p>
                                        })}
                                    </details>
                            </div>
                    })
        }
    </div>
}

export default FaqAnswer
