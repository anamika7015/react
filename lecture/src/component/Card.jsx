import React from 'react'
import image from '../assets/image.jpg'
const Card = (props) => {
  return (
   <div className='flex justify-center items-center'>
     <div className='w-[260px] h-[280px] bg-gray-500 m-4 border-6 border-black rounded-2xl text-center shadow-amber-400 shadow-lg '>
      <img src={image} alt="#" className='h-30 w-30 rounded-full  flex items-center text-center mx-14 border-white border-4 shadow-black shadow-md' />
      <h1 className='font-bold text-red-400'>{props.name}</h1>
      <h3 className='font-semibold text-blue-50'>{props.tech}</h3>
      <p className='flex items-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quidem eligendi aperiam magni! Distinctio sed
         sint dolore.</p>
    </div>
   </div>
  )
}

export default Card
