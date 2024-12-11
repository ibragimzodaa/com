import Image from 'next/image'
import React from 'react'
import image1 from "../../public/Rectangle 41.png"
import image2 from "../../public/Rectangle 41 (1).png"
import image from "../../public/Rectangle 41 (2).png"
import Link from 'next/link'

const Home = () => {
  return (
    <section className='container'>
      <h1 className='text-center mt-[50px] mb-[40px] text-[40px] text-[#222222] font-semibold'>Featured</h1>
      <div className='flex justify-between flex-wrap mb-[40px]'>
        <div className='text-center w-[400px]'>
          <Image src={image1} alt=''/>
          <p className='text-[#00000061] text-[16px] font-semibold'>High-Back Bench</p>
          <p className='text-[#222222] text-[16px] font-semibold'>$9,99</p>
        </div>
        <div className='text-center w-[400px]'>
          <Image src={image2} alt=''/>
          <p className='text-[#00000061] text-[16px] font-semibold'>High-Back Bench</p>
          <p className='text-[#222222] text-[16px] font-semibold'>$9,99</p>
        </div>
        <div className='text-center w-[400px]'>
          <Image src={image} alt=''/>
          <p className='text-[#00000061] text-[16px] font-semibold'>High-Back Bench</p>
          <p className='text-[#222222] text-[16px] font-semibold'>$9,99</p>
        </div>
      </div>
      <div className='w-[200px] m-auto mb-[20px]'>
      <button className='bg-[#BA5D2C] text-[white] p-[15px] font-semibold rounded-[10px] w-[200px]  m-[auto]'><Link href="/product">ALL PRODUCTS</Link></button>
      </div>
    </section>
  )
}

export default Home