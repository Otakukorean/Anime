import Image from 'next/image'
import React from 'react'
import {Search , HeartIcon} from 'lucide-react'
import { ModeToggle } from '@/components/ModeToggle'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router= useRouter()
  return (
    <div className='fixed w-full z-50'>
    <div className='w-full flex justify-between items-center py-2 px-4 bg-black'>
        <div onClick={() => router.push('/')} className='cursor-pointer'>
            <Image src={'/logo.svg'} height={120} width={120}  alt='logo' />
        </div>

        <div className='flex justify-center items-center gap-4'>
                <div>
                    <Search className='text-white cursor-pointer' onClick={() => router.push('/search')}  />  
                </div>
                <div>
                <HeartIcon className='text-white cursor-pointer' onClick={() => router.push('/favourite')}/>  

                </div>
                <div>
                    <ModeToggle />
                </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar