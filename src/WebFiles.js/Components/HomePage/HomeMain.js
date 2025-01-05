import React from 'react'

function HomeMain({cards}) {
  return (
    <>
    <div className='card-container'>
  {cards.map((person,index) =>(
    <div 
    key ={index}
    name ={person.name}
    image ={person.image}
    experience={person.experience} className='card' />
  ))}     
    </div>
    </>
  )
}

export default HomeMain
