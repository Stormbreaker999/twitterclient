import React from "react";
import { BiMessage } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoHome, IoNotificationsOutline, IoPerson } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
interface TwitterSidebarButton{
    title:string;
    icon:React.ReactNode;
  }
  
  const SidebarMenu:TwitterSidebarButton[]=[
    {
      title:'Home',
      icon:<IoHome/>
    },
    {
      title:'Explore',
      icon:<FaHashtag/>
    },
    {
      title:'Notifications',
      icon:<IoNotificationsOutline/>
    },
    {
      title:'Messages',
      icon:<BiMessage/>
    },
    
    {
      title:'Communities',
      icon:<MdPeopleAlt/>
    },
    {
      title:'Profile',
      icon:<IoPerson/>
    },
    {
      title:'More',
      icon:<CiCircleMore/>
    },
  ]

function SideMenu(){
    return(
        <>
            {SidebarMenu.map(item=><li key={item.title} 
            className="flex flex-row justify-start items-center gap-4 w-fit 
            hover:bg-gray-800 px-4 py-3 rounded-full cursor-pointer">
            {item.icon}{item.title}</li>)}
        </>
    )
}

function Sidebar() {
  return (
    <div className="mt-3 text-2xl font-medium ">
        <ul className="list-none">
        <SideMenu/>
        </ul>
    </div>
  )
}

export default Sidebar