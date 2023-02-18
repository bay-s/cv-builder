import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ErrorMessage from './error-message';


const CvHeader = ({data,handlerChange,changeDate}) => {
  let navigate = useNavigate(); 
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
    if(!data.firstname || !data.surename || !data.birth_date || !data.city || !data.province || !data.post || !data.phone || !data.email || !data.about){
      setMessage({
        pesan:'Please fill all input',
        error:true,
      })
    }else {
      let path = `/create-cv/experience`; 
      navigate(path);
    }
    console.log(data)
  }
    return(
<div className='is-flex flex-column gap-6 p-4'>
            <ul className=''>
                <li><h3 className='is-title is-bold is-size-4'>Let's start with your header</h3></li>
                <li><p className='is-title '>Include your full name and at least one way for employers to contact you.</p></li>            
            </ul>

<form className='is-flex flex-column gap-1'>

<div class="field is-horizontal">
<div class="field-body">
    <div class="field">
    <label class="label">First Name</label>
    <input class="input" type="text" name='firstname' defaultValue={data.firstname}   onChange={handlerChange}/>
    </div>
    <div class="field">
    <label class="label">Surname</label>
    <input class="input " type="text" name='surename' defaultValue={data.surename}  onChange={handlerChange}/>
    </div>
  </div>
</div>

<div class="field">
    <label class="label">Date Of Birth:</label>
    <DatePicker
     selected={data.birth_date}
     onChange={(date) => changeDate('birth_date', date)}
        className='input'
        name='birth_date'
      />
</div>

<div class="field is-horizontal">
<div class="field-body">
    <div class="field">
    <label class="label">City</label>
    <input class="input" type="text" name='city'  defaultValue={data.city}  onChange={handlerChange}/>
    </div>
    <div class="field w-25">
    <label class="label">Province</label>
    <input class="input " type="text" name='province'  defaultValue={data.province}  onChange={handlerChange}/>
    </div>
    <div class="field w-25">
    <label class="label">Postal code</label>
    <input class="input " type="number" name='post'  defaultValue={data.post}  maxlength="7" onChange={handlerChange}/>
    </div>
  </div>
</div>


<div class="field is-horizontal">
<div class="field-body">
<div class="field">
    <label class="label">Phone</label>
    <input class="input" type="text" name='phone'  defaultValue={data.phone}  onChange={handlerChange}/>
    </div>
    <div class="field">
    <label class="label">Email</label>
    <input class="input " type="email" name='email'  defaultValue={data.email}  onChange={handlerChange}/>
    </div>
</div>
</div>

<div class="field">
  <label class="label">About</label>
  <div class="control">
    <textarea class="textarea" name='about' defaultValue={data.about}  placeholder="Write something about yourself..."  onChange={handlerChange}></textarea>
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


