import React, { RefObject, useCallback, useRef, useState } from 'react'
import Image from 'next/image'

import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRegImage, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { useCurrentUser } from '../../../hooks/user'
import { Tweet } from '../../../gql/graphql'
import { useCreateTweet } from '../../../hooks/tweet'
import Link from 'next/link'
import { useQueryClient } from '@tanstack/react-query'
import { graphqlClient } from '../../../clients/api'
import { likeTweet } from '../../../graphql/mutation/tweet'

interface FeedCardProps {
    data:Tweet
}

const Card:React.FC<FeedCardProps>=(props)=>{
    const {data}=props;
    const queryClient=useQueryClient();
    const handleLike=async(id:string)=>{
        await graphqlClient.request(likeTweet, {id});
        queryClient.invalidateQueries({queryKey:['all-tweets']});

    }
    return(
        <div className='grid grid-cols-12 border-t border-gray-600 p-4 hover:bg-gray-800 transition-all '>
        <div className='col-span-1'>
        {data && data.author && data.author.profileImageURL && <Link href={`/${data.author?.id}`}><Image className='rounded-full cursor-pointer' src={data.author.profileImageURL||""} alt="user_image" height={50} width={50} /></Link>}
        </div>
        <div className='col-span-11 p-2 px-4'>
            <div className='flex gap-3'>
                <h5 className='font-semibold '><Link href={`/${data.author?.id}`}>{data.author?.firstName} {data.author?.lastName}</Link></h5>
                {/* <span>17 Jun 2024</span> */}
            </div>
            <p>
                {data.imageURL && <Image className='w-full py-2' src={data.imageURL} alt="tweet image" height={200} width={200}/>}
                {data.content}
            </p>
            <div className='flex justify-between mt-5 text-2xl w-[90%]'>
                <div><BiMessageRounded/></div>
                <div>
                    <FaRetweet/>
                </div>
                <div className='flex justify-between gap-2'>
                    <AiOutlineHeart className='cursor-pointer' onClick={()=>{
                        handleLike(data.id)}
                        
                    }/>
                    <div className='text-base'>{data.usersLiked?.length}</div>
                </div>
                <div>
                    <BiUpload/>
                </div>

            </div>
        </div>
    </div>
    )
}



function FeedCard({tweets}:any) {
    // console.log(tweets);
  return (
    <div className='h-screen'>
        
        {tweets?.map((tweet:any)=><Card key={tweet?.id} data={tweet}/>)}
        
    </div>
  )
}

export default FeedCard