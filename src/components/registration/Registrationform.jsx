import React, { useState } from 'react'
import './Registrationform.css'

function Registration() {
  const [data, setData] = useState(
    {
      username: '',
      email: '',
      password: '',
      mobile: '',
      image: null,
      gender: '',
      addresses: [
        { id:1, address: '', state: '',city: '', pincode: '', status: false }, // Initial primary address
      ],
    }
  )
  console.log(data);
  
  const states = ['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh',
  'Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka',
  'Kerala','Ladakh','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']


  //function - updates the values in the data
  function updateData(e){
    const {name, value} = e.target
    setData({...data,[name]:value})
  }

  // function - file size checker 
  function fileUpload(e){
    console.log(e.target);

    const getFile = e.target.files[0]
    console.log(getFile)

    const getFileSize = getFile.size/ 1024 //1kb = 1024
    if (getFileSize >100){
      alert('File size Should be below 100kb')
      e.target.value = null
    }else{
      setData({...data,image:getFile}) //updating the data 
    }
  }

  //function - adding new address
  function addNewAddress(){
    if(data.addresses.length<5){
      setData({...data,addresses:[...data.addresses,{
        id: data.addresses.length + 1,
        address: '',
        city: '',
        state: '',
        pincode: '',
        status: false,
      },]})
    }
    else{
        alert("Maximum Address Limit Reached")
    }
  }

  // function - updating the change in address

  function updateAddress(id, e) {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    const updated = data.addresses.map((address) => {
      if (address.id === id) {
        if (name === "city") {
          return { ...address, city: value };
        } else if (name === "pincode") {
          return { ...address, pincode: value };
        } else {
          return { ...address, [name]: value };
        }
      }
      return address;
    });
    console.log(updated);
    setData({ ...data, addresses: updated });
  }
  
  
  //function - primary address selection
  function togglePrimaryAddress(id) {
    const updated = data.addresses.map((address) => {
      if (address.id === id) {
        return { ...address, status: !address.status }; // Set status to true for selected address
      } else {
        return { ...address, status: false }; // Set status to false for all other addresses
      }
    });
    console.log(updated )
    setData({ ...data, addresses: updated });
  }

  // function - to store the data in the local storage and reset the value
  function sendDataToLocalStorage(e){
    e.preventDefault();
    localStorage.setItem('registrationdata', JSON.stringify(data))

    setData({
      username: '',
      email: '',
      password: '',
      mobile: '',
      image: null,
      gender: '',
      addresses: [
        { id: 1, address: '', state: '', city: '', pincode: '', status: false }, // Initial primary address
      ],
    });

    // console.log(JSON.parse(localStorage.getItem('registrationData')));
  }

  return (
    <>
    <div className="container mt-2 p-4">
      <div className="row">
        {/* Left Container - Embedded Map */}
        <div className="col-md-4 border border-black d-flex justify-content-center align-items-center text-center rounded" style={{height:'500px'}}>
          <div className=''>
          <h2 className='companyname'>Innoblitz Technology</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.422632108214!2d80.21698197507817!3d13.072379987252306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669a29c5b01b%3A0x71f2aab6c5993741!2sInnoblitz%20Technologies%20and%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1715150481562!5m2!1sen!2sin"
              className='mapname'
              width="400px"
              height="300px"
              style={{ borderRadius:'10px', marginTop:"20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Container - User Registration Form */}
  
          <form className="col-md-6 container border border-info rounded" onSubmit={sendDataToLocalStorage}>
            <div className="row">
              <div className="border border-info p-4">
                <h2 className='bg p-2 border border-info rounded-3 text-center' style={{ backgroundColor: "#9E4FAB", color: "white" }}>Register Form</h2>

                {/* Username */}

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInputUsername" name='username' onChange={updateData} placeholder="Enter Username" required />
                  <label htmlFor="floatingInputUsername">Username</label>
                </div>

                {/* Email */}

                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInputEmail" name='email' onChange={updateData} placeholder="Enter Email address" required/>
                  <label htmlFor="floatingInputEmail">Email Address</label>
                </div>

                 {/* Password  */}

                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingInputPassword" name='password' onChange={updateData } placeholder="Enter Password" required/>
                  <label htmlFor="floatingInputPassword">Password</label>
                </div>
                
                {/* mobile */}

                <div className="form-floating mb-3">
                  <input type="tel" className="form-control" id="floatingInputMobile" name='mobile' onChange={updateData} pattern='[0-9]{10}' placeholder="Enter Mobile" required/>
                  <label htmlFor="floatingInputMobile">Phone</label>
                </div>

                {/* gender */}
                <div className='form-group d-flex justify-content-between mb-3'> 
                  <label htmlFor="" className=' pe-5'>Gender</label>
                  <div>
                    <div className="form-check form-check-inline px-5">
                      <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={data.gender==='male'} onChange={updateData}/>
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline px-5">
                      <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={data.gender==='female'} onChange={updateData}/>
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline px-4">
                      <input className="form-check-input" type="radio" name="gender" id="others" value="others" checked={data.gender==='others'} onChange={updateData}/>
                      <label className="form-check-label" htmlFor="others">Others</label>
                    </div>
                  </div>
                </div>

                {/* Image upload */}

                <div className='form-group d-flex justify-content-between gap-3 mb-3 align-items-center'> 
                  <label htmlFor="imageUpload" >Upload Image</label>
                  <input type="file" className='form-control ' style={{width:'80%'}} name="imageUpload" id="imageUpload" accept='image/*' onChange={(e)=>fileUpload(e)}/>
                </div>

                {/* address */}
                <div>Address</div> 
                  <div className='form-group'>
                  {data.addresses.map((addr)=>(
                    <div key={addr.id}>
                      {/* address */}
                      <div className="form-floating mb-3 ">
                        <input type="text" className="form-control" id={`address_${addr.id}`} name = "address" value={addr.address} onChange={(e)=>updateAddress(addr.id,e)} placeholder="Current Address"  required/>
                        <label htmlFor={`address_${addr.id}`}>Address</label>
                      </div>

                      {/* state and city */}
                      <div className='form-group d-flex justify-content-between align-items-center'>
                        {/* state */}
                      <div className="form-floating mb-3">
                        <select className="form-select form-select-sm" aria-label="select example" id={`state_${addr.id}`} name="state" value={addr.state} onChange={(e)=>updateAddress(addr.id,e)} required>
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}

                        </select>
                      </div>

                      {/* city */}
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id={`city_${addr.id}`} name={'city'} onChange={(e)=>updateAddress(addr.id,e)} placeholder="city" required/>
                        <label htmlFor={`city_${addr.id}`}>City</label>
                      </div>
                      </div>

                      
                      {/* pincode and primary address */}
                      <div className='form-group d-flex justify-content-between align-items-center'>
                        {/* Pincode */}
                      <div className="form-floating mb-3">
                        <input type="number" className="form-control" id={`pincode_${addr.id}`} name={'pincode'} onChange={(e)=>updateAddress(addr.id,e)} placeholder="pincode" required/>
                        <label htmlFor={`pincode_${addr.id}`}>Pincode</label>
                      </div>

                      {/* Status */}
                      <div className="form-group mb-3">
                        <input type="radio" className="form-check-input" name={`status_${addr.id}`} id={`status_${addr.id}`} checked={addr.status} onChange={()=>togglePrimaryAddress(addr.id)} placeholder="status"/>
                        <label htmlFor={`status_${addr.id}`} className='ms-2'>Primary Address</label>
                      </div>
                      </div>
                      

                    </div>
                  ))}
                  {data.addresses.length<5 && (<button className='btn btn-primary' onClick={addNewAddress}>Add Address</button>)}
                  </div>


                {/* submit button */}

                <div className='form-group text-center mt-3' >
                  {/* <input className="btn btn-primary btn-lg" type="submit" value="Submit" onSubmit={sendDataToLocalStorage}/> */}
                  <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </form>
        
      </div>
    </div>
    </>
  )
}

export default Registration