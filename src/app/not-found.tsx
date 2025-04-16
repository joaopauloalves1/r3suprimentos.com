import Image from "next/image";


const notFound = () => {
    return (
        <div>
            <Image 
            src={"/404.png"}
            width={1920} height={900}
            alt="404"/>
        </div>
    );
};


export default notFound;