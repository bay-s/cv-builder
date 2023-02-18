import React, { useEffect, useRef, useState } from 'react';
import html2canvas from "html2canvas";
import jsPdf from 'jspdf'
import { useParams } from 'react-router-dom';
import { GetProductDetail } from './get-data';
import numeral from 'numeral'

const Invoice = () => {
    const input = useRef(null);
    const {id} = useParams()
    const [product,setProduct] = useState([])

    useEffect(() => {

const getProduct = async () => {

 const productz = await GetProductDetail(id)
  if(productz.error) alert(productz.pesan)
  else {
    console.log(productz);
    console.log(productz.pesan);
    setProduct(productz.data[0])
  }
      }
 getProduct()
    },[])


    const exportPdf = () => {
        html2canvas(input.current, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
          const imgWidth = 200;
          const imgHeight = canvas.height * imgWidth / canvas.width;
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPdf('p', 'mm', 'a4');
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('invoice.pdf');
        });
      }
     
      const totalPrices = numeral(product.price).format('0,0');
    return(
 <div className='container' id='container'>

<div className='column is-8 mx-auto box is-flex flex-column gap-1 align-center'  ref={input}>
 
<h3 className='is-title is-bold is-size-3 mb-3'>Invoice</h3> 
<figure class="image is-128x128 avatar">
  <img class="is-rounded " src={product.thumbnail} />
</figure>

<div class="table-wrapper has-mobile-cards  w-100">
          <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
            <thead>
            <tr>
              <th></th>
              <th></th>
     
            </tr>
            </thead>
            <tbody>
 <tr>
              <td data-label="Name">
              <span className='is-bold is-title'>Product Name : </span>
              </td>
 
              <td>
              <span className='is-bold is-title'>{product.title}</span>
              </td>
 </tr>
 <tr>
              <td data-label="Name">
              <span className='is-bold is-title'>Total item : </span>
              </td>
 
              <td>
              <span className='is-bold is-title'>{product.qty}</span>
              </td>
 </tr>
 <tr>
              <td data-label="Name">
              <span className='is-bold is-title'>Total price: </span>
              </td>
 
              <td>
              <span className='is-bold is-title'>{totalPrices}</span>
              </td>
 </tr>


            </tbody>
          </table>
        </div>

</div>

<div className='is-flex justify-center'>
<button className='button is-primary ' onClick={() => exportPdf()}>Download PDF</button>
</div>

 </div>
    )
}

export default Invoice





