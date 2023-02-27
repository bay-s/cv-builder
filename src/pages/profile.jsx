import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'
import { getUserByName } from './get-data'
import akun from '../img/akun.jpg'
import timeDifference from './timestamp'

const Profile = () => {
    const {value} = useContext(AppContext)
    const [user,setUser] = useState([])
    const {id} = useParams()
    // const string_id = id.toString().toLowerCase()
    useEffect(() => {
        const getUser = async () => {
            const users = await getUserByName(id)
            if(!users.error){
              setUser(users.data[0])
              console.log(users.data[0]);
            }
        }
        getUser()
    },[])


const dateObj = new Date(user.created_at);
const options = { month: 'short', day: 'numeric', year: 'numeric' };
const outputDateStr = dateObj.toLocaleDateString('en-US', options);

        return(
    <div className='container' id='container'>
{/* START COLUMN */}
    <div className='column is-10 mx-auto'>
{/* BOX */}
<section className='box is-flex flex-column gap-3 align-center'>

<figure class="image is-128x128">
<img class="is-rounded" src={!user.avatar ? akun : user.avatar} />
</figure>

<article className='is-flex flex-column gap-2 align-center'>
 <h3 className='is-bold is-title is-size-4'>{user.username}</h3>
 <p className='is-flex align-center gap-1'>
 <i class="fa fa-calendar" aria-hidden="true"></i>
 <span className=''>Joined on {outputDateStr}</span>
 </p>
</article>
<hr className='divider'/ >
</section>
{/* END BOX */}
    </div>
    {/* END COLUMN */}
    </div>
    )
}

export default Profile;