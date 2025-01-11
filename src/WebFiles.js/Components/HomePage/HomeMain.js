import React from 'react';

function HomeMain({ Data }) {
  return (
    <>
   <div className='card-container'>
      {Data.map((Data, index) => (
        <div key={index} className="card">
          <img src={Data.image} alt={Data.name} /> 
          <h3>{Data.name}</h3>
          <p>{Data.experience}</p> 
        </div>
      ))}
    </div>
    <h1 className='card-heading'>HomeWorkDesigns</h1>
    </>
  );
}

export default HomeMain;
