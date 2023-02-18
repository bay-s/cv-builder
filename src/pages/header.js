import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import DropDownHeader from './header-dropdown'
import Cookies from 'js-cookie'


const Header = () => {
 const {value} = useContext(AppContext)
 const desiredUserId = value.data.user_id;
 const filteredItems = value.productArr.toString() === '' ? '' : value.productArr.filter(obj => obj.user_id === desiredUserId);

    return(
<header className='headers py-2 navbar is-fixed-top mb-6'>
<nav class="navbar mx-6 is-flex justify-between w-100 no-shadow" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link class="navbar-item" to='/'>
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </Link>
  </div>

{/* NAVBAR END */}
<div class="is-flex align-center">

{
  !value.isLogin ? 
<Link className='is-flex align-item gap-1 txt-dark button' to='/register'>
<i class="fa fa-user is-size-6" aria-hidden="true"></i>
<span className='txt-dark is-title'>Register</span>
</Link>
:
<Link className='is-flex align-item gap-1 txt-dark button' to='/login'>
<i class="fa fa-user is-size-6" aria-hidden="true"></i>
<span className='txt-dark is-title'>Login</span>
</Link>
}
    {/* <div class="navbar-item">
     <DropDownHeader />
    </div> */}
</div>
{/* end navbar end */}

</nav>
</header>
    )
}

export default Header

