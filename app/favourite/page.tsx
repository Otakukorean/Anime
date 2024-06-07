"use client";
import HeaderTilte from '@/components/Header'
import SliderCard from '@/components/SliderCard';
import React, { useEffect, useState } from 'react'

const FavouritePage = () => {
    const [cartList, setCartList] = useState<unknown | any>([])
    useEffect(() => {
        const cartLocalStorage = JSON.parse(localStorage.getItem("favourite")!)
        setCartList(cartLocalStorage)
    },[]) 
  return (
    <div className='space-y-4'>
        <HeaderTilte label='Favourite' />
        <div className='flex justify-center items-center flex-wrap gap-2'>
            {
                cartList?.map((anime : any) => (
                    <SliderCard key={anime.id}  date={anime.startDate} id={anime.id} 
                    poster={anime.attributes.posterImage.original} title={anime.attributes.titles.en|| anime.attributes.titles.en_jp}  />
                ))
            }
        </div>
    </div>
  )
}

export default FavouritePage