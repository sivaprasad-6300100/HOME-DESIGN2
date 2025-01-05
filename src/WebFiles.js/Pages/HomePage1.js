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


  const cards =[
    {
      name:"vamshi",
      Image:'/images.upvc-main.jpeg',
      experience:"  5 years"
    },
    {
      name:"siva",
      image:"/images/alluminium-main.jpg", 
      experience:"5 years"
    },
    {
      name:'ram',
      image:'"/images/woodmain.jpg',
      experience:'5 years'
    }

  ]

  return (
    <>
    <HomeHeader images={images} />
    <HomeMain  cards={cards} />
    </>
  )  
}

export default HomePage1
