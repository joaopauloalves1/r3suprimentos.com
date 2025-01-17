


import Link from "next/link";
import React from "react";

import {  PiPhoneLight, PiMailboxLight, PiWhatsappLogoLight } from "react-icons/pi";


const SocialsFooter = () => {
    return (
        <div className="flex gap-2 mr-4 items-center max-md:hidden">
            <div className="text-slate-400">
                < PiPhoneLight className="w-4 h-4 "/>
                <PiWhatsappLogoLight className="w-4 h-4 "/>
            </div>
            <div className="flex flex-col text-slate-400">
                <small className="text-xs font-normal">Fale Conosco</small>
                <a href="https://api.whatsapp.com/send/?phone=556239462100&text=Ol%C3%A1%2C+estava+navegando+pelo+site+e+gostaria+de+saber+sobre+seus+produtos+&type=phone_number&app_absent=0"
                 className="text-xs font-semibold"> (62) 3946-2100</a>
            </div>
            <div className="pl-2">
                <Link href="/contact"><PiMailboxLight className="w-4 h-4 text-slate-400 hover:opacity-50" /></Link>
                
            </div>
            <div>
                <Link href="/contato"><small className="text-[10px] text-slate-400 hover:opacity-50">CONTATO</small></Link>
            </div>
        </div>
    )
}

export default SocialsFooter