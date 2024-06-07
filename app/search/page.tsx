"use client";
import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/useDebounce';
import axios from 'axios';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchPage = () => {
    const [notices,setNotices] = useState([])
  const [search,setSearch] = useState<string>("")
  const [loading , setLoading] = useState(false)
  const router = useRouter()
  const debouncedSearch = useDebounce(search , 500)
  useEffect(() => {
    // search the api

    async function fetchData() {
        setLoading(true) 
        await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${debouncedSearch}`).then((res) => {
            setNotices(res.data?.data)
            
            setLoading(false)
          })
        }
    
        if(debouncedSearch) fetchData()
  },[debouncedSearch])
  const clearInput = () => {
    setNotices([]);
    setSearch("");
   };
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-2 px-2'>
        <div className='w-full md:w-auto relative'>
            <Input placeholder='Search...' className='w-full md:w-[260px] lg:w-[500px] focus:!ring-0' value={search} onChange={(e) => setSearch(e.target.value)}  />
            {
                search.length == 0 ? (
                    <Search className='absolute top-2 right-2 ' size={20} />

                ) : (
                    <X className='absolute top-2 right-2 ' size={20} onClick={() => clearInput()} />

                )
            }
        </div>
        <div className='overflow-y-auto'>

   
        <div className='dark:bg-[#d7d7d7]  bg-black w-full md:w-[260px] lg:w-[500px] max-h-[300px] overflow-y-scroll rounded-md flex items-start  flex-col gap-4'>
            {
                notices.map((anime : any) => (
                <div className='flex justify-center items-center p-2 gap-2 cursor-pointer' key={anime.id} onClick={() =>router.push(`/anime/${anime.id}`)}>
                <Image src={`${anime?.attributes?.posterImage?.original}`} className='object-cover rounded-sm' width={30} height={60} alt='' />
                <span className='dark:text-black text-white font-bold' >{anime?.attributes?.titles?.en || anime?.attributes?.titles.en_jp}</span>
                </div>
                ))
            }
        
        </div>
        </div>
    </div>
  )
}

export default SearchPage