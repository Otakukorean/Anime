"use client";
import { Button } from '@/components/ui/button';
import { getById } from '@/query/query'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface PageProps {
    params : {id : string}
}
const cartLocalStorage = JSON.parse(localStorage.getItem("favourite") || [])

const AnimePage = ({params} : PageProps) => {
  const [cartList, setCartList] = useState<unknown>(cartLocalStorage)
  const [exist,SetExist] = useState(false)
    const {data,isError,isLoading} = useQuery({queryKey : ['anime'] ,   queryFn :() => getById(params.id)})
    useEffect(() => {
      localStorage.setItem("favourite", JSON.stringify(cartList))

    }, [cartList]) 
    useEffect(() => {
      const checkifExist = (id : string | any) => {
        const items =JSON.parse(localStorage.getItem("favourite") || [])
        if(items?.some((e : any) => e.id == id)){
          SetExist(true)
        }
        else {
          SetExist(false)

        }
        
      } 
      checkifExist(data?.data?.id)
    },[data,cartList])

    const removeFromfavouriteList = (id : any) => {
      const items =JSON.parse(localStorage.getItem("favourite") || [] )
      const filtered = items?.filter((item : any) => item.id !== id);
      setCartList((cartList : any) => cartList.filter((item : any) => item.id !== id))
      localStorage.setItem('favourite',JSON.stringify(filtered))
    }
    const addItems = (item : any) => {
      const items =JSON.parse(localStorage.getItem("favourite")!)
      setCartList((cartList: any)  => [...cartList,data?.data])
      items?.push(item);
    }
  return (
    <>
      {
        isLoading ? (
          <div className='w-full h-full flex justify-center items-center'>
            <Loader2 color='#bd00ff' className='animate-spin ' size={25} />

          </div>
        )  : (
          <div className='w-full  h-auto md:h-full mx-auto lg:pl-48 flex  pb-2'>
      
              <div className='flex flex-wrap gap-6 justify-center md:pl-12 lg:justify-normal items-center flex-1 px-2'>
    
     
              <div className=''>
               <Image className='w-[300px] h-[500px] rounded-md object-cover' src={data?.data?.attributes?.posterImage?.original} width={1000} height={1000} alt={data?.data?.attributes?.titles.en}  />
              </div>
              <div className='md:max-h-[500px] bg-[#212121] flex justify-between flex-col p-4 rounded-md text-white'>
                <div>
                  <div className='flex gap-1 items-start justify-center flex-col'>
                  <h1 className='text-2xl font-bold'>Name: {data?.data?.attributes?.titles?.en}</h1>
                  <p>Original name: {data?.data?.attributes?.titles?.ja_jp}</p>
        
                  </div>
                  <p>Start Date : {data?.data?.attributes?.startDate?.slice(0,4)}</p>
        
                </div>
                <div>
                  <h3 className='max-w-[950px] font-mono'>description :  {data?.data?.attributes?.description}</h3>
                </div>
                {
                 exist && <Button onClick={() => removeFromfavouriteList(data?.data?.id)} className='text-white font-bold bg-[#bd00ff] hover:bg-[#bd00ff]/70'>Remove from Favourite List</Button>

                }
                {
                 !exist && <Button onClick={() => addItems(data?.data)} className='text-white font-bold bg-[#bd00ff] hover:bg-[#bd00ff]/70'>Add to Favourite List</Button>

                }
              </div>
              </div>
            
          
         
        </div>
        )
      }
    </>
  
  )
}

export default AnimePage