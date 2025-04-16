import { VscAccount, VscGear, VscSymbolMethod, VscHome } from "react-icons/vsc";
import Background from "./Background";


const SectionFour = () => {
    return (
        <section>
            <div>
                <Background />
            </div>
            <div className="flex items-center min-h-screen justify-center">
                <div className="flex flex-col w-1/2 text-white max-md:w-10/12">
                    <h2 className="pb-10 font-bold text-5xl text-center text-green-text max-md:text-3xl" data-aos="fade-right">NOSSO COMPROMISSO</h2>
                    <div className="flex gap-10 max-md:flex-col">
                        <img src="/selo.png" alt="" className="w-[250px] max-md:" data-aos="fade-right"/>
                        <p className="pb-4 text-sm leading-relaxed text-center mt-4 max-w-screen-md max-md:text-xs" data-aos="fade-left" data-aos-delay="300">
                            Na R3, nosso compromisso é com a
                            qualidade, a inovação e a satisfação dos
                            nossos clientes, oferecendo soluções
                            eficientes e sustentáveis para suas operações.
                            Um exemplo disso é a certificação que
                            recebemos no final de 2023 - SELO IPECOE
                            DE EXCELÊNCIA 2023 NPS. A comprovação
                            dessa certificação ocorreu por meio da
                            aplicação de pesquisa junto aos nossos
                            clientes. A pesquisa seguiu metodologia
                            científica NPS e Satisfação dos Clientes, que
                            garantiu índice de 97% de confiança
                            estatístico dos resultados.
                        </p>
                    </div>

                    {/* <h3 className="pb-4 font-bold text-2xl max-md:text-1xl" data-aos="fade-left" data-aos-delay="500">
                        Com o R3 Supply,
                        os processos são integrados:
                    </h3> */}
                    {/* <div className="flex justify-between gap-5 mt-4">
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><VscAccount className="text-6xl mb-2  max-md:text-2xl " /><span className="text-sm max-sm:text-xs">Cliente</span></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"><VscGear className="text-6xl mb-2 max-md:text-2xl" /><span className="text-sm max-sm:text-xs">Sistema</span></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="700"><VscSymbolMethod className="text-6xl mb-2  max-md:text-2xl" /><span className="text-center text-sm max-sm:text-xs">R3 <br /> Suprimentos</span></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><VscHome className="text-6xl mb-2 max-md:text-2xl" /><span className="text-sm max-sm:text-xs">Entrega</span></div>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default SectionFour;