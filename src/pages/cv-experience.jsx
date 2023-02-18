import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const  CvExperience = ({handlerChange,datas,method,changeDate}) => {

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
    <input class="input" type="text" name='job_title' placeholder="e.g Retail Sales" onChange={handlerChange} />
    </div>
    <div class="field">
    <label class="label">EMPLOYER</label>
    <input class="input " type="text" name='employer' placeholder="e.g Yamaha"  onChange={handlerChange} />
    </div>
  </div>
</div>

<div class="field is-horizontal">
<div class="field-body">
    <div class="field">
    <label class="label">City</label>
    <input class="input" type="text" name='city_job' placeholder="e.g Bekasi Selatan" onChange={handlerChange} />
    </div>
    <div class="field">
    <label class="label">Country</label>
    <input class="input " type="text" name='country' placeholder="e.g Indonesia" onChange={handlerChange} />
    </div>
  </div>
</div>


<div class="field is-horizontal">
<div class="field-body">
<div class="field date">
    <label class="label">START DATE</label>
    <DatePicker
     selected={datas.start_date}
     onChange={(date) => changeDate('start_date', date)}
        className='input'
        name='start_date'
      />
    </div>
    <div class="field">
    <label class="label">END DATE</label>
    <DatePicker
     selected={datas.end_date}
     onChange={(date) => changeDate('end_date', date)}
        className='input'
        name='end_date'
      />
    </div>
</div>
</div>

  </form>

  <div className='is-flex align-center justify-between'>
    <Link to='/create-cv/header' className='button is-medium'>Back</Link>
    <Link to='/create-cv/education' className='button is-primary is-medium'>Continue</Link>
  </div>
        </div>
    )
}

export default CvExperience;


