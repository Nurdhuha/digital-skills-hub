import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Heart, Lightbulb } from "lucide-react";
import Link from "next/link";
import { About as AboutSection } from "@/components/landing/about";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tentang Digipath</h1>
                            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Membangun jembatan antara potensi pemuda dan peluang ekonomi digital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reuse the existing Homepage About Section for SDG content */}
            <AboutSection />

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-10 md:grid-cols-3 text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="p-4 bg-primary/10 rounded-full text-primary">
                                <Globe2 className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Inklusivitas</h3>
                            <p className="text-muted-foreground">
                                Kami percaya bahwa keterampilan digital harus dapat diakses oleh semua orang, tanpa memandang latar belakang.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="p-4 bg-primary/10 rounded-full text-primary">
                                <Lightbulb className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Inovasi Praktis</h3>
                            <p className="text-muted-foreground">
                                Kurikulum kami berfokus pada keterampilan praktis yang langsung dapat diterapkan di industri.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="p-4 bg-primary/10 rounded-full text-primary">
                                <Heart className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Dampak Sosial</h3>
                            <p className="text-muted-foreground">
                                Setiap lulusan kami diharapkan menjadi agen perubahan di komunitas mereka masing-masing.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 flex justify-center">
                        <div className="glass-card bg-primary/5 p-8 md:p-12 rounded-2xl max-w-4xl text-center space-y-6 border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent -z-10" />
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">Siap untuk Memulai?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Jangan lewatkan kesempatan untuk meningkatkan keterampilan digital Anda dan membuka peluang karir baru.
                            </p>
                            <Link href="/register">
                                <Button size="lg" className="font-semibold shadow-lg shadow-primary/20">
                                    Gabung Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
