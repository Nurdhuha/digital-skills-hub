"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Note: Need to verify if RadioGroup exists or install/create it
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle } from "lucide-react";

// Fallback for RadioGroup if not present (simple implementation)
function SimpleRadioGroup({ value, onValueChange, children }: any) {
    return <div className="space-y-3">{children}</div>
}

export function QuizInterface({ quizId }: { quizId: string }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Manakah tag HTML yang benar untuk membuat heading terbesar?",
            options: [
                { id: "a", text: "<head>" },
                { id: "b", text: "<h1>" },
                { id: "c", text: "<h6>" },
                { id: "d", text: "<heading>" }
            ],
            correct: "b"
        },
        {
            id: 2,
            question: "Property CSS mana yang digunakan untuk mengubah warna latar belakang?",
            options: [
                { id: "a", text: "color" },
                { id: "b", text: "bgcolor" },
                { id: "c", text: "background-color" },
                { id: "d", text: "bg-color" }
            ],
            correct: "c"
        }
    ];

    const handleAnswer = (value: string) => {
        setAnswers({ ...answers, [currentQuestion]: value });
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsSubmitted(true);
        }
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.correct) score++;
        });
        return (score / questions.length) * 100;
    };

    if (isSubmitted) {
        const score = calculateScore();
        return (
            <Card className="text-center py-10">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        {score >= 70 ? (
                            <CheckCircle2 className="h-16 w-16 text-green-500" />
                        ) : (
                            <AlertCircle className="h-16 w-16 text-amber-500" />
                        )}
                    </div>
                    <CardTitle className="text-3xl">Nilai Anda: {score}</CardTitle>
                    <CardDescription>
                        {score >= 70 ? "Selamat! Anda lulus kuis ini." : "Silakan pelajari materi lagi dan coba lagi."}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                    <Button onClick={() => window.location.href = '/dashboard/submissions'}>
                        Kembali ke Daftar Tugas
                    </Button>
                </CardFooter>
            </Card>
        )
    }

    const question = questions[currentQuestion];

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
                    <span className="text-sm font-medium text-primary">Kuis Interaktif</span>
                </div>
                <CardTitle>{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Using standard HTML inputs for simplicity if RadioGroup component is missing context */}
                <div className="space-y-4">
                    {question.options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer" onClick={() => handleAnswer(option.id)}>
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                id={`option-${option.id}`}
                                checked={answers[currentQuestion] === option.id}
                                onChange={() => handleAnswer(option.id)}
                                className="h-4 w-4 text-primary"
                            />
                            <label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer font-medium">
                                {option.text}
                            </label>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="justify-between">
                <Button
                    variant="ghost"
                    disabled={currentQuestion === 0}
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                    Sebelumnya
                </Button>
                <Button onClick={handleNext} disabled={!answers[currentQuestion]}>
                    {currentQuestion === questions.length - 1 ? "Selesai" : "Selanjutnya"}
                </Button>
            </CardFooter>
        </Card>
    );
}
