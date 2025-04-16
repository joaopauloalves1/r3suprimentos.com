import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: ReactNode
    className?: string
}

const GridContainer = ({ children, className } : GridContainerProps) => {
    return (
        <div className={twMerge("w-full max-w-container mx-auto px-3", className)}>{children}</div>
    )
}


export default GridContainer;