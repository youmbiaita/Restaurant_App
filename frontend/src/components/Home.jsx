import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DinnerMenu = ({ menu }) => {
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState("small")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{margin: "70px"}} className='shadow-lg p-5 mb-5 bg-white rounded'>
<div onClick={handleShow}>
<h1>{menu.name}</h1>
<img src={menu.image} className='img-fluid' style={{height: "200px", width: "200px"}} />
</div>

      <div className='flex-container'>
        <div className='w-100'>
          <p>varients</p>
         <select className="form-control" value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
         {menu.varients.map(varient=>{
          return <option value={varient}>
            {varient}
          </option>
         })}
         </select>
        </div>
        <div className='w-1oo'>
          <p>Quantity</p>
          <select className="form-control" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
         {[...Array(10).keys()].map((x, i)=> {
          return <option value={i + 1}>{i + 1}
          </option>
         })}
          </select>
        </div>

      </div>

      <div className="flex-container">
        <div className='m-1 w-100'>
         <h1>Price: {menu.prices[0][varient] * quantity}</h1>
        </div>

        <div className='m-1 w-100' >
         <button className='btn'>ADD TO CART</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{menu.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <img src={menu.image} className='img-fluid' style={{height: "400px !important"}} />
        <p>{menu.description}</p>
        </Modal.Body>

        <Modal.Footer>
         <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
      
    </div>
   
    
  );
};

export default DinnerMenu;
