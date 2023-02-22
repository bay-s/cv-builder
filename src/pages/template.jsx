import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import img4 from '../img/template.PNG'
import img5 from '../img/template2.PNG'
import Cookies from 'js-cookie'


const  Template = () =>  {
 const {value} = useContext(AppContext)
 const navigate = useNavigate()
const product = Cookies.get('template') 
const templatetArr = product === undefined ? '' : JSON.parse(product)


 const isEmpty = (e) => {
  e.preventDefault()
  if(!value.data.template){
    alert('Please Choose Template first')
    return
  }else{
    if(product === undefined){
      console.log("oke");
      Cookies.set('template',JSON.stringify(value.data.template) )
      navigate('/create-cv/header')
     }else{
      // templatetArr.push('template')
      Cookies.set('template',JSON.stringify(value.data.template))
      navigate('/create-cv/header')
     }
  }
 }




	return (
<div className='container mx-auto' id='container'>
  
  <div className='columns is-multiline' >

<div className='column is-4'>

<figure class="image is-4by5 is-clickable template" data-template='template' onClick={value.chooseTemplate}>
  <img src={img4} data-template='template'/>
</figure>

</div>

<div className='column is-4'>

<figure class="image is-4by5 is-clickable template" data-template='template1' onClick={value.chooseTemplate}>
  <img src={img5} data-template='template1'/>
</figure>

</div>

  </div>

  <nav class="navbar shadow-lg border-top is-fixed-bottom p-5" role="navigation" aria-label="main navigation">
  
  <div class="navbar-end px-5">
        <div class="buttons">
<a class="button is-title is-bold">
       Back To Home
  </a>
  <Link to='/create-cv/header'  class="button is-primary is-title is-bold"  onClick={isEmpty}>
       Choose This Template
  </Link>
        </div>
    </div>

  </nav>

</div>
	);
  }

export default Template



