import { ReactNode, lazy } from "react";

// Icons Import 

import { Home } from "react-feather";
import { AiFillQuestionCircle, AiFillStar} from "react-icons/ai"
import {FaUserFriends , FaUser, FaHome, FaSadCry, FaProductHunt, FaBorderAll, FaAdversal } from "react-icons/fa"
import { MdOutlineCategory, MdPrivacyTip, MdProductionQuantityLimits } from "react-icons/md";
import {DiDatabase} from "react-icons/di"
import { FiMail } from "react-icons/fi";
import {CgUnavailable} from "react-icons/cg"
import {BsCode, BsInfoCircle} from "react-icons/bs"
import {AiOutlineTransaction ,AiFillSetting ,AiFillGift} from "react-icons/ai"
import { IoIosNotificationsOutline, IoIosPaper, } from "react-icons/io";
import { BiCategory, BiLockAlt } from "react-icons/bi";
import { RiCouponFill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { TfiLayoutSlider } from "react-icons/tfi";
import { RiEarthFill } from "react-icons/ri";

// Pages Import

import HomePage from "./Pages/Home/HomePage";
import PrivacyPage from "./Pages/Informaition/Privacy/PrivacyPage";
import AboutUsPage from "./Pages/Informaition/AboutUs/AboutUsPage";
import SocialMediaPage from "./Pages/SocialMedia/SocialMediaPage";
import SlidersPage from "./Pages/sliders/SlidersPage";
import ContactInfoPage from "./Pages/ContactInfo/ContactusPage";
import CountryPage from "./Pages/Country/CountryPage";


interface RoutesLinksType {
    name?: string,
    href?: string,
    element?: ReactNode,
    icon?: any,
    Viewelement?: ReactNode,
    Viewhref?: string
    children?: any
    // Hidden the route from the navigation sidebar
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [

    {
        name: "slider",
        icon: <TfiLayoutSlider   size={20} />,
        href: "/slider",
        element: <SlidersPage/>,
    },
    {
        name: "ContactInfo",
        
        icon: <FaMessage   size={20} />,
        href: "/contact",
        element: <ContactInfoPage/>,
    },
    {
        name: "country",
        
        icon: <RiEarthFill   size={20} />,
        href: "/",
        element: <CountryPage/>,
    }, 
    {
        name: "social_media",
        
        icon: <FiMail size={20} />,
        href: "/SocialMedia",
        element: <SocialMediaPage/>,
    },
    
    {
        name: "information",
        icon: <BsInfoCircle size={20} />,
        element: <></>,
        children :[
        {
        name: "privacy",
        icon: <MdPrivacyTip size={20} />,
        href: "/Information/privacy",
        element: <PrivacyPage/>
        },
        {
        name: "about_us",
        icon: <AiFillQuestionCircle size={20} />,
        href: "/Information/AboutUs",
        element: <AboutUsPage />
        },
      ],


      
    },
          // hidden 

    
]