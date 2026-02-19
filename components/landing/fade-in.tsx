"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 700,
    direction = "up",
    fullWidth = false
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px", // Trigger comfortably within view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getDirectionClass = () => {
        if (!isVisible) {
            switch (direction) {
                case "up": return "translate-y-10";
                case "down": return "-translate-y-10";
                case "left": return "translate-x-10";
                case "right": return "-translate-x-10";
                default: return "";
            }
        }
        return "translate-x-0 translate-y-0";
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all ease-out will-change-[transform,opacity]",
                fullWidth ? "w-full" : "",
                isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm",
                getDirectionClass(),
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}
