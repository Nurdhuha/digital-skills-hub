import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
    // Mock data - in real app fetch based on params.slug
    const course = {
        title: "Dasar Pengembangan Web",
        description: "Pelajari dasar HTML, CSS, dan JavaScript untuk membangun website pertama Anda.",
        modules: [
            { id: 1, title: "Pengenalan HTML", duration: "45 menit", completed: false },
            { id: 2, title: "Dasar Penataan CSS", duration: "60 menit", completed: false },
            { id: 3, title: "Esensi JavaScript", duration: "90 menit", completed: false },
        ]
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/courses">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ringkasan Kursus</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                                <PlayCircle className="h-12 w-12 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Modul Kursus</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {course.modules.map((module) => (
                                <div key={module.id} className="flex items-center justify-between p-2 border rounded-md hover:bg-muted/50 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium">
                                            {module.id}
                                        </span>
                                        <div className="text-sm font-medium">{module.title}</div>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{module.duration}</div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
