"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaCartPlus, FaUser } from "react-icons/fa";
import Logo from "./Logo";

const HeaderNavLinks = [
    {name:"Home", link:"/"},
    {name:"Shop", link:"/shop"},
    {name:"OnSale", link:"/onsale"},
    {name:"New Arrivals", link:"/newarrivals"},
    {name: "Brands", link:"/brands"}];

export default function Header(){
    const [TopBarHidden, setTopBarHidden] = useState(true);
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();
    return (
        <section className="sticky top-0 bg-[backdrop-filter] backdrop-blur-sm z-50">
            {/* -------- Top Header -------- */}
            {TopBarHidden && <div className='text-center relative py-1 border-b border-neutral-800'>
            <span className='font-thin text-neutral-400'>Sign up and get 20% off in first order <Link className="underline text-white" href='/signup'>Sign Up</Link></span>
            <h6 onClick={()=>{setTopBarHidden(false)}} className='absolute top-1 right-3 cursor-pointer'>X</h6>
            </div>}
            {/* -------- Header -------- */}
            <div className="flex items-center justify-between py-4 border-b border-neutral-800 px-6 lg:px-20 gap-8">
            <Logo />

            <ul className="hidden gap-6 lg:flex">
                {HeaderNavLinks.map((navlink, index)=>{
                    return (
                        <Link className={pathname === navlink.link ? 'border-b border-white' : 'text-neutral-600 hover:text-neutral-500'}
                            key={index} 
                            href={navlink.link}>
                            {navlink.name}
                        </Link>
                    )
                })}
            </ul>
            <input className="lg:block md:block hidden grow rounded-lg h-9 px-4 bg-neutral-800 border border-neutral-700"
                type="text" 
                placeholder="Search here..."/>
                <div className="flex items-center gap-4">
                    <FaCartPlus className="cursor-pointer" size={24} />
                    <FaUser className="cursor-pointer" size={24}/>
                    <FaBars onClick={()=>{setMenu(!menu)}} className="cursor-pointer lg:hidden" size={24}/>
                </div>
            </div>
            <div>
            {menu && <ul className="flex flex-col lg:hidden">
            <input className="lg:hidden md:hidden m-4 block grow rounded-lg h-9 px-4 bg-neutral-900 border border-neutral-800"
                type="text" 
                placeholder="Search here..."/>
                {HeaderNavLinks.map((navlink, index)=>{
                    return (
                        <Link className={pathname === navlink.link ? 'bg-neutral-800' : 'hover:text-white text-neutral-500'}
                            key={index} 
                            href={navlink.link}>
                            <li className={`cursor-pointer border-b border-neutral-800 hover:bg-neutral-900 py-2 text-center`}>{navlink.name}</li>
                        </Link>
                    )
                })}
            </ul>}
            </div>

        </section>
    )
}