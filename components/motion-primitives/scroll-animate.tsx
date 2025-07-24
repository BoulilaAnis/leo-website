"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimateProps {
    children: React.ReactNode
    className?: string
}

export function ScrollAnimate({ children, className }: ScrollAnimateProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.5, // Trigger when 50% of the element is visible
    })

    return (
        <div ref={ref} className={className}>
            {isInView && children}
        </div>
    )
}
