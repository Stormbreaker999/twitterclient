'use client';
import React, { useCallback } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import toast from 'react-hot-toast';
import { graphqlClient } from '../../clients/api';
import { verifyUserGoogleTokenQuery } from '../../graphql/query/user';
function AuthenticationComponent() {
  const handleLoginWithGoogle=useCallback(async (cred:CredentialResponse)=>{
      const googleToken=cred.credential;
      if(!googleToken){
        return toast.error("Google token not found")
      }
      const data =await graphqlClient.request(verifyUserGoogleTokenQuery, {token:googleToken});
      const {verifyGoogleToken}=data;
      toast.success("Verified Succes");
      console.log(verifyGoogleToken);
      if(verifyGoogleToken){
        window.localStorage.setItem("__twitter_token",verifyGoogleToken);
      }
  },[])
  return (
    <div className='border p-5 bg-slate-700 rounded-lg'>
      <h1 className="text-2xl ml-2">New to Twitter</h1>
      <GoogleLogin onSuccess={handleLoginWithGoogle}/>
      
    </div>
  )
}

export default AuthenticationComponent