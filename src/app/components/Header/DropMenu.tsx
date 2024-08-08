
import * as React from "react";
import { cn } from "@/lib/utils"
import Link from "next/link"

import { VscThreeBars } from "react-icons/vsc";



import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "src/components/ui/navigation-menu";


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Faça parte da nossa Equipe",
        href: "https://www.r3suprimentos.com.br/",
        description:
            "",
    },
    {
        title: "Clientes",
        href: "https://www.r3suprimentos.com.br/",
        description:
            "",
    },
    {
        title: "Categorias de Produtos",
        href: "https://www.r3suprimentos.com.br/",
        description:
            "",
    },
    {
        title: "Canais de Contato",
        href: "https://www.r3suprimentos.com.br/",
        description:
            "",
    },
    {
        title: "Seja nosso Fornecedor",
        href: "https://www.r3suprimentos.com.br/",
        description:
            "",
    },
]


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
            "",
    }
]


const DropMenu = () => {
    return (
        <div className="w-1/4 md:hidden">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-xs"><VscThreeBars /></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="mb-2 mt-4 text-center text-lg font-medium">E-commerce</div>
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
                            <div className="mb-2 mt-4 text-center text-lg font-medium">Institucional</div>

<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
    {components.map((component) => (
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

export default DropMenu;


