import React from "react";
import image1 from "../../../../../public/Rectangle 41.png";
import image2 from "../../../../../public/Rectangle 41 (1).png";
import image3 from "../../../../../public/Rectangle 41 (2).png";
import Link from "next/link";
import Image from "next/image";

const ProductById = async ({ params }) => {
  let { product } = await params;
  let data = [
    {
      id: 1,
      name: "High-Back Bench",
      price: "$9,99",
      img: image1,
    },
    {
      id: 2,
      name: "Albany Table",
      price: "$10,33",
      img: image2,
    },
    {
      id: 3,
      name: "Wooden Table",
      price: "$10,33",
      img: image3,
    },
    {
      id: 4,
      name: "High-Back Bench",
      price: "$9,99",
      img: image2,
    },
    {
      id: 5,
      name: "Albany Table",
      price: "$10,33",
      img: image3,
    },
    {
      id: 6,
      name: "Wooden Table",
      price: "$10,33",
      img: image1,
    },
    {
      id: 7,
      name: "High-Back Bench",
      price: "$9,99",
      img: image3,
    },
    {
      id: 8,
      name: "Albany Table",
      price: "$10,33",
      img: image1,
    },
    {
      id: 9,
      name: "Wooden Table",
      price: "$10,33",
      img: image3,
    },
  ];

  return (
    <div>
      <div className="bg-[#F1F5F8] p-[70px]">
        <div className="container">
          <h1 className="text-[#235275] text-[25px]">Home /  Albany Table</h1>
        </div>
      </div>
      {data.map((el) => {
        if (el.id == product) {
          return (
            <Link href={`/byId/${el.id}`}>
              <div className="flex justify-evenly mt-[50px] container">
                <Image className="mt-[50px]" width={550} height={200} src={el.img} alt="" />
                <div className="mt-[50px]">
                  <p className="text-[#00000061] text-[16px] font-semibold">
                    {el.name}
                  </p>
                  <p className="text-[#222222] text-[16px] font-semibold mt-[10px]">
                    {el.price}
                  </p>
                  <p className="w-[600px] mt-[20px]">
                    Cloud bread VHS hell of banjo bicycle rights jianbing umami
                    mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                    dreamcatcher waistcoat, authentic chillwave trust fund.
                    Viral typewriter fingerstache pinterest pork belly narwhal.
                    Schlitz venmo everyday carry kitsch pitchfork chillwave
                    iPhone taiyaki trust fund hashtag kinfolk microdosing
                    gochujang live-edge{" "}
                  </p>
                  <button className="mt-[20px] bg-[#BA5D2C] text-[white] p-[15px] font-semibold rounded-[10px] w-[200px]  m-[auto]">
                    <Link href="/product">ADD TO CART</Link>
                  </button>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default ProductById;
