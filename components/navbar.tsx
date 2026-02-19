"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
    const links = [
        { title: "Beranda", href: "/" },
        { title: "Program", href: "/programs" },
        { title: "Tentang", href: "/about" },
    ];

    // State to track scroll position
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hide Navbar on dashboard pages
    if (pathname?.startsWith("/dashboard")) {
        return null;
    }

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass" : "bg-transparent border-b border-transparent"}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
                    <span className="text-primary group-hover:text-indigo-400 transition-colors">Digital</span> Skills Hub
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="sm" className="hover:bg-primary/5">
                            Masuk
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button size="sm" className="rounded-full shadow-md hover:shadow-primary/20 transition-all">Mulai</Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 mt-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                                <hr />
                                <div className="flex flex-col gap-3">
                                    <Link href="/dashboard" className="w-full">
                                        <Button variant="outline" className="w-full">Masuk</Button>
                                    </Link>
                                    <Link href="/dashboard" className="w-full">
                                        <Button className="w-full">Mulai</Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            {/* Gradient Line */}
            <div
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-1000 ease-in-out transform origin-center ${isScrolled ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            />
        </nav>
    );
}
