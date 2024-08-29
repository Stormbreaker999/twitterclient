'use client';
import Image from "next/image";
import { BiHomeCircle } from "react-icons/bi";
import { FaRegImage, FaTwitter } from "react-icons/fa";
import Sidebar from "../Components/Sidebar";
import FeedCard from "@/Components/FeedCard";
import { useCurrentUser } from "../../hooks/user";
import TwitterLayout from "@/Components/Layout/TwitterLayout";
import { useCreateTweet, useGetAllTweets } from "../../hooks/tweet";
import { useCallback, useEffect, useState } from "react";
import avatar from "../../public/avatar.jpg"
import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";

import toast from "react-hot-toast";
interface CloudinaryUploadWidgetInfo {
  access_mode: 'public' | 'authenticated';
  api_key: string;
  asset_id: string;
  batchId: string;
  bytes: number;
  context?: Record<string, Record<string, string>>;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  hook_execution?: Record<string, unknown>;
  id: string;
  info?: Record<string, unknown>;
  original_filename: string;
  pages: number;
  path: string;
  placeholder: boolean;
  public_id: string;
  resource_type: 'image' | 'raw' | 'video' | 'auto';
  secure_url: string;
  signature: string;
  tags: string[];
  thumbnail_url: string;
  type: 'upload' | 'private' | 'authenticated';
  url: string;
  version: number;
  width: number;
  [key: string]: unknown;
}
var def_widgetinfo:CloudinaryUploadWidgetInfo={
  access_mode:'public',
  api_key: "",
  asset_id: "",
  batchId: "",
  bytes: 0,
  created_at: "",
  etag: "",
  folder: "",
  format: "",
  height: 0,
  id: "",
  original_filename: "",
  pages: 0,
  path: "",
  placeholder: true,
  public_id: "",
  resource_type: 'image' ,
  secure_url: "",
  signature: "",
  tags: [""],
  thumbnail_url: "",
  type: 'upload',
  url: "",
  version: 0,
  width: 0,
  key: [""],

};
function TweetBox({user}:any){
  const {mutate}=useCreateTweet();

  const [url,setUrl]=useState("");
  
  const [content, setContent] = useState("");
  const handleCreateTweet=useCallback(()=>{
      if(!url && !content) {
        return toast.error("Please enter some text or image");
      }
      mutate({
          content,
          imageURL:url
      })
      setContent("");
  },[content,url,mutate])

  

  return(
      
      <div className='grid grid-cols-12 border-t border-gray-600 p-4 hover:bg-gray-800 transition-all gap-2'>
      <div className='col-span-1'>
      <Image className='rounded-full' src={user?user.profileImageURL:avatar} alt="user_image" height={50} width={50} />
      </div> 
      <div className='col-span-11'>
          <textarea value={content} onChange={(e)=>setContent(e.target.value)}  id='textarea'  className='border-b border-slate-100 w-full bg-transparent text-xl px-3' placeholder="What's Happening" rows={4}></textarea>
          <div className='flex mt-2 justify-between'>
              {/* <FaRegImage className='text-xl cursor-pointer hover:bg-slate-500 rounded-full' onClick={handleSelectImage}/>
               */}
               <CldUploadWidget uploadPreset="twitter_cloudinary" 
               options={{
                
                resourceType:'image',
                clientAllowedFormats:['jpg','jpedg', 'png', 'gif']
               }} onSuccess={({info})=>{
                 const inf=info as CloudinaryUploadWidgetInfo;
                 setUrl(inf.url);
               }}>
                {({ open}) => {
                    
                    
                    return (
                      <button className="button" onClick={async () => {
                        await open();
                        
                        
                        
                      }}>
                        <FaRegImage className="text-3xl p-1 hover:bg-slate-900 rounded-xl"/>
                      </button>
                    );
                  }}
                </CldUploadWidget>
              <button className="bg-[#1D9BF0] py-1 p-4 font-semibold text-xl rounded-full 
              hover:bg-[#1A8CD8] transition-all"
              onClick={handleCreateTweet}>Tweet</button>
          </div>
      </div>
      </div>
      
  )
}
export default function Home() {
  const {user} =useCurrentUser();
  const {tweets=[]}=useGetAllTweets();
  
  return (
    <div><TwitterLayout>
      <TweetBox user={user}/>
      <FeedCard user={user} tweets={tweets}/></TwitterLayout></div>
  );
}
