import Image from "next/image";
import { BiHomeCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import Sidebar from "../Components/Sidebar";
import FeedCard from "@/Components/FeedCard";
import AuthenticationComponent from "@/Components/Authentication";



export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-24">
        <div className=" col-span-3 flex flex-col justify-start pt-2 pr-2 mr-2">
          <div className="text-4xl h-fit w-fit cursor-pointer hover:bg-gray-800 p-1 ml-3 rounded-full transition-all"><FaTwitter/></div>
          <Sidebar/>
          <button className="bg-[#1D9BF0] py-2 p-4 font-semibold text-2xl rounded-full 
          hover:bg-[#1A8CD8] transition-all w-full mt-4">Tweet</button>
        </div>
        
        <div className="col-span-5 border-l-2 border-r-2 border-slate-500">
          <FeedCard/>
        </div>
        <div className="col-span-4 p-5 ">
          
          <AuthenticationComponent/>
        </div>
      </div>
    </div>
  );
}
