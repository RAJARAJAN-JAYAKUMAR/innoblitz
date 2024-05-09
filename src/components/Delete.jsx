import React, { useState } from 'react';

function Delete() {
  const [data, setData] = useState([{ address: 'Chennai' }]);

  return (
    <>
      {data.map((curr, index) => (
        <div className="form-floating mb-3" key={index}>
          <label htmlFor="floatingInputAddress">{curr.address}</label>
          <input type="text" className="form-control" id={`floatingInputAddress-${index}`} placeholder="Current Address" required />
        </div>
      ))}

      <div className='container d-flex justify-content-center align-items-center'>
        <div className='border border-2' style={{height:'100px', width:'50px'}}>
            1
        </div>
        <div className='border border-2' style={{height:'200px', width:'150px'}}>
            2
        </div>
      </div>
    </>
  );
}

export default Delete;
