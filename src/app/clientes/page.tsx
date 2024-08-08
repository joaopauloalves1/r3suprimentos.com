import Clients from "./Clients";

const Clientes = () => {
    return (
        <div className=" w-full flex items-center flex-col">
            <div className="w-1/2 mt-28" data-aos="fade-left">
                <h2 className="text-green-text font-semibold text-3xl text-center pb-2">CASES</h2>
                <p className="text-black text-sm text-center leading-relaxed">
                    Apresentamos alguns Cases, de forma prática, contados por clientes
                    que confiaram no modelo de gestão da R3 Suprimentos. São experiências e
                    resultados obtidos por clientes que possuem grande complexidade
                    operacional, de diversos segmentos da economia.
                    Mensalmente, são publicados Cases de Sucesso nas revistas de bordo
                    das principais Cias Aéreas do país. Conheça:
                </p>
            </div>
            <div className="w-3/5 grid grid-cols-6 py-5 gap-7 max-md:grid-cols-4 max-sm:grid-cols-3">
                <Clients
                    url="/clientes/flamboyant.png"
                    urlSite="https://www.flamboyant.com.br/"
                />
                <Clients
                    url="/clientes/kraft.png"
                    urlSite="https://www.kraftheinzcompany.com/"
                />
                <Clients
                    url="/clientes/saga.png"
                    urlSite="https://www.gruposaga.com.br/"
                />
                <Clients
                    url="/clientes/jhonny joy.png"
                    urlSite="https://johnnyjoy.com.br/"
                />
                <Clients
                    url="/clientes/terral.png"
                    urlSite="https://www.terral.com.br/"
                />
                <Clients
                    url="/clientes/hospitaldocor.png"
                    urlSite="https://www.hcorgoias.com.br/"
                />
                <Clients
                    url="/clientes/unimed1.png"
                    urlSite="https://www.unimedgoiania.coop.br/"
                />
                <Clients
                    url="/clientes/encore.png"
                    urlSite="https://www.encore.com.br/"
                />
                <Clients
                    url="/clientes/milk moo.jpg"
                    urlSite="https://milkymoo.com.br/"
                />
                <Clients
                    url="/clientes/sicoob.jpeg"
                    urlSite="https://www.sicoob.com.br/"
                />
                <Clients
                    url="/clientes/lifebox.png"
                    urlSite="https://www.lifeboxburgers.com.br/"
                />
                <Clients
                    url="/clientes/sygenta.png"
                    urlSite="https://www.syngenta.com.br/"
                />
                <Clients
                    url="/clientes/Logo-SiteLagoa.svg"
                    urlSite="https://lagoaparquesehoteis.com.br/"
                />
                <Clients
                    url="/clientes/comigo.png"
                    urlSite="https://comigo.coop.br/"
                />
                <Clients
                    url="/clientes/camaradacamarao.jpg"
                    urlSite="https://www.ocamarada.com.br/"
                />
                <Clients
                    url="/clientes/albert einstein.png"
                    urlSite="https://www.einstein.br/Pages/Home.aspx"
                />
                <Clients
                    url="/clientes/cargill-logo-4.png"
                    urlSite="https://www.cargill.com.br/"
                />
                <Clients
                    url="/clientes/velocity.png"
                    urlSite="https://studiovelocity.com.br/"
                />
                <Clients
                    url="/clientes/nino.png"
                    urlSite="https://www.alifenino.com.br/restaurante-nino/"
                />
                <Clients
                    url="/clientes/jbs.png"
                    urlSite="https://jbs.com.br/"
                />
                <Clients
                    url="/clientes/tatubola1.png"
                    urlSite="https://www.alifenino.com.br/bar-tatu-bola/"
                />
                <Clients
                    url="/clientes/jbj.png"
                    urlSite="https://jbjagropecuaria.com.br/"
                />
                <Clients
                    url="/clientes/piquiras.png"
                    urlSite=""
                />
                <Clients
                    url="/clientes/gav.png"
                    urlSite="https://gavresorts.com.br/"
                />
            </div>
        </div>
    )
}


export default Clientes;