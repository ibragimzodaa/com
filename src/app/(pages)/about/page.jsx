import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconCarzine from "../../../../public/Frame 279 (1).png";

const About = () => {
  return (
    <section>
      <header className="flex items-center">
        <div className="container divHeader flex flex-wrap">
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
          <h1 className="text-[#235275] text-[25px]">Home / About</h1>
        </div>
      </div>
      <h1 className="text-[40px] font-semibold text-center mt-[20px]">
        / Our history
      </h1>
      <p className="text-[#235275] text-[18px] w-[934px] m-auto mt-[30px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
        delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
        Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt
        sesequi blanditiis est exercitationem molestiae delectus saepe odio
        eligendi modi porro eaque in libero minus unde sapiente consectetur
        architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum
        totam velit saepe sed quos similique amet. Ex, voluptate accusamus
        nesciunt totam vitae esse iste.
      </p>
    </section>
  );
};

export default About;
