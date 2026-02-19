import { Code, Megaphone, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CurriculumModal } from "@/components/landing/curriculum-modal";
import { FadeIn } from "@/components/landing/fade-in";

export function Features() {
    const features = [
        {
            title: "The Builder",
            description: "Pengembangan Aplikasi & Web menggunakan Next.js dan Laravel.",
            icon: Code,
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
            border: "hover:border-indigo-500/50",
            href: "/dashboard/courses/builder",
            skills: ["HTML, CSS, JavaScript", "React & Next.js", "Node.js & Database", "Deployment & DevOps"],
            delay: 0
        },
        {
            title: "The Messenger",
            description: "Pemasaran Digital, SEO, dan Strategi Konten Kreatif.",
            icon: Megaphone,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "hover:border-emerald-500/50",
            href: "/dashboard/courses/messenger",
            skills: ["Social Media Strategy", "SEO & SEM", "Content Marketing", "Analytics & Reporting"],
            delay: 200
        },
        {
            title: "The Analyst",
            description: "Literasi Data, Excel Tingkat Lanjut, dan Pemanfaatan AI.",
            icon: BarChart,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "hover:border-blue-500/50",
            href: "/dashboard/courses/analyst",
            skills: ["Excel Advanced", "SQL Querying", "Data Visualization", "Python for Data Science"],
            delay: 400
        },
    ];

    return (
        <section className="w-full py-20 bg-muted/30 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <FadeIn direction="up">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Program Unggulan</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-xl">
                                Pilih jalur spesialisasi yang sesuai dengan minat dan bakat Anda.
                            </p>
                        </div>
                    </FadeIn>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <FadeIn key={feature.title} delay={feature.delay} className="h-full">
                            <div
                                className={`group relative overflow-hidden rounded-2xl glass-card p-8 flex flex-col items-center h-full ${feature.border} text-center`}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bg} rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:blur-[60px]`} />

                                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} ${feature.color}`}>
                                    <feature.icon className="h-7 w-7" />
                                </div>

                                <h3 className="mb-3 text-2xl font-bold tracking-tight">{feature.title}</h3>
                                <p className="mb-6 text-muted-foreground flex-1 leading-relaxed">
                                    {feature.description}
                                </p>

                                <CurriculumModal
                                    title={feature.title}
                                    description={feature.description}
                                    skills={feature.skills}
                                    triggerText="Pelajari Lebih Lanjut"
                                    triggerClassName="w-fit p-0 hover:bg-transparent font-semibold group-hover:scale-105 transition-transform"
                                />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
