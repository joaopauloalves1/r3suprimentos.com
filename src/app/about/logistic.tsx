import React from "react";

const Logistc = () => {
    return (
        <div className="w-100% bg-slate-100 min-h-screen">
            <div className="max-w-screen-xl p-7 m-auto flex items-center justify-center gap-4 pt-28  max-md:flex-col">
                <div className="max-w-lg">
                    <div>
                        <h2 className="text-4xl text-blue-950 text-justify font-bold mb-3 max-md:text-xl" data-aos="fade-left" data-delay="500">Abrangência</h2>
                        <p className="text-sm text-justify max-md:text-xs" data-aos="fade-left" data-delay="500" >
                            Na R3 Suprimentos, entregamos nossos produtos em todo o Brasil, com um foco especial em Goiás e no Distrito Federal.
                            Nosso compromisso é garantir que cada cliente receba suas mercadorias com a máxima eficiência e segurança.
                            Utilizamos uma logística bem estruturada e transportadoras selecionadas para manter a alta qualidade no serviço de entrega.
                            Ao escolher a R3 Suprimentos, você tem a garantia de um serviço ágil e confiável, atendendo suas necessidades com excelência.
                        </p>
                    </div>
                </div>
                <div>
                    {/* <img src="/mapa_brasil.png" className="max-w-screen-sm max-md:w-80 max-lg:w-96" data-aos="fade-left" data-delay="500" alt="mapa_brasil" /> */}
                    <img src="/mapa_brasil_3.png" className="max-w-screen-sm max-md:w-80 max-lg:w-96" data-aos="fade-left" data-delay="500" alt="mapa_brasil_2" />
                </div>
            </div>
        </div>
    )
}

export default Logistc