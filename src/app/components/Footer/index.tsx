

import SocialsFooter from "./SocialsFooter";


const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://www.r3suprimentos.com.br/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/logo-1.png" className="h-16" alt="R3 Logo" />
                        {/* <span className="self-center text-2xl  whitespace-nowrap dark:text-white">R3 Suprimentos</span> */}
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">Quem Somos</a>
                        </li>
                        <li>
                            <a href="https://www.r3suprimentos.com.br/politica-de-privacidade" target="_blank" className="hover:underline me-4 md:me-6">Política de Privacidade</a>
                        </li>
                        {/* <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li> */}
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=556239462100" target="_blank" className="hover:underline">Contato</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.r3suprimentos.com.br/" className="hover:underline">R3 Suprimentos™</a>. All Rights Reserved.</span>
            </div>
            <div className="fixed bottom-0 z-50 w-full p-6">
                <SocialsFooter />
            </div>
        </footer>
    );
}

export default Footer;