import { Button } from "@/components/ui/button";
import { UploadForm } from "@/components/dashboard/upload-form";
import { QuizInterface } from "@/components/dashboard/quiz-interface";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SubmissionDetailPage({ params }: { params: { id: string } }) {
    // Mock logic to determine type based on ID
    const isQuiz = params.id.includes('quiz');
    const title = isQuiz ? "Kuis: CSS Selectors" : "Tugas 1: Struktur HTML";
    const desc = isQuiz ? "Jawab semua pertanyaan dengan benar." : "Buatlah struktur HTML sederhana untuk halaman profil pribadi.";

    return (
        <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/submissions">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                    <p className="text-muted-foreground">{desc}</p>
                </div>
            </div>

            {isQuiz ? (
                <QuizInterface quizId={params.id} />
            ) : (
                <UploadForm assignmentId={params.id} />
            )}
        </div>
    );
}
