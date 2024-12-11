import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1>
        <Link href="/product/all">All</Link>{" "}
      </h1>
      <h1>
        <Link href="/product/ikea">Ikea</Link>
      </h1>
      <h1>
        <Link href="/product/marcos">Marcos</Link>
      </h1>
      <h1>
        <Link href="/product/caressa">Caressa</Link>
      </h1>
      <h1>
        <Link href="/product/liddy">Liddy</Link>
      </h1>
    </div>
  );
};

export default Header;
