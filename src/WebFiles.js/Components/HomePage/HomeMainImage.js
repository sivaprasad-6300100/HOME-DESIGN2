import React from 'react';

const HomeMainImage = () => {
  const images = [
    '/images/Wood1.jpg',
    '/images/Wood2.jpg',
    '/images/Wood3.jpg',
  ];
  const Images2 =[
    '/images/UPVC1.jpg',
    '/images/ALLUMINIUM1.jpg',
    '/images/ALLUMINIUM2.jpg',
  ];
  

  return (
    <>
    <div className='image-container'>
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt='wood images'
          className='row1'
        />
      ))}
      <h3 className='Bed-styles'>BEDROOM CUPBOARD <br />DESIGNS......</h3>
     {/* <h4 className='Bed-styles2'>DESIGN</h4> */}
    </div>
    <div className='image-container2'>
    <h3 className='Bed-styles2'>KITCHEN AND HALL <br />DESIGNS......</h3>
   {Images2.map((image, index) => (
     <img 
       key={index} 
       src={image} 
       alt='wood images'
       className='row2'
     />
   ))}

 </div>
    </>
  );
};

export default HomeMainImage;
