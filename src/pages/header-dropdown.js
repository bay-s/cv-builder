import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../supabase-config'
import { AppContext } from '../App';
import akun from '../img/akun.jpg'

const DropDownHeader = () => {
 const {value} = useContext(AppContext)
  const Logout = async e => {
    e.preventDefault()
    const { error } = await supabase.auth.signOut()
    console.log(error);
  }
  
    return(
<div class="dropdown is-hoverable is-right">
  <div class="dropdown-trigger"> 
     {
      value.isLogin ? 
  <div class="button is-rounded is-flex align-center gap-2"  aria-haspopup="true" aria-controls="dropdown-menu3">
<figure class="image is-32x32">
  <img class="is-rounded" src={!value.userData.avatar ? akun : value.userData.avatar} />
</figure>
      <h3 className=''>{value.userData.username}</h3>
  </div>
      : 
      <div class="button is-rounded is-flex gap-2"  aria-haspopup="true" aria-controls="dropdown-menu3">
      <i class="fa fa-bars is-size-5" aria-hidden="true"></i>
      <i class="fa fa-user is-size-5" aria-hidden="true"></i>
      </div>
     }
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
    <Link to={`/profile/${value.userData.username}`}  class={value.isLogin ? "dropdown-item" : 'hide'}>
       Profile
    </Link>
    <Link to="/setting/" class={value.isLogin ? "dropdown-item" : 'hide'}>
       Setting
    </Link>
    <div  class={value.isLogin ? "" : 'hide'}>
    <Link to={`/store/${value.data.username}` } className={value.data.main_role === 'Seller' ? 'dropdown-item' : 'hide'} >
     My Store
    </Link>
    </div>
    <Link to="/login/" class={!value.isLogin ? "dropdown-item" : 'hide'}>
       Log in
    </Link>
    <Link to="/register/" class={!value.isLogin ? "dropdown-item" : 'hide'}>
       Sign up
    </Link>
      <hr class="dropdown-divider" />
      <a href="#" class={value.isLogin ? "dropdown-item" : 'hide'} onClick={Logout}>
        Log out
      </a>
    </div>
  </div>
</div>
    )
}

export default DropDownHeader