import { PosterUrl } from '@/constant/imgurl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'


interface SliderCardProps {
  id : number;
  title : string;
  poster : string;
  date : string;
}

const SliderCard : React.FC<SliderCardProps> = ({date,id,poster,title}) => {
  const router = useRouter();
  return (
    <div className='flex flex-col justify-center items-center w-[100px] h-[180px]  gap-2 md:w-[175px] md:h-[300px] cursor-pointer ' onClick={ () => router.push(`/anime/${id}`)}>
      <div className='h-full w-full'>
        <div className='h-full w-full'>
          <Image src={`${poster}`} width={1000} height={1000} className='w-full h-full object-cover rounded-lg' alt={title} />
        </div>
      </div>
      <div>
        <h2 className='text-md line-clamp-1 font-semibold text-black dark:text-white'>{title}</h2>
      </div>
    </div>
  )
}

export default SliderCard 