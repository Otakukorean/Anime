"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay , Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { getTrending } from '@/query/query';
import { Button } from './ui/button';
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from 'next/navigation';

const Hero = () => {
  const {data,isLoading,isError} = useQuery({queryKey : ['hero'] , queryFn : () => getTrending()})
  if(isError) {
    console.log(isError);
    
  }
  const router = useRouter()
  return (
    <Swiper slidesPerView={1} pagination={{
        clickable : true
    }} 
    navigation={true} modules={[Pagination,Autoplay,Navigation]}
    autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
    >
      {isLoading ? (
        <div>
                <Skeleton className="w-full h-[30vh] md:h-[50vh] lg:h-[75vh] rounded-xl" />

        </div>
      ) : (
        <>
              {data?.data?.map((anime : any) => (
            <SwiperSlide key={anime.id}>
            <div className='w-full rounded-b-lg h-[30vh] md:h-[50vh] lg:h-[75vh] p-4'
             style={{'background' : `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0,0.5)),url(${anime.attributes.coverImage.original}) center center/cover  `}}>
                <div className='flex justify-center items-center w-full h-full flex-col gap-6 text-white'>
                    <h1 className='text-xl md:text-[2rem] lg:text-[4rem] font-bold'>{anime.attributes.titles.en|| anime.attributes.titles.en_jp}</h1>
                    <p className='line-clamp-3 max-w-2xl  text-sm font-mono  leading-5	 '>Story: {anime.attributes.description}</p>
                    <Button 
                    onClick={() => router.push(`/anime/${anime.id}`)}
                    className='text-lg font-bold text-white bg-[#bd00ff] hover:bg-[#bd00ff]/70'>More Details</Button>
                </div>

              </div>
        </SwiperSlide>
      ))}
        </>
      )}
  
    
 
    </Swiper>
  )
}

export default Hero