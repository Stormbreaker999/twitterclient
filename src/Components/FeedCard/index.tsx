import React from 'react'
import Image from 'next/image'
import avatar from "../../../public/avatar.jpg"
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

function Card(){
    return(
        <div className='grid grid-cols-12 border-t border-gray-600 p-4 hover:bg-gray-800 transition-all '>
        <div className='col-span-1'>
        <Image src={avatar} alt="user_image" height={50} width={50} />
        </div>
        <div className='col-span-11 p-2 px-4'>
            <div className='flex gap-3'>
                <h5 className='font-semibold '>Avichal Dubey</h5>
                <span>17 Jun 2024</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo ab, aliquam, temporibus eligendi soluta deleniti alias qui vel veritatis sunt sint ipsa. Quis quisquam eius, id esse vitae quia.
            </p>
            <div className='flex justify-between mt-5 text-2xl w-[90%]'>
                <div><BiMessageRounded/></div>
                <div>
                    <FaRetweet/>
                </div>
                <div>
                    <AiOutlineHeart/>
                </div>
                <div>
                    <BiUpload/>
                </div>

            </div>
        </div>
    </div>
    )
}

function FeedCard() {
  return (
    <div className='h-screen overflow-y-scroll'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default FeedCard