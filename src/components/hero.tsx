'use client'
import Image from 'next/image'
import React, { useEffect } from 'react';

type Props ={
  bodyText: {
      title:string,
      description:string
  }
}

const Hero = ({bodyText}:Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className=''>
      <div className='p-16 pr-96 absolute space-y-10 mt-20'>
      <h1 className='text-black font-bold text-[50px] font-sans'>{bodyText.title}</h1>
      <p className='text-black text-[18px] pr-14'>{bodyText.description}</p>
      </div>
      <Image
        src={'/images/hero.png'}
        alt='Hero'
        width={450}
        height={450}
        className='justify-self-end mt-10'
        />
    </div>
  );
};

export default Hero;
