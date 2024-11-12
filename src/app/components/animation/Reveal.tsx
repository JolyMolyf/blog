'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useIsPresent } from 'framer-motion';

interface Props {
    children: JSX.Element;
    direction: 'top' | 'bottom' | 'left' | 'right';
    width?: "fit-content" | "100%"; 
    delay?: number;
}

export const Reveal = ({ children, width = "fit-content", direction, delay }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true });    
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    visible: { opacity: 1, y: 0, x: 0 },
                    top: { opacity: 0, y: 75 },
                    bottom: {opacity: 0, y: -75},
                    left: { opacity: 0, x: 75 },
                    right: {opacity: 0, x: -75}


                }}
                initial={direction}
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay ?? 0.25 }}
            >
                {children} 
            </motion.div>
        </div>
    )
}