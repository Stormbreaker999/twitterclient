'use client';

import React, { useCallback, useMemo } from 'react'
import TwitterLayout from '../../Components/Layout/TwitterLayout'
import { BsArrowLeftShort } from 'react-icons/bs'
import Image from 'next/image'
import { useCurrentUser, useGetUserById } from '../../../hooks/user'
import FeedCard from '@/Components/FeedCard';
import { Tweet } from '../../../gql/graphql';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { GetServerSideProps } from 'next';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { graphqlClient } from '../../../clients/api';
import { followUserMutation, unfollowUserMutation } from '../../../graphql/mutation/user';

function UserProfilePage() {
  // const queryClient=useQueryClient();
  // queryClient.invalidateQueries({queryKey:['user-by-id']})
  const router=usePathname().substring(1);

  const {userById}=useGetUserById({id:router});
  const user=userById;
  const {user:currentUser}=useCurrentUser();
  const queryClient=useQueryClient();
  const amIFollowing=useMemo(()=>{
      if(!user) return false;
      return (user.followers?.findIndex(el=>el?.id===currentUser?.id)??-1)>=0;
  },[user, currentUser, user?.followers])

  const handleFollow=async()=>{
      await graphqlClient.request(followUserMutation,{to:user?.id??""})
      await queryClient.invalidateQueries({queryKey:['user-by-id']})
  }
  const handleUnfollow=async()=>{
      await graphqlClient.request(unfollowUserMutation,{to:user?.id??""})
      await queryClient.invalidateQueries({queryKey:['user-by-id']})
  } 
  return (
    <div>
      <TwitterLayout>
      {user?
        <div >
          <nav className='flex items-center flex-row gap-3 py-3 px-3'><Link href={'/'} ><BsArrowLeftShort className='text-4xl '/></Link>
          <div>
            <h1 className='text-2xl font-bold'>{user?.firstName} {user?.lastName}</h1>
          
            <h1 className='text-md font-bold text-slate-500'>{`${user.tweets?.length}`} Tweets</h1>
          </div>
          </nav>
          <div className='p-4 border-b border-slate-800'>
            <Image src={user?.profileImageURL||""} alt="User Image" width={200} height={200} className='rounded-full'/>
            <h1 className='text-2xl font-bold mt-5'>{user?.firstName} {user?.lastName}</h1>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 mt-2 text-sm text-gray'>
                  <span>{user.followers?.length} Followers</span>
                  <span>{user.following?.length} Following</span>
                </div>
            {
              currentUser?.id!==user?.id &&
              <>
              {
                amIFollowing?
                <button className='bg-white text-black px-2 py-1 rounded-full text-sm' onClick={handleUnfollow}>Unfollow</button>:
                <button className='bg-white text-black px-2 py-1 rounded-full text-sm' onClick={handleFollow}>Follow</button>
              }
                </>
            }
            </div>
          </div>
          <div>
            {user?.tweets && <FeedCard tweets={user?.tweets} />}
          </div>
        </div>:<div>Error 404: User Not Found</div>}
      </TwitterLayout>
    </div>
  )
}


export default UserProfilePage