import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ErrorMessage from './error-message';
import { AppContext } from '../App';
import UploadAvatar from './upload-avatar';


const CvHeader = () => {
  let navigate = useNavigate(); 
  const {value} = useContext(AppContext)
  const [message,setMessage] = useState({
    pesan:'',
    error:'',
    sukses:''
  })

  const Alert = (e) => {
    e.preventDefault()
    if(window.confirm('Are you sure want to go back ?')){
      window.location.href = '/'
    }else return false

  }

  const confirms = (e) => {
    e.preventDefault()
    if(!value.data.firstname || !value.data.surename || !value.data.birth_date || !value.data.city || !value.data.province || !value.data.post || !value.data.phone || !value.data.email || !value.data.about){
      setMessage({
        pesan:'Please fill all input',
        error:true,
      })
    }else {
      let path = `/create-cv/experience`; 
      navigate(path);
    }
  }
    return(
<div className='is-flex flex-column gap-6 p-4'>
            <ul className=''>
                <li><h3 className='is-title is-bold is-size-4'>Let's start with your header</h3></li>
                <li><p className='is-title '>Include your full name and at least one way for employers to contact you.</p></li>            
            </ul>

<form className='is-flex flex-column gap-1' onSubmit={value.addSkill }>

<div className='field is-flex align-center gap-3'>
<UploadAvatar />
<div className='is-flex flex-column w-100'>
<div class="field">
    <label class="label">First Name</label>
    <input class="input" type="text" name='firstname' defaultValue={value.data.firstname}   onChange={value.handlerChange}/>
</div>

 <div class="field">
    <label class="label">Surname</label>
    <input class="input " type="text" name='surename' defaultValue={value.data.surename}  onChange={value.handlerChange}/>
 </div>
</div>
</div>

<div class="field">
    <label class="label">Date Of Birth:</label>
    <DatePicker
     selected={value.data.birth_date}
     onChange={(date) => value.changeDate('birth_date', date)}
        className='input'
        name='birth_date'
      />
</div>

<div class="field is-horizontal">
<div class="field-body">
    <div class="field">
    <label class="label">City</label>
    <input class="input" type="text" name='city'  defaultValue={value.data.city}  onChange={value.handlerChange}/>
    </div>
    <div class="field w-25">
    <label class="label">Province</label>
    <input class="input " type="text" name='province'  defaultValue={value.data.province}  onChange={value.handlerChange}/>
    </div>
    <div class="field w-25">
    <label class="label">Postal code</label>
    <input class="input " type="number" name='post'  defaultValue={value.data.post}  maxlength="7" onChange={value.handlerChange}/>
    </div>
  </div>
</div>


<div class="field is-horizontal">
<div class="field-body">
<div class="field">
    <label class="label">Phone</label>
    <input class="input" type="text" name='phone'  defaultValue={value.data.phone}  onChange={value.handlerChange}/>
    </div>
    <div class="field">
    <label class="label">Email</label>
    <input class="input " type="email" name='email'  defaultValue={value.data.email}  onChange={value.handlerChange}/>
    </div>
</div>
</div>

<div class="field has-addons">
  <div class="control w-100">
    <input class="input" type="text" 
        onChange={value.getInputSkill} placeholder="Add Skills" />
  </div>
  <div class="control">
    <button type='submit' class="button is-info">
       Add Skill
    </button>
  </div>
</div>

<div class="field">
  <label class="label">About</label>
  <div class="control">
    <textarea class="textarea" name='about' defaultValue={value.data.about}  placeholder="Write something about yourself..."  onChange={value.handlerChange}></textarea>
  </div>
</div>

  </form>


  <ErrorMessage pesan={message.pesan} isError={message.error} sukses={message.sukses}/>


  <div className='is-flex align-center justify-between'>
    <Link to='/' className='button is-medium' onClick={Alert }>Back</Link>
    <Link to='/create-cv/experience' onClick={ confirms} className='button is-primary is-medium'>Continue</Link>
  </div>
        </div>
    )
}

export default CvHeader;


