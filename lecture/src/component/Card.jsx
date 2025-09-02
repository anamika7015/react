import React from 'react'
import image from '../assets/image.jpg'
const Card = () => {
  return (
    <div className='w-[260px] h-[280px] bg-gray-500 m-4 border-6 border-black rounded-2xl text-center shadow-amber-400 shadow-lg'>
        <img src={image} alt="#" className='h-30 w-30 rounded-full flex items-center justify center' />
      <h1>Anamika Pandey</h1>
      <h3>FullStack Developer</h3>
    </div>
  )
}

export default Card
