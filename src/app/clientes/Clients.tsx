import Link from "next/link";

interface ClientsProps {
    url: string
    urlSite: string

}


const Clients = ({ url, urlSite }: ClientsProps) => {
    return (
        <div className="flex items-center justify-center shadow-sm hover:shadow-inner rounded-xl w-30 h-24 max-md:w-20" data-aos="fade-up" data-aos-delay="300">
            {/* <img className="h-24 object-contain p-1" src={url} alt=""></img> */}
            {/* <a href="{urlSite}" target="_blank"> <img className="h-24 object-contain p-1" src={url} alt=""></img></a> */}
            <Link href={urlSite} target="_blank"><img className="h-24 object-contain p-1" src={url} alt=""></img></Link>
        </div>
    )
}

export default Clients;