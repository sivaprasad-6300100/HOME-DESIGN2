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

  const items =['banana','graps','apple','lemon']


  return (
    <>
    <HomeHeader images={images} />
    <HomeMain  items={items} />
    </>
  )  
}

export default HomePage1
