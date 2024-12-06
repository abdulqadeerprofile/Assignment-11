import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full'>
        <Image src={'/images/logo.png'} alt='logo' width={90} height={90} className='absolute ml-20 mt-5'/>
    <div className='bg-[#084c84] p-7'>
        <div className='ml-40 flex space-x-3'>
        <h1 className='text-[#b9d8f3] font-bold sm:text-sm md:text-lg lg:text-md'>Tution Free Education Program on Latest Technologies</h1>
        <div className='text-white flex space-x-10'>
        <button>Home</button>
        <button>Apply</button>
        <button>Jobs</button>
        <button>Result</button>
        <button>Courses</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Header