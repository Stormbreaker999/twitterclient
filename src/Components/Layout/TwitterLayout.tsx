'use client';
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import Sidebar from "../Sidebar";
import FeedCard from "../FeedCard";
import AuthenticationComponent from "../Authentication";
import Badge from "../Badge";
import { useCurrentUser } from '../../../hooks/user';
import { BsTwitter } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

interface TwitterLayoutProps {
    children:React.ReactNode
}

const TwitterLayout:React.FC<TwitterLayoutProps>=({children}:TwitterLayoutProps)=> {
    const {user} =useCurrentUser();
  return (
    <div>
        <div className="grid grid-cols-12 h-screen w-screen sm:px-24">
        <div className=" col-span-1 sm:col-span-3 flex sm:justify-end relative sm:pr-4 mr-8 ">
        <div className=" flex flex-col justify-start pt-2 pr-2 mr-2 ">
          <div className="text-3xl sm:text-4xl h-fit w-fit cursor-pointer hover:bg-gray-800 p-1 sm:ml-3 rounded-full transition-all"><FaTwitter/></div>
          <Sidebar/>
          <button className="bg-[#1D9BF0] hidden sm:block py-2 p-4 font-semibold text-2xl rounded-full 
          hover:bg-[#1A8CD8] transition-all w-full mt-4">Tweet</button>
          <button className="bg-[#1D9BF0] sm:hidden block p-2 font-semibold text-2xl ml-1 rounded-full 
          hover:bg-[#1A8CD8] transition-all w-full mt-4"><BsTwitter/></button>
          <Badge user={user}/>
        </div>
        </div>
        <div className="col-span-9 overflow-y-auto md:col-span-5 border-l-2 border-r-2 border-slate-500">
            {children}
        </div>
        <div className="col-span-0 md:col-span-4 p-5 ">
          {!user ?
          <AuthenticationComponent />
            :
            <div className='border p-5 bg-slate-700 rounded-lg'>
              <h1 className='text-2xl ml-2'>Users You May Know:</h1>
          {user?.recommendedUsers?.map(el=>{
            return <div className='flex items-center gap-3'
             key={el?.id}>
              {el?.profileImageURL && <Image src={el.profileImageURL} alt='rec-user-image' height={60} width={60} className='rounded-full mt-5'/>}
              <div >
              <div className='text-lg'>{el?.firstName}{el?.lastName}</div>
              <Link href={`/${el?.id}`} className='bg-white text-black text-sm px-5 py-1 rounded-lg w-full'>View</Link>
                </div>
              </div>
          })}
          </div>}
        </div>
      
    </div>
    </div>
  )
}

export default TwitterLayout;