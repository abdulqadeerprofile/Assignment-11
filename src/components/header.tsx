import Image from 'next/image'
import React from 'react'

type Props ={
  items: {
      item1:string
      item2:string
      item3:string
      item4:string
      item5:string
  }
}

const Header = ({items}:Props) => {
  return (
    <div className='w-full'>
        <Image src={'/images/logo.png'} alt='logo' width={90} height={90} className='absolute ml-20 mt-5'/>
    <div className='bg-[#084c84] p-7'>
        <div className='ml-40 flex space-x-3'>
        <h1 className='text-[#b9d8f3] font-bold sm:text-sm md:text-lg lg:text-md'>Tution Free Education Program on Latest Technologies</h1>
        <div className='text-white flex space-x-10'>
        <button>{items.item1}</button>
        <button>{items.item2}</button>
        <button>{items.item3}</button>
        <button>{items.item4}</button>
        <button>{items.item5}</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Header