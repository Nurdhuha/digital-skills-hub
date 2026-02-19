import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Clock, AlertCircle, ArrowRight } from "lucide-react";

export default function SubmissionsPage() {
    const assignments = [
        {
            id: "html-basics",
            title: "Tugas 1: Struktur HTML",
            course: "The Builder",
            dueDate: "2024-03-25",
            status: "pending", // pending, submitted, graded
            type: "upload"
        },
        {
            id: "css-quiz",
            title: "Kuis: CSS Selectors",
            course: "The Builder",
            dueDate: "2024-03-26",
            status: "pending",
            type: "quiz"
        },
        {
            id: "marketing-plan",
            title: "Tugas 2: Rencana Konten",
            course: "The Messenger",
            dueDate: "2024-03-20",
            status: "submitted",
            grade: "85/100"
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Pengumpulan Tugas</h1>
                    <p className="text-muted-foreground">Kelola tugas dan kuis Anda di sini.</p>
                </div>
            </div>

            <div className="grid gap-4">
                {assignments.map((assignment) => (
                    <Card key={assignment.id} className="transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-xl">{assignment.title}</CardTitle>
                                <CardDescription>{assignment.course} • Batas Waktu: {assignment.dueDate}</CardDescription>
                            </div>
                            <Badge
                                variant={assignment.status === 'completed' || assignment.status === 'graded' ? 'default' : 'secondary'}
                                className={
                                    assignment.status === 'pending' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' :
                                        assignment.status === 'submitted' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' :
                                            'bg-green-100 text-green-800 hover:bg-green-100'
                                }
                            >
                                {assignment.status === 'pending' && <Clock className="mr-1 h-3 w-3" />}
                                {assignment.status === 'submitted' && <CheckCircle className="mr-1 h-3 w-3" />}
                                {assignment.status === 'pending' ? 'Belum Dikumpulkan' :
                                    assignment.status === 'submitted' ? 'Menunggu Penilaian' : 'Selesai'}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    {assignment.type === 'quiz' ? <AlertCircle className="mr-2 h-4 w-4" /> : <FileText className="mr-2 h-4 w-4" />}
                                    {assignment.type === 'quiz' ? 'Kuis Online' : 'Unggah File'}
                                </div>
                                {assignment.status === 'pending' && (
                                    <Link href={`/dashboard/submissions/${assignment.id}`}>
                                        <Button size="sm">
                                            Kerjakan <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                )}
                                {assignment.status === 'submitted' && (
                                    <Button variant="outline" size="sm" disabled>
                                        Sudah Dikumpulkan
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
