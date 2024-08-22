import Image from 'next/image'
import React from 'react'
import { useCurrentUser } from '../../hooks/user'

function Badge({user}:any) {
    // console.log(user);
  return (<>
    {user && <div className='absolute hidden sm:flex bottom-5 gap-2 items-center bg-slate-800 px-1 sm:px-3 py-2 rounded-full '>
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
        
    </div>}
    
    </>
  )
}

export default Badge