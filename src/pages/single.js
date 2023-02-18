import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentCard from './comment-card'
import ProductBanner from './product-banner'
import ProductDesc from './product-desc'
import ProductTotal from './product-total'
import { createClient } from 'pexels';
import Cookies from 'js-cookie'
import ProductLeft from './product-left'
import ProductRight from './product-right'
import { AppContext } from '../App'
import { GetProductDetail } from './get-data'

const SinglePage = () => {
 const {value} = useContext(AppContext)
 const {id} = useParams()
 const [image,setImage] = useState([])
 const [products,setProducts] = useState([])
 const [quantity,setQuantity] = useState(1)
 const product = Cookies.get('product') 
 const productArr = product === undefined ? '' : JSON.parse(product)
 const client = createClient('563492ad6f917000010000019c8e871dabee4d69b8b2474d22c18a3f');



 useEffect(() => {
    client.photos.show({ id: id}).then(photo => {
        setImage(photo)
        console.log(photo);
      });
      getProduct()
 },[])

 const saveCookies = (e) => {
    e.preventDefault()
    const id = e.target.dataset.product_id
    const isDuplicate = productArr.toString() === '' ? '' : productArr.filter(obj => obj.user_id === value.data.user_id);
    if(isDuplicate){
      alert("You Already have this product in cart")
      return
    }
    const item = [
       {
          id:products.id,
          title:products.title,
          price:products.price,
          thumbnail:products.thumbnail,
          qty:parseInt(quantity),
          created_at:products.created_at,
          user_id:value.data.user_id,
          seller_id:products.seller_id
        }
    ]

    if(product === undefined){
      console.log("oke");
      Cookies.set('product',JSON.stringify(item) )
    }else{
      productArr.push(
        {
          id:products.id,
          title:products.title,
          price:products.price,
          thumbnail:products.thumbnail,
          qty:parseInt(quantity),
          created_at:products.created_at,
          user_id:value.data.user_id,
          seller_id:products.seller_id
        }
      )
      Cookies.set('product',JSON.stringify(productArr))
      alert('Save product success')
    }
  }

const getProduct = async () => {
  const productz = await GetProductDetail(id)
  if(productz.error) alert(productz.pesan)
  else {
    setProducts(productz.data[0])
  }
}

const handlerChange = (e) => {
  const {name,value} = e.target
  setQuantity(value)
}

const data = {
  saveCookies,
  id,
  handlerChange,
  products
}
  return(
<div className='container ' id='container'>
{/* START COLUMNS BANNER */}
{/* <ProductBanner image={image}/> */}
{/* END COLUMNS BANNER */}

{/* start columns descripton */}
<div className='columns is-multiline my-5'>

 {/* START COLUMN LEFT */}
 {/* <ProductDesc title={image.photographer}/> */}
 <ProductLeft image={image} title={image.photographer} data={products}/>
 {/* END COLUMN LEFT*/}

 {/* START COLUMN RIGHT */}
{/* <ProductTotal id={id} saveCookies={saveCookies}/> */}
<ProductRight  data={data}/>
 {/* END COLUMN RIGHT */}
</div>
{/* end columns descripton */}
</div>
    )
}

export default SinglePage