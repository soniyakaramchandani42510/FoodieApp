import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

function Navbar() {
  let data=useCart();
  const[cartView,setcartView]=useState(false)

  const navigate=useNavigate();
  const handleLogout=()=>{
localStorage.removeItem("authToken");
navigate("/login");
  }
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
          </li>
        {
          (localStorage.getItem("authToken"))?
          <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/myorder">My Orders</Link>
        </li>:""
        }
  </ul>
  {
     (!localStorage.getItem("authToken"))?
     <div className='d-flex'>
 
     <Link className="nav-link btn bg-white mx-1 text-success" to="/login">Login</Link>
  
     <Link className="nav-link btn bg-white mx-1 text-success" to="/createuser">SignUp</Link>
   
</div>:
<div>
<div className='btn bg-white text-bg-success mx-2 text-success' onClick={()=>{setcartView(true)}}>
   My Cart {" "}
   <Badge pill bg="danger">{data.length}</Badge>
  </div>
  {
    cartView?<Modal onClose={()=>{setcartView(false)}}><Cart/></Modal>:null
  }
  <div className='btn bg-white text-bg-success mx-2 text-danger' onClick={handleLogout}>
    Logout
  </div>
  </div>
  }
 
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar