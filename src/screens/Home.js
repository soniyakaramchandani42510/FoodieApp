import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Crousel from "../components/Crousel";
function Home() {
const[foodcat,setfoodcat]=useState([]);
const[fooditem,setfooditem]=useState([]);
const [search,setsearch]=useState("");

const onChange=((e)=>{
  setsearch(e.target.value);
})

const loadData=async()=>{
  // console.log("yes");
  let response =await fetch("http://localhost:3000/api/foodData",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    }
  });
  response= await response.json();
  console.log(response[0],response[1]);
  setfooditem(response[0]);
  setfoodcat(response[1]);
  // console.log(fooditem);

}
useEffect(()=>{
  loadData();
},[])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
       
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{objectFit:'contain'}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id="carousel">

   <div className="carousel-caption" style={{zIndex:'10',}}>
    <div action="" className="d-flex justify-content-center" >
        <input  type="search" placeholder='search' className="form-control mx-2" value={search} onChange={onChange}/>
        <button className="btn btn-outline-success">Search</button>
    </div>
   </div>

    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(30%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?momos" className="d-block w-100" alt="..." style={{filter:"brightness(30%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?fries" className="d-block w-100" alt="..." style={{filter:"brightness(30%"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

      <div className="container">
        {
          foodcat!==[]?foodcat.map((data)=>{
             return (
              <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {

                // console.log("heyyyyyyy");
                fooditem!==[] ?fooditem.filter((item)=>(item.CategoryName===data.CategoryName) &&(item.name.toLowerCase().includes(search.toLowerCase()))). map(fiteritems=>{
                  return(
                    <div key={fiteritems._id} className="col-12 col-md-6 col-lg-3">

                      <Card foodItem={fiteritems} options={fiteritems.options[0]}/>
                    </div>
                  )
                }):<div>No data found</div>
              }
              
              </div>
             )
          }):<div>No food items </div>
        }
        
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
