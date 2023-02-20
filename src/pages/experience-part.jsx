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
        
            return <div className='is-flex align-start justify-between'>
            <ul className='is-flex flex-column'>
               <li className='is-flex align-start w-100 gap-1'>
                     <span className='is-title'>
                     {startDates}
                     </span>
                     <span className='is-title '>
                       To
                     </span>
                     <span className='is-title '>
                     {endDates}
                     </span>
                </li>
                <li className='is-flex align-start gap-1'>
                     <span className='is-title'>
                     {data2.city_job[index]}
                     </span>
                     <span className='is-title '>
                       -
                     </span>
                     <span className='is-title '>
                     {data2.country[index]}
                     </span>
                </li>
               </ul>
               <ul className='is-flex flex-column'>
               <li className='is-flex align-start flex-column'>
                <h4 className='is-title is-bold'>
                           {el}
               </h4>
               <span className='is-title '>
                     {data2.employer[index]}
                     </span>
                </li>
               </ul>
            </div>
           })
    )
}

export default ExperiencePart;