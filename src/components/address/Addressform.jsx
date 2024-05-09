import React, { useState } from 'react'

function Addressform({setData}) {

  const [addr,addAddr] = useState([{id:1,address:'',city:'', pincode:''}])
  // console.log(addr);

  const states = ['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh',
  'Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka',
  'Kerala','Ladakh','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']

  // function - add new address check the length and add the index value and rerender
  function addNewAddress(){
    if(addr.length<5){
      addAddr([...addr,{id:addr.length+1, address:'',city:'',pincode:''}])
    }
    else{
      alert("Maximum address limit reached")
    }
  }

  // function - update the changes when user enter input to the addr
  // function addChanges(id, objKey, Value){
  //   const updatedAddress = ()
  //   addAddr()
  // }

  

  return (
    <>
    <div>Address</div> 
    <div className='form-group'>
    {addr.map((addr, index)=>(
      <div key={index}>
        {/* address */}
        <div className="form-floating mb-3 ">
          <input type="text" className="form-control" id='floatingInputAddress' value={addr.value} placeholder="Current Address" required/>
          <label htmlFor="floatingInputAddress">Address</label>
        </div>

        {/* state */}
        {/* <div className="form-floating mb-3">
          <label htmlFor="floatingInputState">State</label>
          <input type="select" className="form-control" id='floatingInputState' value={addr.state} placeholder="state" required/>
        </div> */}

        {/* city */}
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id='floatingInputCity' value={addr.city} placeholder="city" required/>
          <label htmlFor="floatingInputCity">City</label>
        </div>

        {/* Pincode */}
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id='floatingInputPincode' value={addr.pincode} placeholder="pincode" required/>
          <label htmlFor="floatingInputPincode">Pincode</label>
        </div>

        {/* Status */}
        {/* <div className="form-floating mb-3">
          <input type="radio" className="form-control" id='floatingInputStatus' checked={addr.status} placeholder="pincode" required/>
          <label htmlFor="floatingInputStatus">Pincode</label>
        </div> */}

      </div>
    ))}
    <button className='btn btn-primary' onClick={addNewAddress}>Add Address</button>
    </div>
    </>
    
  )
}

export default Addressform