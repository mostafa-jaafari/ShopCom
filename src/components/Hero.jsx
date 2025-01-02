"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Hero_Data } from './DataTest';
import { Categories_Links } from './DataTest';


export default function Hero() {
  const [selected_Categorie, setSelectedProducts] = useState('T-shirts');
  const Filtred_Products_Categorie = Hero_Data.filter(Filtred_Pro => Filtred_Pro.name === selected_Categorie);
  return (
    <section className='mt-8'>
      <div className='flex flex-col text-center items-center mb-4 justify-center gap-2'>
        <h1 className='text-4xl font-black uppercase'>
          Man clothing collection
        </h1>
        <p>
        A trending design and modern designs is available now
        </p>
      </div>
      <div className='w-full lg:px-20 px-6 flex gap-2 justify-center'>
        {Categories_Links.map((Btn, index) => {
          return (
            <button 
            onClick={()=>{setSelectedProducts(Btn)}}
            className={`px-4 py-1 rounded-lg
            ${Btn === selected_Categorie ? 'bg-neutral-900' : 'border border-neutral-900'}`}
            key={index}>{Btn}</button>
          )
        })}
      </div>

      <div className='w-full flex flex-wrap justify-center lg:justify-between gap-4 px-6 lg:px-20 mt-8'>
        {Filtred_Products_Categorie.map((product, index) => {
          return (
            <div 
            className='w-[280px] lg:w-[270px]'
            key={index}>
              <div className='w-full h-[300px] overflow-hidden rounded-lg relative'>
                <Image alt='T-shirt ShopCom' src={product.image} fill objectFit='cover'/>
              </div>
              <div className='p-2'>
                <h1 className='text-2xl'>{product.title}</h1>
                <p className='text-neutral-600'>{product.description}</p>
                <ins className='text-xl'>{product.price}</ins>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
