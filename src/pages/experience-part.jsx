import React from 'react'

const ExperiencePart = ({data2}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return(
    data2.job_title.length < 1 ? 
            ''
           :
data2.job_title.map((el,index) => {
            
        const datez = new Date(data2.end_date[index]);
        const endDates = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');
        
        const dates = new Date(data2.start_date[index]);
        const startDates = dates.toLocaleDateString('en-US', options).replace(/\//g, '-');
        
            return         <div className='is-flex align-start justify-between is-size-7'>
            <ul className='is-flex flex-column'>
               <li className='is-flex align-start w-100 gap-1'>
                     <span className='is-title'>
                     {
                       !data2.start_date ? 'Start Date'
                       : startDates
                     }
                     </span>
                     <span className='is-title '>
                       To
                     </span>
                     <span className='is-title '>
                     {
                       !data2.end_date ? 'End Date'
                       : endDates
                     }
                     </span>
                </li>
                <li className='is-flex align-start gap-1'>
                     <span className='is-title'>
                     {
                       !data2.city_job ? 'City'
                       : data2.city_job
                     }
                     </span>
                     <span className='is-title '>
                       -
                     </span>
                     <span className='is-title '>
                     {
                       !data2.country ? 'Country'
                       : data2.country
                     }
                     </span>
                </li>
                <li className='is-flex align-start gap-1'>
                     <span className='is-title'>
                     {
                               data2.job_title === '' ? 'Your job title'
                               : data2.job_title
                           }
                     </span>
                     <span className='is-title '>
                       -
                     </span>
                     <span className='is-title '>
                     {
                       !data2.employer ? 'Company name'
                       : data2.employer
                     }
                     </span>
                </li>
               </ul>
            </div>
           })
    )
}

export default ExperiencePart;