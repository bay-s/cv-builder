import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../App';
import UploadAvatar from './edit-avatar.js';
import ErrorMessage from './error-message';
import { UpdateUserProfile } from './insert-data';


const EditProfileForm = () => {
const {value} = useContext(AppContext)

const [message,setMessage] = useState({
  pesan:'',
  isError:'',
  sukses:'',
  isSubmit:false
})

const [datas,setDatas] = useState({
  username:'',
  fullname:'',
  adress:'',
  biodata:'',
  saldo:''
})

useEffect(() => {
  setDatas({...datas,
     username:value.data.username,
     fullname:value.data.fullname,
     adress:value.data.adress,
     biodata:value.data.biodata,
     saldo:value.data.saldo
    })
},[value.data])

const handlerChange = (e) => {
const {name,value} = e.target
console.log(datas);
console.log(value);
setDatas({ ...datas, [name]: value });
if (value.length < 1) {
  setMessage({
    isSubmit: false
  });
} else {
  setMessage({
    isSubmit: true
  });
}
      console.log(datas);
}


const updateProfiles = async (e) => {
  e.preventDefault()
  setMessage({
    isSubmit:true
  })
  console.log(datas);

  const update = await UpdateUserProfile(value.data.user_id,datas)
  console.log(update);
  if(update.error){
    errMessage(update.pesan)
  }else successMessage(update)
 }

  // ERR MESSAGE
  const errMessage = (msg) =>{
    setMessage({ ...message, 
      pesan:msg,
      isError: true,
      sukses: false,
    });
  }
// SUCCESS MESSAGE
  const successMessage = (args) =>{
    setMessage({ ...message, 
      pesan:args.pesan,
      isError:args.error,
      sukses: true,
    });   
  }


    return(

<section className='container' id='container'>
 
<article className='column is-10 mx-auto'>
<div className='card p-3'>
 <h3 className='is-bold is-title   mt-4'>
 Edit Profile 
</h3>
<hr />
<UploadAvatar id={value.data.user_id} data={value.data}/>
{/* END UPLOAD INPUT */}
<form className='is-flex flex-column gap-2' onSubmit={updateProfiles}>

<div className="field">
<label className="label ">Username</label>
<div className="control">
<input className="input " type="text" name='username' defaultValue={value.userData.username} onChange={ handlerChange }/>
</div>
</div>

<div className="field">
<label className="label ">Fullname</label>
<div className="control">
<input className="input " type="text" name='fullname' defaultValue={value.userData.fullname} onChange={ handlerChange }/>
</div>
</div>

<div className="field">
<label className="label">Email</label>
<div className="control">
<input className="input " type="text" name='fullname' defaultValue={value.userData.email} disabled/>
</div>
</div>

<div class="field">
  <label class="label">Bio</label>
  <div class="control">
    <textarea class="textarea"  name='biodata' defaultValue={value.userData.biodata} onChange={ handlerChange }></textarea>
  </div>
</div>



<ErrorMessage pesan={message.pesan} isError={message.isError} sukses={message.sukses}/>

<div className="field">
{message.isSubmit ? <button className="button is-primary w-100" type='submit' title="Disabled button" >Submit</button> :
<button className="button is-primary w-100" title="Disabled button" disabled>Submit</button>}
</div>
 </form>
 </div>
</article>

</section>

    )
}

export default EditProfileForm;
