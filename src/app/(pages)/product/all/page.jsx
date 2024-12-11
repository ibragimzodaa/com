import Link from "next/link";
import React from "react";
import iconCarzine from "../../../../../public/Frame 279 (1).png";
import Image from "next/image";
import image1 from "../../../../../public/Rectangle 41.png"
import image2 from "../../../../../public/Rectangle 41 (1).png"
import image3 from "../../../../../public/Rectangle 41 (2).png"
import Header from "../components/header/header";

const Product = () => {
  let data = [
    {
        id:1,
        name:"High-Back Bench",
        price:"$9,99",
        img: image1
    },
    {
        id:2,
        name:"Albany Table",
        price:"$10,33",
        img: image2
    },
    {
        id:3,
        name:"Wooden Table",
        price:"$10,33",
        img: image3
    },
    {
        id:4,
        name:"High-Back Bench",
        price:"$9,99",
        img: image2 
    },
    {
        id:5,
        name:"Albany Table",
        price:"$10,33",
        img: image3
    },
    {
        id:6,
        name:"Wooden Table",
        price:"$10,33",
        img: image1
    },
    {
        id:7,
        name:"High-Back Bench",
        price:"$9,99",
        img: image3
    },
    {
        id:8,
        name:"Albany Table",
        price:"$10,33",
        img: image1
    },
    {
        id:9,
        name:"Wooden Table",
        price:"$10,33",
        img: image3
    },
  ];

  return (
    <section>
      <header className="flex items-center">
        <div className="container divHeader flex-wrap">
          <div className="texts flex">
            <h1>
              {" "}
              <Link href="/">Home</Link>
            </h1>
            <h1>
              {" "}
              <Link href="/product">Products</Link>{" "}
            </h1>
            <h1>
              <Link href="/about">About</Link>
            </h1>
          </div>
          <div className="images">
            <h1>comfy</h1>
          </div>
          <div className="icon">
            <Image src={iconCarzine} alt="" />
          </div>
        </div>
      </header>
      <div className="bg-[#F1F5F8] p-[70px]">
        <div className="container">
          <h1 className="text-[#235275] text-[25px]">Home / Product</h1>
        </div>
      </div>
      <div className="container flex justify-center">
        <div>
          <input
            className="mt-[30px] mb-[20px] bg-[#F1F5F8] text-white p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2  placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <h1 className="text-[20px] font-semibold mb-[10px]">Company</h1>
          <Header/>
          <p className="mt-[20px]">Price</p>
          <input type="range" />
          <p>Value : $80</p>
        </div>
        <div className="flex flex-wrap justify-between ml-[30px] gap-[20px]">
          {data.map((el) => {
            return <Link href={`/product/${el.id}`}>
             <div className='text-center w-[350px]'>
            <Image width={350} height={200} src={el.img} alt=''/>
            <p className='text-[#00000061] text-[16px] font-semibold'>{el.name}</p>
            <p className='text-[#222222] text-[16px] font-semibold'>{el.price}</p>
          </div>
            </Link>
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
