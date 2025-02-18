'use client';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast'
const queryClient=new QueryClient();
function Mainpage({children}: Readonly<{
    children: React.ReactNode;
  }>) {
    
  return (
    <div>
        
        <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="1057074883889-j1d1lkdsmoci2nth47hhbnirk2t03mt1.apps.googleusercontent.com">
        {children}
        <Toaster/>
        <ReactQueryDevtools/> 
        </GoogleOAuthProvider>
        </QueryClientProvider>
    </div>
  )
}

export default Mainpage