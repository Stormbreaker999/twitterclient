import Link from "next/link";
import React, { useMemo } from "react";
import { BiMessage } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoHome, IoNotificationsOutline, IoPerson } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { useCurrentUser } from "../../hooks/user";
interface TwitterSidebarButton{
    title:string;
    icon:React.ReactNode;
    link:string;
  }
  
  

function Sidebar() {
  const {user}=useCurrentUser();
  const sidebarMenuItems:TwitterSidebarButton[]=useMemo(
    ()=>[
      {
        title:'Home',
        icon:<IoHome/>,
        link:'/'
      },
      {
        title:'Explore',
        icon:<FaHashtag/>,
        link:'/'
      },
      {
        title:'Notifications',
        icon:<IoNotificationsOutline/>,
        link:'/'
      },
      {
        title:'Messages',
        icon:<BiMessage/>,
        link:'/'
      },
      
      {
        title:'Communities',
        icon:<MdPeopleAlt/>,
        link:'/'
      },
      {
        title:'Profile',
        icon:<IoPerson/>,
        link:`/${user?.id}`
      },
      {
        title:'More',
        icon:<CiCircleMore/>,
        link:'/'
      },
    ],[user]
  )
  return (
    <div className="mt-3 text-2xl font-medium ">
        <ul className="list-none">
        {sidebarMenuItems.map(item=><li key={item.title} 
            >
              <Link className="flex flex-row justify-start items-center gap-4 w-fit 
            hover:bg-gray-800 px-2   sm:px-4 py-3 rounded-full cursor-pointer" href={item.link}>
            <span>{item.icon}</span><span className="hidden sm:inline">{item.title}</span></Link></li>)}
        </ul>
    </div>
  )
}

export default Sidebar