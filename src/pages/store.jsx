import React, { useEffect, useState } from 'react'
import akun from '../img/akun.jpg'
import { Link, useParams } from 'react-router-dom';
import { GetProductSeller, getUserByName } from './get-data';
import numeral from 'numeral'

const Store = () => {
  const {id} = useParams()
  const [user,setUser] = useState([])
  const [product,setProduct] = useState([])

  useEffect(() => {
   const getUser = async () => {
     const data = await getUserByName(id)
     if(data.error) console.log(data.pesan)
     else{
      console.log(data.data[0])
      setUser(data.data[0])
     }
   }
   getUser()
   getProduct()
  },[product])

  const getProduct = async () => {
      const productz = await GetProductSeller(user.user_id)
      if(productz.error) alert(productz.pesan)
      else {
        setProduct(productz.data)
        console.log(productz.data);
      }
      console.log(productz);
    }

return(
 <div className='container' id='container'>
    <div className='column is-10 is-centered p-0 
    mx-auto is-flex flex-column gap-2'>

        <div class="card tile is-child ">
          <div class="card-content p-0">
            <div class=" is-aligned-center is-flex flex-column align-center gap-1 p-3">
       
            <figure class="image is-128x128">
            <img class="is-rounded edit-image h-100" src={!user.avatar ? akun : user.avatar}  alt="profile"/>
            </figure>
            <h3 className='is-title is-bold'>{user.username}</h3>
            <p className='lh-base w-75 text-center'>
            {user.biodata}
            </p>
            </div>
            <hr />
            {/* start flex */}
<div class="tabs is-centered">
  <ul>
    <li class="is-active"><a>All Product</a></li>
    <li><a>New Arrival</a></li>
    <li><a>Category</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>

            {/* end flex */}
</div>
{/* END CARD CONTETNT */}

</div>
        {/* END CARD */}


{/* columns */}
<div className='columns is-multiline p-0' id='product'>
   {/* START COLUMN */}
   {
 product.length < 1 ? "" 
 :
 product.map(item => {
        return <div className='column is-3'>
        <Link to={`/product/${item.id}`}>
<div class="card shadow">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={item.thumbnail} alt="Placeholder image" />
    </figure>
  </div>
  <div class="card-content p-2 is-flex flex-column gap-1">
        <p class="is-title p-0 m-0">{item.title}</p>
        <p class="subtitle is-6 p-0  m-0 is-bold">Rp.{numeral(item.price).format('0,0')}</p>
  </div>
</div> 
        </Link>
     </div>
    })
   }
{/* END COLUMN */}
   </div>
{/* end columns */}



      </div>
{/* END COLUMN */}
 </div>
//  END CONTAINER
)
}

export default Store