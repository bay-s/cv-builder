import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import akun from '../img/akun.jpg'

const Sidebar = ({profiles}) => {
    const [active,setActive] = useState(true)
    
    const openCollapse = (e) => {
        e.preventDefault()
        const collapse= e.target.parentElement.parentElement
        setActive(!active);
        collapse.classList.toggle('is-active')
       }
    return(
<div className='column is-3 '  >
{/* sidebar inner */}

<aside className='card p-3 is-flex flex-column gap-3'  id='profile-sidebar'>

<div className='is-flex align-center gap-1' >
  <figure className="image is-32x32">
<img className="is-rounded edit-image h-100" 
     src={!profiles.avatar ? akun : profiles.avatar} 
     alt="profile"/>
</figure>
  <h3 className='is-title '>{profiles.fullname}</h3>
</div>

{/* ACCORDION */}
<div class="menu is-menu-main">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
        <Link to="/dashboard/index" class="is-flex align-center  gap-1 px-2">
            <span class="icon"><i class="fa fa-lock" aria-hidden="true"></i></span>
            <span class="menu-item-label">Dashboard</span>
            </Link>
        </li>
      </ul>
      <p class="menu-label">Examples</p>
      <ul class="menu-list">
      <li>
          <Link to={`profile/${profiles.username}`} class="is-flex align-center  gap-1 px-2">
            <span class="icon"><i class="fa fa-user"></i></span>
            <span class="menu-item-label">Profile</span>
          </Link>
        </li>
      <li>
          <Link to="/profile/setting" class="is-flex align-center  gap-1 px-2">
            <span class="icon"><i class="fa fa-user"></i></span>
            <span class="menu-item-label">Profile Setting</span>
          </Link>
        </li>
        <li>
        <a href="profile.html" class="is-flex align-center  gap-1 px-2">
            <span class="icon has-update-mark"><i class="mdi mdi-table"></i></span>
            <span class="menu-item-label">Tables</span>
          </a>
        </li>
        <li>
        <Link to="/dashboard/history" class="is-flex align-center  gap-1 px-2">
          <span class="icon"><i class="fa fa-history"></i></span>
            <span class="menu-item-label">My Corder</span>
        </Link>
        </li>
        <li>
        <Link to="/dashboard/history" class="is-flex align-center  gap-1 px-2">
          <span class="icon"><i class="fa fa-history"></i></span>
            <span class="menu-item-label">Order History</span>
          </Link>
        </li>
      </ul>
      <p class="menu-label">About</p>
      <ul class="menu-list">
        <li>
          <a href="https://github.com/vikdiesel/admin-one-bulma-dashboard" target="_blank" class="has-icon">
            <span class="icon"><i class="mdi mdi-github-circle"></i></span>
            <span class="menu-item-label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://justboil.me/bulma-admin-template/free-html-dashboard/" class="has-icon">
            <span class="icon"><i class="mdi mdi-help-circle"></i></span>
            <span class="menu-item-label">About</span>
          </a>
        </li>
      </ul>
    </div>
{/* END ACCORDION */}
</aside>
{/* END SDEBAR INNER */}
</div>
    )
}

export default  Sidebar 