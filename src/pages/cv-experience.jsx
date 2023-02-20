import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { AppContext } from '../App';

const  CvExperience = () => {
  const {value} = useContext(AppContext)
  
    return(
<div className='is-flex flex-column gap-6 p-4'>
            <ul className=''>
                <li><h3 className='is-title is-bold is-size-4'>Add your experience</h3></li>
                <li><p className='is-title '>Start with your most recent job first. You can also add voluntary work,
internships or extracurricular activities.</p></li>            
            </ul>

<form className='is-flex flex-column gap-3'>

<div class="field is-horizontal">
<div class="field-body">
    <div class="field">
    <label class="label">JOB TITLE</label>
    <input class="input" type="text" name='job_title' placeholder="e.g Retail Sales" defaultValue={value.data.job_title} onChange={value.handlerChange} />
    </div>
    <div class="field">
    <label class="label">EMPLOYER</label>
    <input class="input " type="text" name='employer' placeholder="e.g Yamaha" defaultValue={value.data.employer} onChange={value.handlerChange} />
    </div>
  </div>
</div>

<div class="field is-horizontal">
<div class="field-body">
    <div class="field">
    <label class="label">City</label>
    <input class="input" type="text" name='city_job' placeholder="e.g Bekasi Selatan" defaultValue={value.data.city_job} onChange={value.handlerChange} />
    </div>
    <div class="field">
    <label class="label">Country</label>
    <input class="input " type="text" name='country' defaultValue={value.data.country}  placeholder="e.g Indonesia" onChange={value.handlerChange} />
    </div>
  </div>
</div>


<div class="field is-horizontal">
<div class="field-body">
<div class="field date">
    <label class="label">START DATE</label>
    <DatePicker
     selected={value.data.start_date}
     onChange={(date) => value.changeDate('start_date', date)}
        className='input'
        name='start_date'
      />
    </div>
    <div class="field">
    <label class="label">END DATE</label>
    <DatePicker
     selected={value.data.end_date}
     onChange={(date) => value.changeDate('end_date', date)}
        className='input'
        name='end_date'
      />
    </div>
</div>
</div>

  </form>

  <div className='is-flex align-center justify-between'>
    <Link to='/create-cv/header' className='button is-medium'>Back</Link>
    <Link to='/create-cv/add-more-experience' className='button is-primary is-medium'>Continue</Link>
  </div>
        </div>
    )
}

export default CvExperience;


