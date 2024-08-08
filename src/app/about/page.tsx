import Image from "next/image";
import { HiOutlineArrowUturnLeft, HiOutlineArrowLeft } from "react-icons/hi2";
import { PiInstagramLogoLight, PiLinkedinLogoLight, PiMailboxLight, PiPhoneCallLight } from "react-icons/pi";
import Header from "../components/Header";
import Logistc from "./logistic";


const About = () => {
    return (
        <>
            <div className="flex  max-md:flex-col-reverse bg-slate-100">
                <div className="h-screen flex-1" data-aos="fade-right" data-delay="500">
                    <Image
                        className="h-full w-full object-cover repeat-1"
                        width={1200}
                        height={0}
                        src="/img-4.png"
                        alt="imagecons" />

                    {/* <div className="flex flex-col items-center justify-center">
                        <a href="/" className="flex gap-1 items-center hover:opacity-70"><small>Nossos produtos</small> <HiOutlineArrowUturnLeft /> </a>
                        <div className="flex gap-3 mt-10 text-xl">
                            <a href="/"><PiInstagramLogoLight /></a>
                            <a href="/"><PiLinkedinLogoLight /></a>
                            <a href="/"><PiMailboxLight /></a>
                            <a href="/"><PiPhoneCallLight /></a>
                        </div>
                        <a href="/" className="flex gap-1 items-center mt-10"><small>Voltar</small> <HiOutlineArrowLeft /></a>
                    </div> */}
                </div>
                <div className="w-1/3 p-11 my-6 xl:w-2/5 max-md:w-full" data-aos="fade-left" data-delay="500">
                    <h2 className="text-3xl mb-6 mt-10">Quem Somos</h2>
                    <p className="mb-6 text-sm leading-relaxed">
                        Com uma experiência de mais de 45 anos no segmento, a R3 Suprimentos Corporativos se dedica diariamente a proporcionar a melhor experiência em compras de insumos para empresas de todos os setores nas regiões de Goiás e
                        Com CDs e lojas físicas em Goiânia e Rio Verde, atendemos uma ampla gama de segmentos, oferecendo suprimentos de alta qualidade e eficiência econômica.
                        Nossas linhas de: Produtos de Higiene e Limpeza Profissional | Materiais de Escritório | Embalagens | Equipamentos Profissionais | Lava Jato de Alta Pressão
                    </p>
                    <div className="mb-6">
                        <h4 className="mb-6 text-sm leading-relaxed font-semibold">Segmentos Atendidos:</h4>
                        <ul>
                            <li className="text-sm mb-2">• Setor de Alimentação: Restaurantes, bares, lanchonetes e food services.</li>
                            <li className="text-sm mb-2">• Hospitalidade: Hotéis, pousadas e resorts.</li>
                            <li className="text-sm mb-2">• Saúde: Hospitais, clínicas e laboratórios.</li>
                            <li className="text-sm mb-2">• Indústrias: Fábricas e plantas industriais.</li>
                            <li className="text-sm mb-2">• Escritórios Corporativos: Empresas de pequeno, médio e grande porte.</li>
                            <li className="text-sm mb-2">• Segmento Educacional: Escolas, universidades e centros de formação.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-2 text-sm font-semibold leading-relaxed">Nossa Abordagem e Diferencias</h4>
                        <p className="mb-6 text-sm leading-relaxed">
                            Nossa abordagem é centrada no cliente, visando facilitar a gestão de suprimentos com soluções personalizadas
                            que atendem às necessidades específicas de cada negócio. Temos uma plataforma digital para a gestão de pedidos e investimos continuamente no aprimoramento da tecnologia e nossos processos.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-2 text-sm font-semibold leading-relaxed">Parcerias de Sucesso e Confiança</h4>
                        <p className="mb-6 text-sm leading-relaxed">
                            Ao longo dos anos, fidelizamos inúmeros clientes e conquistamos a confiança de empresas que são referências em seus setores.
                            Nosso compromisso com a excelência nos permite manter parcerias duradouras e satisfatórias, que se traduzem em resultados concretos e duradouros para nossos clientes.
                        </p>
                    </div>

                    {/* <div className="mb-6">
                        <h4 className="mb-6 text-sm font-semibold">Principais Fornecedores:</h4>
                        <ul>
                            <li className="text-sm mb-1">• Karcher</li>
                            <li className="text-sm mb-1">• Chamex</li>
                            <li className="text-sm mb-1">• Tork</li>
                            <li className="text-sm mb-1">• Spartan</li>
                            <li className="text-sm mb-1">• Rubbermaid Commercial Products</li>
                            <li className="text-sm mb-1">• Ipel</li>
                            <li className="text-sm mb-1">• Ecomaster</li>
                            <li className="text-sm mb-1">• Unilever Pro</li>
                        </ul>
                    </div> */}

                    {/* <a href="/" className="flex gap-1 items-center hover:opacity-70"><small>Nossos produtos</small> <HiOutlineArrowUturnLeft /> </a>
                    <div className="flex gap-3 mt-10 text-xl">
                        <a href="/"><PiInstagramLogoLight /></a>
                        <a href="/"><PiLinkedinLogoLight /></a>
                        <a href="/"><PiMailboxLight /></a>
                        <a href="/"><PiPhoneCallLight /></a>
                    </div>
                    <a href="/" className="flex gap-1 items-center mt-10"><small>Voltar</small> <HiOutlineArrowLeft /></a> */}
                </div>
            </div>
            <hr></hr>
            <Logistc />
        </>
    )
}

export default About;
