'use client'

import React from "react"
import  { motion } from "framer-motion"

const Templete = ({Children}: {Children: React.ReactNode}) => {
    return (
        <motion.div
            initial={{ y:16, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
        >
            {Children}
        </motion.div>
    )
}


export default Templete;