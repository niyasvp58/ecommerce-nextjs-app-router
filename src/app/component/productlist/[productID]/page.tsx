import React from 'react'
import { Productdata } from '../../data/data';


export default async function Productdetails(props:any) {
    try{
        console.log(props)
        const params = props.params.productID;
        var product = await Productdata.getproductbyID(params);
      return (
        <div style={{fontSize:"20px",fontWeight:"bold"}}>
                <div >Product ID:{params}</div>
                <div>{product?.image &&<img src={product.image.url} width={400} height={400} />}</div>
                <div>{product?.name}</div>
                <div>{product?.price.raw}</div>
                <div>{product?.seo.description}</div>
        </div>
      )
    }catch(error){
        console.log("error detail page",error)
    }

}
