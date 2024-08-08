import { Button } from "@/components/ui/button";
import Background from "./Background";
import Link from "next/link";

const SectionTree = () => {
    return (
        <section>
            <div>
                <Background></Background>
            </div>
            <div className="flex items-center min-h-screen justify-center">
                <div className="flex flex-col w-1/2 text-white max-md:w-10/12">
                    <h2 className="pb-6 font-normal text-2xl  max-md:text-3xl" data-aos="fade-right">
                        NOSSO DNA É EVIDENTE:<br />
                        <span className="font-bold text-4xl text-green-text">LOGÍSTICA</span>
                    </h2>
                    <p className="pb-2 text-sm max-md:text-xs leading-relaxed" data-aos="fade-left" >
                        
                        Nossa infraestrutura inclui um espaço de armazenamento superior a 2.000 m2, uma loja
                        fisica em Goiânia (matriz) e uma filial em Rio Verde, 
                        Contamos com um portfólio de mais de 1500 produtos, todos disponíveis em nosso site e e-commerce.
                    </p>
                    {/* <p className="pb-2 text-sm max-md:text-xs" data-aos="fade-left" data-aos-delay="500">
                        Somos especializados no fornecimento de Suprimentos e atuamos em todo Brasil.
                    </p>
                    <p className="pb-2 text-sm max-md:text-xs" data-aos="fade-left" data-aos-delay="700">
                        Faça o seu contato agora mesmo, um profissional de nosso time comercial vai te atender prontamente.
                    </p> */}
                    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="500">
                        <Link href="/contato"><Button className=" bg-green-text text-white mt-16">SOLICITAR CONTATO</Button></Link>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTree;