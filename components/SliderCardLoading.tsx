import React from 'react'
import { Skeleton } from './ui/skeleton'

const SliderCardLoading = () => {
  return (
    <>
    <div className='hidden md:flex w-full h-full  gap-4'>
            {
                [...Array(10)].map((elementInArray, index) => ( 
                    <Skeleton className='w-[100px] h-[180px]  gap-2 md:w-[175px] md:h-[300px]' key={index}  />
                ))
            }
       

       
    </div>
    <div className='flex md:hidden w-full h-full  gap-4'>
            {
                [...Array(4)].map((elementInArray, index) => ( 
                    <Skeleton className='w-[100px] h-[180px]  gap-2 md:w-[175px] md:h-[300px]' key={index}  />
                ))
            }
       

       
    </div>
    </>
  )
}

export default SliderCardLoading