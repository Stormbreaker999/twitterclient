import Image from 'next/image'
import React from 'react'
import { useCurrentUser } from '../../hooks/user'

function Badge({user}:any) {
    console.log(user);
  return (<>
    {user && <div className='absolute bottom-5 flex gap-2 items-center bg-slate-800 px-3 py-2 rounded-full '>
        {user && user.profileImageURL && <Image 
        className="rounded-full" 
        src={user?.profileImageURL} alt="User Image" height={50} width={50}/>}
        <div>
        <h3 className='text-xl'> {user.firstName} {user.lastName}</h3>
        </div>
    </div>}
    
    </>
  )
}

export default Badge