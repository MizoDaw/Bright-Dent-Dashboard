import { ReactNode, lazy } from "react";

// Icons Import 
import { AiFillQuestionCircle} from "react-icons/ai"
import { MdPrivacyTip } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import {BsInfoCircle} from "react-icons/bs"
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
import CategoryPage from "./Pages/category/CategoryPage";


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
        name: "category",
        icon: <BsInfoCircle   size={20} />,
        href: "/category",
        element: <CategoryPage/>,
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
      


      
    
          // hidden 

    
]