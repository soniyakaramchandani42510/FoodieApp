import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatchCart,useCart} from './ContextReducer'

function Card(props) {
let dispatch=useDispatchCart();
let options=props.options;
// console.log(options);
let priceOptions=Object.keys(options);
let foodItems=props.foodItem;
const [quantity, setquantity] = useState(1);
const [size, setsize] = useState("");
let data=useCart();
let finalPrice=quantity*parseInt(options[size])
const priceRef=useRef();

useEffect(()=>{
  setsize(priceRef.current.value)
},[])

const addTocart=async()=>{
let food=[]
for(const item of data){
  if(item.id===foodItems._id){
    food=item;
    break;

  }
}

if(food!==[]){
  if(food.size===size){
    await dispatch({type:"UPDATE",id:foodItems._id,price:finalPrice,qty:quantity});
    return;
  }
  else {
    await dispatch({type:"ADD",id:foodItems._id,img:foodItems.img ,name:foodItems.name,price:finalPrice,qty:quantity,size:size});
    return;
  }
}
else {
  await dispatch({type:"ADD",id:foodItems._id,img:foodItems.img ,name:foodItems.name,price:finalPrice,qty:quantity,size:size});
  return;
  // console.log(data)
}



 
}
  return (
    <div>
      <div>
        <div className="card mt-3" style={{width: "18rem", "maxHeight":"360px"}}>
          <img src={foodItems.img} className="card-img-top" alt="..." height={"150px"} />
          <div className="card-body">
            <h5 className="card-title">{foodItems.name}</h5>
            {/* <p className="card-text">
               {props.desc}
            </p> */}
            <div className="container w-100">
             <select className="m-2 h-100  bg-light  rounded" onChange={(e)=>setquantity(e.target.value)}>
              {
                Array.from(Array(6),(e,i)=>{
                  return <option key={i+1} value={i+1}>{i+1}</option>
                })
              }
              </select>
              <select className="m-2 h-100  bg-light rounded "ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
             
              
                 {
                  priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })
                 }
             
              </select> 
              <div className="d-inline fs-5">
               Rs{finalPrice}/-
              </div>
             
            </div>
            <hr />
          
          <button className="btn btn-success justify-center ms-2" onClick={addTocart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card