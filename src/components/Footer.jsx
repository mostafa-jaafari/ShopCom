import Link from "next/link";
import Logo from "./Logo";
import { Categories_Links } from "./DataTest";

export default function Footer() {
  return (
    <section className="w-full mt-14 border-t border-neutral-900">
      <div className="w-full grid gap-4 lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 lg:px-20 px-6">
        <div className="w-full flex flex-col gap-4 my-4">
          <Logo />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Cumque iure et animi repellendus consequatur 
            </p>
            <div className="w-full h-10 flex gap-2 items-center">
              <input 
              className="h-full w-full px-4 rounded-lg bg-neutral-900 border border-neutral-800"
              type="email" placeholder="Your Email"/>
              <button 
              className="px-8 h-full rounded-lg bg-white text-black"
              >Submit</button>
            </div>
        </div>

        <div className="w-full flex justify-between my-4 lg:px-20 px-6">
          <ul className="flex flex-col gap-2">
            <h2 className="font-black text-xl">Products</h2>
            {Categories_Links.map((navi, index)=>{
              return (
                <Link key={index} className="text-neutral-600" href='/'>{navi}</Link>
              )
            })}
          </ul>

          <ul className="flex flex-col gap-2">
            <h2 className="font-black text-xl">Products</h2>
            {Categories_Links.map((navi, index)=>{
              return (
                <Link key={index} className="text-neutral-600" href='/'>{navi}</Link>
              )
            })}
          </ul>

          <ul className="flex flex-col gap-2">
            <h2 className="font-black text-xl">Products</h2>
            {Categories_Links.map((navi, index)=>{
              return (
                <Link key={index} className="text-neutral-600" href='/'>{navi}</Link>
              )
            })}
          </ul>

        </div>
      </div>
        <div className="w-full border-t border-neutral-900 py-2 flex justify-center items-center">
          &copy; All Rights Reserved By <Logo />
        </div>
    </section>
  )
}
