"use client";

import { useEffect } from 'react';
import { initAOS } from '@/lib/aos';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        initAOS();
    }, []);

    return <>{children}</>;
};

export default ClientWrapper;
