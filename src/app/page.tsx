'use client';
import Image from "next/image";
import { BiHomeCircle } from "react-icons/bi";
import { FaRegImage, FaTwitter } from "react-icons/fa";
import Sidebar from "../Components/Sidebar";
import FeedCard from "@/Components/FeedCard";
import { useCurrentUser } from "../../hooks/user";
import TwitterLayout from "@/Components/Layout/TwitterLayout";
import { useCreateTweet, useGetAllTweets } from "../../hooks/tweet";
import { useCallback, useEffect, useRef, useState } from "react";
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
          <textarea value={content} onChange={(e)=>setContent(e.target.value)} id='textarea'  className='border-b border-slate-100 w-full bg-transparent text-xl px-3' placeholder="What's Happening" rows={4}></textarea>
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
  const {tweets=[
    {
      "id": "cm7ab161y000035bze7mm4mmg",
      "content": "Hey there",
      "imageURL": "",
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2025-02-18T09:51:18.501Z",
      "updatedAt": "2025-02-18T09:51:18.501Z"
    },
    {
      "id": "cm34ktcp10000rqfv3d8uggwj",
      "content": "Revisiting Twitter Project",
      "imageURL": "",
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-11-05T14:59:43.400Z",
      "updatedAt": "2024-11-05T14:59:43.400Z"
    },
    {
      "id": "cm1rjrwgc00004wicbyza4d0j",
      "content": "😍",
      "imageURL": "http://res.cloudinary.com/dufzvvly6/image/upload/v1727854172/images/cfkx6ft8ifqnw9hs1lpo.jpg",
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-10-02T07:29:53.454Z",
      "updatedAt": "2024-10-02T07:29:53.454Z"
    },
    {
      "id": "cm1rhnfz90000s2gs8pbkc70g",
      "content": "Wednesday Wednesday\n",
      "imageURL": "",
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-10-02T06:30:26.403Z",
      "updatedAt": "2024-10-02T06:30:26.403Z"
    },
    {
      "id": "cm1dajti00000blu33hr46jk7",
      "content": "Hi creating it on 22 September",
      "imageURL": "",
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-09-22T08:02:53.515Z",
      "updatedAt": "2024-09-22T08:02:53.515Z"
    },
    {
      "id": "cm10a6obl00008dqwlzab1o0n",
      "content": "Is this the place",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-09-13T05:31:39.871Z",
      "updatedAt": "2024-09-13T05:31:39.871Z"
    },
    {
      "id": "cm0m940tt0000rqg7x1z4aw8p",
      "content": "Here comes Tuesday",
      "imageURL": "",
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-09-03T09:52:50.226Z",
      "updatedAt": "2024-09-03T09:52:50.226Z"
    },
    {
      "id": "cm0hqrz8m0000q5zqb39kbps9",
      "content": "How is the Saturday going",
      "imageURL": "",
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-08-31T06:08:30.283Z",
      "updatedAt": "2024-08-31T06:08:30.283Z"
    },
    {
      "id": "cm0gcqlkp0006y4txhmbep3x2",
      "content": "I am here",
      "imageURL": "",
      "authorId": "cm0gcq4py0005y4txn39f7zv7",
      "createdAt": "2024-08-30T06:47:45.119Z",
      "updatedAt": "2024-08-30T06:47:45.119Z"
    },
    {
      "id": "cm0gchagc0004y4tx6j1m1gw0",
      "content": "what's going on \n",
      "imageURL": "",
      "authorId": "cm0gcgdh60003y4txvoi42ci4",
      "createdAt": "2024-08-30T06:40:30.802Z",
      "updatedAt": "2024-08-30T06:40:30.802Z"
    },
    {
      "id": "cm0gbcbix0002y4txl6zm81e4",
      "content": "",
      "imageURL": "http://res.cloudinary.com/dufzvvly6/image/upload/v1724998098/images/fhutdj1lwwt4my4h9dxl.png",
      "authorId": "cm0gb9bq70000y4tx4mc0rg9z",
      "createdAt": "2024-08-30T06:08:39.297Z",
      "updatedAt": "2024-08-30T06:08:39.297Z"
    },
    {
      "id": "cm0gb9u5c0001y4tx8wh24tao",
      "content": "hellooooo avi😍",
      "imageURL": "",
      "authorId": "cm0gb9bq70000y4tx4mc0rg9z",
      "createdAt": "2024-08-30T06:06:43.461Z",
      "updatedAt": "2024-08-30T06:06:43.461Z"
    },
    {
      "id": "cm0fjyxr00000551m0l9s6cxa",
      "content": "Feeling a little better now",
      "imageURL": "",
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-08-29T17:22:25.281Z",
      "updatedAt": "2024-08-29T17:22:25.281Z"
    },
    {
      "id": "cm0e3q04p00003gkuls663x0w",
      "content": "That's my birdieeeeee..........",
      "imageURL": "http://res.cloudinary.com/dufzvvly6/image/upload/v1724864371/images/fdnag63saisqjhe4wmm6.png",
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-28T16:59:48.434Z",
      "updatedAt": "2024-08-28T16:59:48.434Z"
    },
    {
      "id": "cm0aux3fc00004psthuxcfuw7",
      "content": "How's the josh",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-26T10:30:04.227Z",
      "updatedAt": "2024-08-26T10:30:04.227Z"
    },
    {
      "id": "cm05bqofn0000j4wlj190xq4u",
      "content": "How is the redis working",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-22T13:34:21.317Z",
      "updatedAt": "2024-08-22T13:34:21.317Z"
    },
    {
      "id": "clzsie2u1000041du6n1y4ahi",
      "content": "How's it",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-13T14:19:30.589Z",
      "updatedAt": "2024-08-13T14:19:30.589Z"
    },
    {
      "id": "clzh41smp0003ngfibdop0nrv",
      "content": "hey amar bro how r u ",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-05T14:52:34.858Z",
      "updatedAt": "2024-08-05T14:52:34.858Z"
    },
    {
      "id": "clzh3vydi0002ngfipudvjcib",
      "content": "",
      "imageURL": "http://res.cloudinary.com/dufzvvly6/image/upload/v1722869277/images/clli1xnhdjg3gkwzdoxr.jpg",
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-05T14:48:02.307Z",
      "updatedAt": "2024-08-05T14:48:02.307Z"
    },
    {
      "id": "clzh3r5a20001ngfilps9jw0e",
      "content": "",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-05T14:44:18.170Z",
      "updatedAt": "2024-08-05T14:44:18.170Z"
    },
    {
      "id": "clzh3of770000ngfiv0r1g2lz",
      "content": "",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-05T14:42:09.283Z",
      "updatedAt": "2024-08-05T14:42:09.283Z"
    },
    {
      "id": "clzh336a30000q87wwgm8fk0k",
      "content": "Doing alright. Refactoring Server code 05-08-2024",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-08-05T14:25:39.596Z",
      "updatedAt": "2024-08-05T14:25:39.596Z"
    },
    {
      "id": "clzh25ypm0000fj9219og2hu6",
      "content": "How's the josh 05-08-2024",
      "imageURL": null,
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-08-05T13:59:50.128Z",
      "updatedAt": "2024-08-05T13:59:50.128Z"
    },
    {
      "id": "clzffilnh0000guexdrvg0a05",
      "content": "This is an image tweet",
      "imageURL": "http://res.cloudinary.com/dufzvvly6/image/upload/v1722767870/images/ve21ayi34ze4vky2ddmc.jpg",
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-08-04T10:38:02.363Z",
      "updatedAt": "2024-08-04T10:38:02.363Z"
    },
    {
      "id": "clzbc0qa50000g7l0zavzigef",
      "content": "What is this",
      "imageURL": null,
      "authorId": "clyl6cgcx00009yiiks7hkbwu",
      "createdAt": "2024-08-01T13:49:05.164Z",
      "updatedAt": "2024-08-01T13:49:05.164Z"
    },
    {
      "id": "clz6t6zn80001me8dthmp0t5t",
      "content": "This",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-07-29T09:50:59.795Z",
      "updatedAt": "2024-07-29T09:50:59.795Z"
    },
    {
      "id": "clz6t3yrq0000me8dxum04lrj",
      "content": "How are you",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-07-29T09:48:38.677Z",
      "updatedAt": "2024-07-29T09:48:38.677Z"
    },
    {
      "id": "clz59v6u8000089kkhzmnwc7b",
      "content": "How's the josh? Fixed Dependency of useCallback and usestate",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-07-28T08:02:10.302Z",
      "updatedAt": "2024-07-28T08:02:10.302Z"
    },
    {
      "id": "clz2rsgh80000gcevmfqkajrq",
      "content": "Here Writing my first tweet on the platform using Apollo Server",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-07-26T14:00:37.419Z",
      "updatedAt": "2024-07-26T14:00:37.419Z"
    },
    {
      "id": "clyx1nla7000010jjdcay2wl6",
      "content": "Here I am",
      "imageURL": null,
      "authorId": "clyvanyar000011wp48d3bwyj",
      "createdAt": "2024-07-22T13:50:09.536Z",
      "updatedAt": "2024-07-22T13:50:09.536Z"
    }
  ]}=useGetAllTweets();
  
  return (
    <div><TwitterLayout>
      <TweetBox user={user}/>
      <FeedCard user={user} tweets={tweets}/></TwitterLayout></div>
  );
}
