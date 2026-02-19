"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Clock, Trophy } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

export default function AnalyticsPage() {
    // Mock data animations
    const coursesCompleted = useCountUp(4);
    const learningHours = useCountUp(32);
    const skillsMastered = useCountUp(7);

    return (
        <div className="flex-1 space-y-4 p-4 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Analitik Pembelajaran</h2>
            </div>

            {/* Overview Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Kursus Diselesaikan</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{coursesCompleted}</div>
                        <p className="text-xs text-muted-foreground">+1 dari bulan lalu</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Jam Belajar</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{learningHours} Jam</div>
                        <p className="text-xs text-muted-foreground">+5 jam minggu ini</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Skill Dikuasai</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{skillsMastered}</div>
                        <p className="text-xs text-muted-foreground">Level: Intermediate</p>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Stats / Charts Placeholder */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Aktivitas Belajar</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-end justify-between px-4 gap-2">
                            {/* Simple CSS Bar Chart Mockup */}
                            {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
                                <div key={i} className="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm relative group">
                                    <div
                                        className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-1000 ease-out"
                                        style={{ height: `${h}%` }}
                                    />
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                                        {['Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb', 'Mg'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Progres Kursus Terbaru</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">Web Development</p>
                                    <p className="text-xs text-muted-foreground">Module 4: React Components</p>
                                </div>
                                <div className="font-bold text-sm">75%</div>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">Digital Marketing</p>
                                    <p className="text-xs text-muted-foreground">Module 2: SEO Basics</p>
                                </div>
                                <div className="font-bold text-sm">30%</div>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">Data Analytics</p>
                                    <p className="text-xs text-muted-foreground">Module 1: Introduction</p>
                                </div>
                                <div className="font-bold text-sm">10%</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
