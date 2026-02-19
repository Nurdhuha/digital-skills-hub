import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Code, Megaphone, BarChart, BookOpen } from "lucide-react";

export default function CoursesPage() {
    const courses = [
        {
            id: "web-dev-basics",
            title: "Dasar Pengembangan Web",
            description: "Pelajari dasar HTML, CSS, dan JavaScript.",
            category: "The Builder",
            progress: 0,
            totalModules: 12,
            completedModules: 0,
            icon: Code,
            color: "text-indigo-600",
        },
        {
            id: "nextjs-mastery",
            title: "Menguasai Next.js 14",
            description: "Bangun aplikasi full-stack dengan App Router.",
            category: "The Builder",
            progress: 0,
            totalModules: 20,
            completedModules: 0,
            icon: Code,
            color: "text-indigo-600",
        },
        {
            id: "digital-marketing-strategy",
            title: "Strategi Pemasaran Digital",
            description: "SEO, Pemasaran Konten, dan Media Sosial.",
            category: "The Messenger",
            progress: 0,
            totalModules: 15,
            completedModules: 0,
            icon: Megaphone,
            color: "text-emerald-500",
        },
        {
            id: "data-analysis-excel",
            title: "Analisis Data dengan Excel",
            description: "Kuasai pivot table, rumus, dan visualisasi.",
            category: "The Analyst",
            progress: 0,
            totalModules: 10,
            completedModules: 0,
            icon: BarChart,
            color: "text-blue-500",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Kursus Saya</h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Card key={course.id} className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <Badge variant="outline">{course.category}</Badge>
                                <course.icon className={`h-5 w-5 ${course.color}`} />
                            </div>
                            <CardTitle className="mt-4">{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">{course.completedModules} / {course.totalModules} Modul</span>
                                    <span className="font-medium">{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-2" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/dashboard/courses/${course.id}`} className="w-full">
                                <Button className="w-full">
                                    <BookOpen className="mr-2 h-4 w-4" /> Lanjut Belajar
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
