import React from 'react'

function Crousel() {
  return (
    <div>

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{objectFit:'contain'}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id="carousel">

   <div className="carousel-caption" style={{zIndex:'10',}}>
    <form action="" className="d-flex" >
        <input  type="search" placeholder='search' className="form-control mx-2" />
        <button className="btn btn-outline-success">Search</button>
    </form>
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
  )
}

export default Crousel