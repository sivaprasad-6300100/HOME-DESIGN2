import React from 'react'
import HomeHeader from '../Components/HomePage/HomeHeader'
import HomeMain from '../Components/HomePage/HomeMain';
import HomeMainImage from '../Components/HomePage/HomeMainImage';
import HomeFooter from '../Components/HomePage/HomeFooter';
// import '../../../public/images/woodmain.jpg'




const HomePage1 = () => {

  const images = [
    "/images/WoodWork123.jpg",
    "/images/ALLUMINIUM1.jpg",
    "/images/upvc-main.jpeg", // Image in the public/images folder
    "/images/alluminium-main.jpg", // Image in the public/images folder
    "/images/woodmain.jpg", // Image in the public/images folder
  ];
 const data =[
  {
    'id':1,
    'name':'siva ',
    'image':'image1',
    'experience':'2years'
  },
  {
    'id':2,
    'name':'vishnu',
    'image':'image2',
    'experience':'3years'
  },
  {
    'id':3,
    'name':'sunil',
    'image':'image3',
    'experience':'5years'
  }
 ];
 const data2 =[
  {
    'id':4,
    'name':'durga',
    'image':'image4',
    'experience':'3years'
  },
  {
    'id':5,
    'name':'sanjesh',
    'image':'image5',
    'experience':'4years',
  },
  {
    'id':6,
    'name':'sujith',
    'image':'image6',
    'experience':'5years',
  }
 ]

  return (
    <>
    <HomeHeader images={images} />
    <HomeMain  Data={data} Data2={data2} />
    <HomeMainImage />
    <HomeFooter />

    </>
  )  
}

export default HomePage1
