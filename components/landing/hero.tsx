"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useCountUp } from "@/hooks/use-count-up";

export function Hero() {
    const studentCount = useCountUp(100);
    const trackCount = useCountUp(3, 1000);
    const mentorCount = useCountUp(15, 1500);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pb-24 pt-0">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="space-y-4 max-w-4xl">
                        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-500 mb-4 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                            Pendaftaran Batch 1 Dibuka
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Kuasai <span className="text-gradient">Keterampilan Digital</span> <br className="hidden sm:inline" />
                            untuk Masa Depan Gemilang
                        </h1>

                        <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg lg:text-xl leading-relaxed">
                            Bergabunglah dengan Digital Skills Hub untuk belajar Pengembangan Web, Pemasaran Digital, dan Analisis Data. Bangun portofolio profesional Anda bersama mentor ahli.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/dashboard">
                            <Button size="lg" className="h-12 px-8 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all rounded-full w-full sm:w-auto">
                                Mulai Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/programs">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5 w-full sm:w-auto glass hover:border-primary/50">
                                Lihat Program
                            </Button>
                        </Link>
                    </div>

                    {/* Stats / Social Proof */}
                    <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-80">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">{studentCount}+</span>
                            <span className="text-sm text-muted-foreground">Siswa Terdaftar</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">{trackCount}</span>
                            <span className="text-sm text-muted-foreground">Jalur Belajar</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">{mentorCount}+</span>
                            <span className="text-sm text-muted-foreground">Mentor Ahli</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">SDG</span>
                            <span className="text-sm text-muted-foreground">Orientasi Dampak</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
