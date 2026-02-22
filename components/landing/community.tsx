import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/landing/fade-in";
import { ArrowRight, MessageCircle, Users } from "lucide-react";
import Link from "next/link";

export function Community() {
    return (
        <section className="w-full py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-background via-indigo-500/5 to-background -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <FadeIn className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                            <Users className="mr-2 h-4 w-4" />
                            Komunitas Belajar
                        </div>

                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Gabung <span className="text-gradient">Komunitas Kami</span>
                        </h2>

                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                            Belajar tidak harus sendirian. Bergabunglah dengan ribuan siswa lainnya, berdiskusi dengan mentor, dan bangun jaringan profesional Anda.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto pt-4">
                        <div className="glass-card p-6 rounded-2xl text-left hover:border-primary/50 transition-colors group">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                                <MessageCircle className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Diskusi Aktif</h3>
                            <p className="text-muted-foreground mb-4">
                                Tanya jawab seputar materi, berbagi tips, dan diskusi proyek terkini.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl text-left hover:border-primary/50 transition-colors group">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Networking</h3>
                            <p className="text-muted-foreground mb-4">
                                Kenalan dengan teman satu frekuensi dan perluas peluang karir Anda.
                            </p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Link href="/register">
                            <Button size="lg" className="h-12 px-8 text-lg font-semibold rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all">
                                Gabung Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
