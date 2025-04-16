import Image from "next/image";
import GridContainer from "../GridContainer";
import Menu from "./Menu";
import Socials from "./Socials";
import DropMenu from "./DropMenu";

const Header = () => {
    return (
        <header className="bg-opacity-90 fixed top-0 z-50 w-full h-[80px] bg-blue-950
        flex items-center max-md:px-2" data-aos="fade-down">
            <GridContainer className="flex items-center justify-between">
                <div>
                    <Menu />
                </div>
                <div className="max-md:w-[40px]">
                    <a href="/">
                        <Image
                            src='/logo-color.png'
                            width={60}
                            height={60}
                            alt="logo R3"
                        />
                    </a>
                </div>
                <div>
                    <Socials></Socials>
                </div>
            </GridContainer>
        </header>
    )
}


export default Header;