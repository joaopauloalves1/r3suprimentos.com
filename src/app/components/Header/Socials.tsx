import React from "react";
import { FiInstagram, FiYoutube, FiLinkedin  } from "react-icons/fi";

import { PiLinkedinLogoLight, PiInstagramLogoLight, PiYoutubeLogoLight   } from "react-icons/pi";


import { Button } from "src/components/ui/button";


const Socials = () => {
    return (
        <div className="flex gap-1 mr-4 items-center max-md:hidden">
            <a href="https://br.linkedin.com/company/r3suprimentos" target="_blank" className="border border-white rounded-full p-1 hover:bg-slate-700"><PiLinkedinLogoLight className="w-6 h-6 text-white"/></a>
            <a href="https://www.instagram.com/r3suprimentos/" target="_blank" className="border border-white rounded-full p-1 hover:bg-slate-700"><PiInstagramLogoLight className="w-6 h-6 text-white"/></a>
            <a href="https://www.youtube.com/channel/UCGLoQx8Q6vRO5p9TDo83tdw" target="_blank" className="border border-white rounded-full p-1 hover:bg-slate-700"><PiYoutubeLogoLight className="w-6 h-6 text-white"/></a>    
            
            <a href="https://www.r3suprimentos.com.br/" className="pl-4 text-white" target="_blank"><Button variant={"outline"}>ACESSE A R3</Button></a>
        </div>
    )
}

export default Socials