import React from 'react';
import WomenImg from '../img/woman2.png';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
  <section className=' h-[800px] bg-hero bg-no-repeat bg-cover py-24'>
    <div className='container mx-auto flex justify-around'>
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center'>
          <div className='w-10 h-[2px] bg-black mr-3'></div>New Trend
        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
        venda de outono elegante <br />
          <span className='font-semibold'>mulheres</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary cursor-pointer hover:border-gray-200' >
        Discover More
        </Link>
      </div>
      <div className='hidden  lg:block'>
        <img src={WomenImg} alt='' />
      </div>
    </div>
  </section>
  )
};

export default Hero;
