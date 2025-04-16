import { PiCoffeeLight, PiNoteBlank, PiPintGlass, PiHandSoap, PiRecycle, PiPackageLight, PiBroom, PiToiletPaper, PiWashingMachine, PiOfficeChair } from "react-icons/pi";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdOutlineScience } from "react-icons/md";

const LinhaProdutos = () => {
    return (
        <div>
            <div className="w-full h-[50vh] flex flex-col items-center">
                <div className="h-[80px] w-full bg-blue-950"> </div>
                <div className="absolute -z-10 bg-[url('/img-3.jpg')] brightness-50 w-full h-[50vh] bg-cover bg-center bg-no-repeat flex flex-col items-center">
                </div>
                <h2 className="text-4xl font-semibold p-3 text-green-text mt-28">Linha de Produtos</h2>
                <h5 className="text-xl mb-4 text-white font-normal max-sm:text-base">1500 itens distribuídos em diversas Categorias</h5>
                <p className="text-sm w-2/3 text-white text-center max-sm:text-xs">Oferecemos itens de consumo recorrente essenciais para operação, uso de seus colaboradores e o dia a dia da sua empresa. Confira abaixo nossas Categorias de Produtos</p>
            </div>
            <div className="w-full h-[50vh] bg-blue-950 flex items-center justify-center">
                <div className="grid grid-cols-12 gap-7 w-4/6 m-auto max-xl:grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 max-sm:gap-2">

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="0">
                        <a href="https://www.r3suprimentos.com.br/alimenticio" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiCoffeeLight className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">ALIMENTICIO</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="100">
                        <a href="https://www.r3suprimentos.com.br/chamex" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiNoteBlank className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">CHAMEX</p>
                        </a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="200">
                        <a href="https://www.r3suprimentos.com.br/descartaveis" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiPintGlass className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">DESCARTAVEIS</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="300">
                        <a href="https://www.r3suprimentos.com.br/eco" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiRecycle className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">ECO</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="400">
                        <a href="https://www.r3suprimentos.com.br/embalagens" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiPackageLight className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">EMBALAGEM</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="500">
                        <a href="https://www.r3suprimentos.com.br/epis" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <FaHelmetSafety className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">EPI</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="600">
                        <a href="https://www.r3suprimentos.com.br/equip-e-acessorios" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiBroom className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">EQUIP. E ACESSORIOS</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="700">
                        <a href="https://www.r3suprimentos.com.br/dispensers" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiHandSoap className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">DISPENSERS</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="800">
                        <a href="https://www.r3suprimentos.com.br/higiene-pessoal" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiToiletPaper className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">HIGIENE PESSOAL</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="900">
                        <a href="https://www.r3suprimentos.com.br/lavanderia" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiWashingMachine className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">LAVANDERIA</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="900">
                        <a href="https://www.r3suprimentos.com.br/material-escritorio" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <PiOfficeChair className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">MATERIAL ESCRITORIO</p></a>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="900">
                        <a href="https://www.r3suprimentos.com.br/quimicos" className="flex justify-center flex-col items-center hover:opacity-50" target="_blank">
                            <MdOutlineScience className="text-3xl mb-2 text-white" />
                            <p className="text-xs text-center">QUIMICO</p></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LinhaProdutos;
