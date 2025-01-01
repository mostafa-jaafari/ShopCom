"use client";
import { useState } from "react";

const HeaderNavLinks = [
    {name:"Shop", link:"/shop"},
    {name:"OnSale", link:"/onsale"},
    {name:"New Arrivals", link:"/newarrivals"},
    {name: "Brands", link:"/brands"}];
export default function Header(){
    const [IsTrue, setIsTrue] = useState(true);

    return (
        <section>
            {/* -------- Top Header -------- */}
            {IsTrue && <div className='text-center relative py-1 border-b border-neutral-800'>
            <span className='font-thin'>Test Offers Top Header</span>
            <h6 onClick={()=>{setIsTrue(false)}} className='absolute top-1 right-3 cursor-pointer'>X</h6>
            </div>}
            {/* -------- Header -------- */}
            <h1 className="text-4xl font-black">Shop
                <span className="text-yellow-500">Com</span>
            </h1>

        </section>
    )
}