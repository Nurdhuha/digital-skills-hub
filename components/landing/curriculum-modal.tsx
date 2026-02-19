"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ScrollText } from "lucide-react";

interface CurriculumModalProps {
    title: string;
    description: string;
    skills: string[];
    triggerText: string;
    triggerClassName?: string;
}

export function CurriculumModal({ title, description, skills, triggerText, triggerClassName }: CurriculumModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className={triggerClassName}>
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                        <ScrollText className="h-6 w-6 text-primary" />
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">Apa yang akan Anda pelajari:</h4>
                    <ul className="grid gap-3">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                                <span className="font-medium">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-end">
                    <Button onClick={() => window.location.href = '/register'}>
                        Daftar Sekarang
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
