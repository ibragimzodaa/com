'use client'
import Image from 'next/image'
import React from 'react'
import iconCarzine from "../../../public/Frame 279.png"
import './header.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import hamburgerIcon from "../../../public/Hamburger_icon.svg.png"

const Header = () => {
  let pathname = usePathname()
  if(pathname == "/about" || pathname == "/product" ){
    return ""
  }
  if(pathname != "/about" && pathname != "/product" && pathname != "/"){
    return ""
  }
  
  return (
    <header className='header'>
      <div className='container divHeader flex flex-wrap'>
      <div className="texts flex">
        <h1> <Link href="/">Home</Link></h1>
        <h1> <Link href="/product">Products</Link> </h1>
        <h1><Link href="/about">About</Link></h1>
      </div>
      <div className="images">
        <h1>comfy</h1>
      </div>
      <div className="icon">
        <Image src={iconCarzine} alt=''/>
      </div>
      </div>
      {pathname == "/" && <div className='divPathHome container'>
        <h1>Rest, Relax, Unwind</h1>
        <p>Embrace your choices - we do</p>
        <button>SHOW NOW</button>
        </div>}
    </header>
  )
}

export default Header