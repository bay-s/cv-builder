import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';
import Sidebar from './dashboard-sidebar';
import SidebarSeller from './dashboard-sidebar-seller';
import EditProfileForm from './edit-profile-form';
import Invoice from './invoice';
import Main from './main';
import ProductAdd from './product-add';
import ProductHistory from './product-history.j';
import ProductList from './product-list';
import ProductOrder from './product-order';
import Profile from './profile';
import ProfileHeader from './profile-header';
import ProfileSeller from './profile-seller';


const  Dashboard = () => {

const {value} = useContext(AppContext)
const {id} = useParams()
const string_id = id.toString().toLowerCase()

console.log(value.data);

    return(
<div className='container ' id='container'>
{/* START COLUMNS */}
<div className='columns is-multiline my-5'>

 {/* START COLUMN RIGHT */}

{
    value.data.main_role === 'Buyer' ? <Sidebar profiles={value.data}/>  :  <SidebarSeller profiles={value.data}/> 
}
 {/* END COLUMN RIGHT */}
 {/* START COLUMN LEFT */}
 <div className='column is-9 is-flex flex-column gap-1'>
  <ProfileHeader string={string_id} />
{string_id === 'index' ?  <Main data={value.data}/> : ""}
{string_id === 'setting' ? <EditProfileForm />  : ""}
{
    value.data.main_role === 'Buyer' ? string_id === 'profile' ? <Profile profiles={value.data}/>  : "" : string_id === 'profile' ? <ProfileSeller profiles={value.data}/>  : "" 
}
{string_id === 'history' ? <ProductHistory />  : ""}
{string_id === 'add-product' ? <ProductAdd />  : ""}
{string_id === 'order' ? <ProductOrder />  : ""}
{string_id === 'invoice' ? <Invoice />  : ""}
{string_id === 'list-product' ? <ProductList data={value.data} />  : ""}
 </div>
 {/* END COLUMN LEFT*/}
</div>
{/* END COLUMNS */}
</div>
    )
}


export default  Dashboard;


