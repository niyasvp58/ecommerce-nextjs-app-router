'use client'
import React, { useEffect, useState } from 'react'
import { Productdata } from '../data/data'
import Productcard from '../productcard/productcard';
import '../style/productlist.css'

interface product{
    id: number;
    name: string;
    price: {
      raw: number;
    };
    image: {
      url: string;
    };
    seo: {
      description: string;
    };
    category: string;
    categories: {
      name: string;
    };
}
interface categorydata{
    id:string;
    name:string;
}
export default function Productlist() {
    const [product,setproduct] =useState <product[]>([]);
    const [lastdata,setlastdata] = useState <product[]>([]);
    const [categorydata,setcategorydata] =useState <categorydata[]>([]);
    const [loading,setloading] = useState(true)
    const fetchdata= async ()=>{
        try{
            const product = await Productdata.getproduct();
            const categorydata= await Productdata.getcategorydata();
            setproduct(product)
            setloading(false)
            if(lastdata.length==0){
                setlastdata(product)
            }
            setcategorydata(categorydata)
        }catch(error){
            console.log("fetchdata error",error)
        }

    }
    useEffect(()=>{
        fetchdata();
    },[])
    const filteredproduct=(cat:any)=>{
        try{
            if(cat=="all"){
                setlastdata(product)
            }else{
                const filtered=product.filter((p)=>p.categories.some(p=>p.name ===cat))
                setlastdata(filtered);
            }
        }catch(error){
            console.log("filtereed product error",error)
        }
    }
  return (
    <>
            { !loading ? (
                <div>
                <br/><br/>
                <button style={{marginLeft:'200px'}} onClick={(()=>{filteredproduct("all")})} className='btn btn-primary buttoncat'>ALL</button>
                {
                    categorydata.map((p)=>{
                        return(
                            <button onClick={()=>{
                                filteredproduct(p.name);
                            }} key={p.id} className='btn btn-primary buttoncat'>
                                {p.name}
                            </button>
        
                        )
                    })
                }
                <br/><br/>
                <h1 style={{marginLeft:"140px"}}>Products</h1>
                <br/><br/>
            <div style={{marginLeft:"140px"}}>
                {   
                     lastdata.map((p)=>(
                         <Productcard key={p.id} product={p} />
                    ))
                }
            </div>
            </div>
            ) : <div>
                        <div className="spinner-border" style={{ width: "70px", height: "70px",marginLeft:"750px",marginTop:"300px" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                </div> }

    </>
    
  )
}
