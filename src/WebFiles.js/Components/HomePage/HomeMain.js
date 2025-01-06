import React from 'react'

function HomeMain({items}) {
  return (
    <>
    {items.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
</ >
  )
}

export default HomeMain
