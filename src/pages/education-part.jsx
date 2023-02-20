import React from 'react'

const  EducationPart = ({data2}) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return(
    data2.school_name.length < 1 ? 
            ''
           :
data2.school_name.map((el,index) => {
            
        const datez = new Date(data2.school_graduate[index]);
        const graduate  = datez.toLocaleDateString('en-US', options).replace(/\//g, '-');

            return <div className='is-flex align-start justify-between w-100'>
            <ul className='is-flex flex-column'>
               <li className='is-flex align-start w-100 gap-1'>
                     <span className='is-title'>
                     YEAR OF GRADUATION
                     </span>
                     <span className='is-title '>
                      -
                     </span>
                     <span className='is-title '>
                     {graduate }
                     </span>
                </li>
                <li className='is-flex align-start gap-1'>
                     <span className='is-title'>
                     School Location
                     </span>
                     <span className='is-title '>
                       -
                     </span>
                     <span className='is-title '>
                     {data2.school_location[index]}
                     </span>
                </li>
               </ul>
     <ul className='is-flex flex-column'>
               <li className='is-flex align-start flex-column'>
                <h4 className='is-title is-bold'>
                {data2.school_name[index]}
               </h4>
               <span className='is-title '>
               {data2.school_field[index]}
                     </span>
                </li>
               </ul>
            </div>
           })
    )
}

export default EducationPart;