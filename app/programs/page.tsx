import { Code, Megaphone, BarChart, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CurriculumModal } from "@/components/landing/curriculum-modal";

export default function ProgramsPage() {
    const programs = [
        {
            title: "The Builder",
            role: "Full Stack Developer",
            description: "Menjadi ahli dalam membangun aplikasi web modern yang skalabel dan performa tinggi.",
            icon: Code,
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
            skills: ["HTML, CSS, JavaScript", "React & Next.js", "Node.js & Database", "Deployment & DevOps"],
            href: "/dashboard/courses/builder"
        },
        {
            title: "The Messenger",
            role: "Digital Marketer",
            description: "Menguasai seni menjangkau audiens dan mengubah mereka menjadi pelanggan setia.",
            icon: Megaphone,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            skills: ["Social Media Strategy", "SEO & SEM", "Content Marketing", "Analytics & Reporting"],
            href: "/dashboard/courses/messenger"
        },
        {
            title: "The Analyst",
            role: "Data Analyst",
            description: "Menerjemahkan data mentah menjadi wawasan bisnis yang dapat ditindaklanjuti.",
            icon: BarChart,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            skills: ["Excel Advanced", "SQL Querying", "Data Visualization", "Python for Data Science"],
            href: "/dashboard/courses/analyst"
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden mesh-bg">
                <div className="absolute inset-0 bg-background/60 backdrop-blur-3xl -z-10" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-6 text-center">
                        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-500 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                            Kurikulum Terkini 2024
                        </div>
                        <div className="space-y-4 max-w-3xl">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-200 dark:to-white pb-2">
                                Pilih Jalur Masa Depanmu
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Kurikulum kami dirancang oleh ahli industri untuk mempersiapkan Anda menghadapi tantangan dunia kerja digital dengan keterampilan yang relevan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {programs.map((program) => (
                            <div key={program.title} className="group relative flex flex-col p-8 glass-card rounded-3xl overflow-hidden border-t border-white/50 dark:border-white/10">
                                <div className={`absolute top-0 right-0 w-40 h-40 ${program.bg} rounded-full blur-[60px] -mr-10 -mt-10 transition-all opacity-50 group-hover:opacity-100 group-hover:blur-[50px]`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`p-4 rounded-2xl w-fit ${program.bg} ${program.color} mb-6 ring-1 ring-inset ring-black/5 dark:ring-white/10`}>
                                        <program.icon className="h-8 w-8" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
                                    <p className="text-sm font-semibold text-primary/80 mb-4 uppercase tracking-wider">{program.role}</p>

                                    <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                                        {program.description}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <h4 className="text-sm font-medium text-foreground/80">Skill yang dipelajari:</h4>
                                        <ul className="grid gap-3">
                                            {program.skills.map((skill) => (
                                                <li key={skill} className="flex items-center gap-3 text-sm text-muted-foreground">
                                                    <CheckCircle2 className={`h-4 w-4 ${program.color} shrink-0`} />
                                                    <span>{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <CurriculumModal
                                        title={program.title}
                                        description={program.description}
                                        skills={program.skills}
                                        triggerText="Lihat Kurikulum Lengkap"
                                        triggerClassName="w-full mt-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white shadow-lg shadow-indigo-500/25 border-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
