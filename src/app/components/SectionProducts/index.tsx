import { url } from "inspector"
import Products from "./Products"


const ProductCard = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center mb-4 pt-10">
            <div className="w-8/12 mb-7 mt-12">
                <h5 className="text-lg font-light  mt-3 max-md:text-1xl" data-aos="fade-left">ENTREGA PAUTADA NA</h5>
                <h2 className="text-5xl font-bold pb-5 text-blue-text  max-md:text-1xl" data-aos="fade-left">
                    PARCERIA COM <br /> GRANDES MARCAS
                </h2>
                <p className="pb-2 text-sm  mt-2  max-md:text-xs leading-relaxed" data-aos="fade-left" data-aos-delay="300">
                    Reconhecida por sua solidez e compromisso, a R3 conquistou a confiança do mercado
                    corporativo, fidelizando clientes em diversos segmentos. Trabalhamos em parceria com
                    marcas renomadas nacionais e internacionais, como Chamex, Unilever, Ecomaster, Tork,
                    Santher, Fibraform, Galvanotek, 3M, Freeco, Rubbermaid, Karcher, Spartan, entre outras.
                </p>
            </div>
            <div className=" mt-3 mb-12 grid grid-cols-5 grid-rows-5  max-md:grid-cols-2 gap-4">
                <Products
                    url="/MARCAS/karcher1.png"
                />
                <Products
                    url="/MARCAS/rubber1.png"
                />
                <Products
                    url="/MARCAS/spartan1.png"
                />
                <Products
                    url="/MARCAS/chamex1.png"
                />
                <Products
                    url="/MARCAS/3m1.png"
                />
                <Products
                    url="/MARCAS/3cor1.png"
                />

                <Products
                    url="/MARCAS/ecomaster1.png"
                />
                <Products
                    url="/MARCAS/freeco1.png"
                />
                <Products
                    url="/MARCAS/omo1.png"
                />
                <Products
                    url="/MARCAS/bralimpia1.png"
                />

                <Products
                    url="/MARCAS/TORK1.png"
                />
                <Products
                    url="/MARCAS/zupp1.png"
                />
                <Products
                    url="/MARCAS/start1.png"
                />
                <Products
                    url="/MARCAS/cif1.png"
                />
                <Products
                    url="/MARCAS/confort1.png"
                />

                <Products
                    url="/MARCAS/geiovanna1.png"
                />
                <Products
                    url="/MARCAS/sacae1.png"
                />
                <Products
                    url="/MARCAS/tramontina1.png"
                />
                <Products
                    url="/MARCAS/vabene1.png"
                />
                <Products
                    url="/MARCAS/volk1.png"
                />
                <Products
                    url="/MARCAS/enshuga1.png"
                />
                <Products
                    url="/MARCAS/straw1.png"
                />
                <Products
                    url="/MARCAS/sek1.png"
                />
                <Products
                    url="/MARCAS/compactor1.png"
                />
                <Products
                    url="/MARCAS/duracel1.png"
                />
                                {/* <Products
                    url="/MARCAS/enshuga1.png"
                />
                <Products
                    url="/MARCAS/straw1.png"
                />
                <Products
                    url="/MARCAS/sek1.png"
                />
                <Products
                    url="/MARCAS/compactor1.png"
                />
                <Products
                    url="/MARCAS/duracel1.png"
                /> */}
            </div>
        </section>
    )
}


export default ProductCard