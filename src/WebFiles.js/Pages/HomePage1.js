import React from 'react'
import HomeHeader from '../Components/HomePage/HomeHeader'
import HomeMain from '../Components/HomePage/HomeMain';
// import '../../../public/images/woodmain.jpg'




const HomePage1 = () => {

  const images = [
    "/images/upvc-main.jpeg", // Image in the public/images folder
    "/images/alluminium-main.jpg", // Image in the public/images folder
    "/images/woodmain.jpg", // Image in the public/images folder
  ];
 const data =[
  {
    'id':1,
    'name':'siva prasad',
    'image':'image1',
    'experience':'2years'
  },
  {
    'id':2,
    'name':'satya',
    'image':'image2',
    'experience':'3years'
  },
  {
    'id':3,
    'name':'sunil',
    'image':'image3',
    'experience':'5years'
  },
  // {
    // 'id':4,
    // 'name':'durga',
    // 'image':'image4',
    // 'experience':'3years'
  // }
 ];


  return (
    <>
    <HomeHeader images={images} />
    <HomeMain  Data={data} />
    </>
  )  
}

export default HomePage1
