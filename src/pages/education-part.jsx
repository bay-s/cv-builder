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

            return <div className='is-flex align-start justify-between w-100 is-size-7'>
            <ul className='is-flex flex-column '>
               <li className='is-flex align-start w-100 gap-1'>
                     <span className='is-title '>
                     {
                       !data2.school_graduate ? 'Year Graduate'
                       :  graduate
                     }
                     </span>
                </li>
                <li className=''>
                <span className='is-title '>
               {
                       !data2.school_field ? 'Your FIELD OF STUDY'
                       : data2.school_field
                     }
                     </span>
                </li>
                <li className='is-flex align-start gap-1'>
                     <span className='is-title'>
                     {
                       !data2.school_name ? 'School Name'
                       : data2.school_name
                     }
                     </span>
                     <span className='is-title '>
                       -
                     </span>
                     <span className='is-title '>
                     {
                       !data2.school_location ? 'School Location'
                       : data2.school_location
                     }
                     </span>
                </li>
    
               </ul>
     
            </div>
           })
    )
}

export default EducationPart;