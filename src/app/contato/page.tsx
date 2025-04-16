
import Link from "next/link";
import { PiShoppingBagLight, PiWhatsappLogoLight, PiHandArrowUpLight, PiMailboxLight, PiBuildingOfficeLight } from "react-icons/pi";

const ContatoR3 = () => {
    return (
        <div className="w-2/3 m-auto my-28 border-b border-s-2-green-text">
            <div className="mb-2">
                <h2 className="font-semibold text-base text-green-text">Com qual áre da R3 Suprimentos você deseja falar?</h2>
            </div>
            <hr />
            <div className="flex items-center justify-center gap-2 pt-3 max-md:flex-col">
                <div className="flex flex-col items-center border border-s-2-black w-[300px] h-[500px] rounded-sm shadow-md">
                    <PiShoppingBagLight className="text-5xl mt-4" />
                    <h3 className="font-semibold mt-4">Comercial</h3>
                    <p className="font-medium mt-4">Televendas</p>
                    <p className="mt-2 text-sm text-center">Para compras por telefone, <br />
                        cotação de preços e dúvidas</p>
                    <p className="font-medium mt-4">(62) 3946-2100</p>
                    <p className="text-sm mt-4">Nos contate também pelo</p>
                    <a href="https://api.whatsapp.com/send/?phone=556239462100&text=Ol%C3%A1%2C+estava+navegando+pelo+site+e+gostaria+de+saber+sobre+seus+produtos+&type=phone_number&app_absent=0"
                     className="flex items-center gap-1 mt"> <PiWhatsappLogoLight className="text-2xl" /> <p className="text-sm font-semibold">WhatsApp</p> </a>
                </div>


                <div className="flex flex-col items-center border border-s-2-black w-[300px] h-[500px] rounded-sm shadow-md">
                    <PiHandArrowUpLight className="text-5xl mt-4" />
                    <h3 className="font-semibold mt-4">Sac</h3>
                    <a h-ref="/" className="font-medium mt-4 flex items-center gap-1"><PiMailboxLight />Enviar e-mail</a>
                    <a href="https://api.whatsapp.com/send/?phone=556239462100&text=Ol%C3%A1%2C+estava+navegando+pelo+site+e+gostaria+de+saber+sobre+seus+produtos+&type=phone_number&app_absent=0"
                     className="flex items-center gap-1 mt-4"> <PiWhatsappLogoLight className="text-2xl" /> <p className="text-sm font-semibold">WhatsApp</p> </a>
                    <p className="font-medium mt-4 border-b border-s-2-black pb-4">(62) 3946-2100</p>

                    {/* <h4 className="font-semibold mt-4">Ocorrências</h4>
                    <p className="font-normal text-sm mt-4">Para abertura ou consulta</p>
                    <Link href="/sac" className="text-sm text-green-text mt-4">Clique aqui</Link> */}
                </div>

                <div className="flex flex-col items-center border border-s-2-black w-[300px] h-[500px] rounded-sm shadow-md">
                    <PiBuildingOfficeLight className="text-5xl mt-4" />
                    <h3 className="font-semibold mt-4">Áreas Corporativas</h3>
                    <Link href="https://wa.me/5562996874704?text=Bem%20vindo%20ao%20Marketing%20R3%20Suprimentos" target="_blank" className="font-medium mt-4 flex items-center gap-1"><PiWhatsappLogoLight />Marketing</Link>
                    <Link href="https://www.r3suprimentos.com.br/seja-um-fornecedor" target="_blank" className="font-medium flex items-center gap-1 mt-4"> <PiMailboxLight />Quero ser um fornecedor</Link>
                    <Link href="https://wa.me/5562996874704?text=Bem%20vindo%20ao%20Marketing%20R3%20Suprimentos" target="_blank" className="font-medium mt-4 flex items-center gap-1 "><PiWhatsappLogoLight />Ouvidoria</Link>
                    <h4 className="text-sm mt-4 border-t border-s-2-black py-4 ">Trabalhe Conosco</h4>
                    <p className="text-xs text-center px-4">
                        Quer fazer parte da empresa pioneira em gestão e distribuição de suprimentos do Brasil? Verifique as vagas em aberto e caso se identifique, envie seu currículo!
                    </p>
                    <Link href="https://vagasr3.rhgestor.com.br/" className="text-sm text-green-text mt-4 flex items-center gap-1"><PiMailboxLight/>Envie seu Curriculo</Link>
                </div>
            </div>
            <div className="flex items-center justify-center mt-3">
                <small className="text-xs opacity-50 pb-7">Horário de atendimento: das 8h00 às 18h00, segunda a sexta-feira (exceto feriados).</small>
            </div>
        </div>
    )
}


export default ContatoR3;