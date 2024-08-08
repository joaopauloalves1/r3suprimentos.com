
import * as React from "react";
// import { AiFillAlipayCircle } from "react-icons/ai";
import { cn } from "@/lib/utils"
import Link from "next/link"


import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "src/components/ui/navigation-menu";


const componentsPME: { title: string; href: string; description: string }[] = [
    {
        title: "Compre agora",
        href: "https://www.r3suprimentos.com.br/",
        description:
            "Compre em nosso site.",
    },
    {
        title: "Cotação online",
        href: "https://www.r3suprimentos.com.br/faca-sua-cotacao",
        description:
            "Um dos nossos consultores entrara em contato com você.",
    }
]


const Menu = () => {
    return (
        <div className="ml-4">
            <NavigationMenu className="">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-xs max-md:text-[8px] text-white">A R3 SUPRIMENTOS</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                                            href="/about">
                                            <img src="/Logo.png" className="w-16 p-1"></img>
                                            <div className="mb-2 mt-4 text-lg font-medium">                                                
                                                <Link href="/about" className="hover:underline">Quem somos?</Link>
                                            </div>
                                            {/* <p className="text-sm leading-tight text-muted-foreground">
                                                A R3 Suprimentos Corporativos, é uma empresa goiana
                                            </p> */}
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/clientes" title="Clientes"></ListItem>
                                <ListItem href="/linhaProdutos" title="Categorias de Produtos"></ListItem>
                                <ListItem href="https://www.r3suprimentos.com.br/seja-um-fornecedor" target="_blank" title="Seja nosso Fornecedor"></ListItem>
                                <ListItem href="https://vagasr3.rhgestor.com.br/" target="_blank" title="Faça parte da nossa equipe"></ListItem>
                                <ListItem href="/contato" title="Canais de Contato"></ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-xs max-md:text-[8px] text-white">E-COMMERCE</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {componentsPME.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Menu;


