import { Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
    return (
        <section className="w-full py-20 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20">
                            Misi Kami
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Memberdayakan Pemuda dengan <span className="text-gradient">Keterampilan Digital</span>
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-lg leading-relaxed">
                            Kami berkomitmen untuk mendukung Tujuan Pembangunan Berkelanjutan (SDG) dengan menyediakan pendidikan digital berkualitas tinggi bagi 100 siswa berdedikasi untuk menciptakan masa depan yang lebih baik.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="glass-card p-6 rounded-xl flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500 mt-1">
                                <Target className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Pendidikan Berkualitas (SDG 4)</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Menyediakan pelatihan teknis yang mudah diakses dalam pengembangan web, pemasaran, dan data.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-xl flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 mt-1">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Pekerjaan Layak (SDG 8)</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Mempersiapkan siswa dengan portofolio yang siap untuk pasar kerja dan karir profesional.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-xl flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 mt-1">
                                <Zap className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Inovasi (SDG 9)</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Mendorong inovasi melalui teknologi dan pembelajaran berbasis proyek nyata.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
