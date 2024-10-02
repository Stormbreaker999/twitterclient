'use client';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useCurrentUser } from '../../hooks/user'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BiLogOutCircle } from 'react-icons/bi';
function Badge({user}:any) {
    // console.log(user);
    
    const [isBadge, setIsBadge]=useState(false);
  const handleBadgeClick=()=>{
    
    setIsBadge(!isBadge);
    
  }
  const handleLogout=()=>{
    window.localStorage.removeItem("__twitter_token");
    window.location.reload();
  }
  return (<>
    {user && <div className='absolute hidden sm:flex bottom-5 gap-2 items-center bg-slate-800 px-1 sm:px-3 py-2 rounded-full cursor-pointer' onClick={handleBadgeClick}>
        {user && user.profileImageURL && <Image 
        className="rounded-full" 
        src={user?.profileImageURL} alt="User Image" height={50} width={50}/>}
        <div className=''>
        <h3 className=' text-xl'> {user.firstName} {user.lastName}</h3>
        </div>
    </div>}
    {user && <div className='absolute sm:hidden bottom-5  items-center bg-slate-800 px-1 sm:px-3 py-2 rounded-full '>
        {user && user.profileImageURL && <Image 
        className="rounded-full" 
        src={user?.profileImageURL} alt="User Image" height={100} width={100}/>}
        
    </div>
    }
    
    <div className={`${isBadge==false?"hidden":""} absolute bottom-16 left-6 p-4`}>
      <div className='border bg-slate-500 text-white p-2 py-1 rounded-md text-lg cursor-pointer w-full font-bold flex gap-1' onClick={handleLogout}><BiLogOutCircle className='mt-1'/><span>Logout</span></div>
    </div>
    </>
  )
}

export default Badge