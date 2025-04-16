import { VscAccount, VscGear, VscSymbolMethod, VscHome } from "react-icons/vsc";
import Background from "./Backgroud";

const Second = () => {
    return (
        <section>
            <div>
                {/* <Background /> */}
            </div>
            <div className="flex items-center flex-col min-h-screen justify-center bg-slate-50">
                {/* <div className="flex items-center flex-col min-h-screen justify-center bg-blue-950"> */}
                <div className="flex flex-col w-1/2 text-black max-md:w-10/12">
                    <h4 className="text-xl font-semibold text-blue-text" data-aos="fade-left">SOLUÇÕES PARA</h4>
                    <h2 className="pb-4 font-bold text-5xl text-green-text max-md:text-3xl" data-aos="fade-left">SUPRIMENTOS <br />CORPORATIVOS</h2>
                    <p className=" text-[14px] max-md:text-xs leading-relaxed" data-aos="fade-right" data-aos-delay="200">
                        Com mais de 45 anos de experiência, a R3 Suprimentos Corporativos oferece suprimentos de alta qualidade e eficiência econômica para empresas de diversos setores em Goiás,
                        Distrito Federal e outros estados. Com centros de distribuição e lojas físicas em Goiânia e Rio Verde - Goiás,
                        atendemos segmentos como Alimentação, Hotelaria, Saúde, Indústrias, Escritórios Corporativos e Educação.
                    </p>
                    <div className="flex justify-between gap-10 my-6">
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><img src="/icon1.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"><img src="/icon6.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="700"><img src="/icon3.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/icon4.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/icon5.png" alt="" className="w-20" /></div>
                    </div>

                    {/* <h4 className="text-white font-light text-xl" data-aos="fade-right" data-aos-delay="400">ATENDEMOS TANTO O PÚBLICO B2B QUANTO B2C,</h4>
                    <p className="pb-4 text-sm max-md:text-xs" data-aos="fade-right" data-aos-delay="400">garantindo a qualidade e a eficiência que nossos clientes precisam.</p> */}

                    <p className="pb-2 text-sm max-md:text-xs leading-relaxed" data-aos="fade-right" data-aos-delay="600">
                        Nossas linhas de produtos incluem Insumos de Higiene e Limpeza, Equipamentos e Máquinas de Limpeza Profissional, Produtos Químicos,
                        Lavajato de Alta Pressão, Materiais de Escritório, Embalagens, EPIs, Itens para Copa e Cozinha, além de outros. Nossa abordagem é centrada no cliente,
                        proporcionando soluções personalizadas, logística ágil e uma plataforma digital eficiente para a gestão de pedidos.
                    </p>
                    <p className="pb-2 text-sm max-md:text-xs leading-relaxed" data-aos="fade-right" data-aos-delay="600">
                        A satisfação de nossos clientes se reflete em nosso índice NPS de excelência¹. Na R3 Suprimentos Corporativos,
                        você encontra as melhores marcas e um ótimo atendimento que atendem às necessidades específicas do seu negócio.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Second;