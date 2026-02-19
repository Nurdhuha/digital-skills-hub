import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Megaphone, BarChart } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Kursus
                        </CardTitle>
                        <Code className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">
                            Jalur tersedia
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Tugas
                        </CardTitle>
                        <Megaphone className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                            Pengumpulan tertunda
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Kemajuan
                        </CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0%</div>
                        <p className="text-xs text-muted-foreground">
                            Penyelesaian keseluruhan
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Jalur Belajar Anda</CardTitle>
                        <CardDescription>
                            Pilih jalur khusus untuk mulai belajar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <Code className="h-8 w-8 text-indigo-600" />
                                    <div>
                                        <p className="font-medium">The Builder</p>
                                        <p className="text-sm text-muted-foreground">Web & App Development</p>
                                    </div>
                                </div>
                                <Link href="/dashboard/courses/builder">
                                    <Button size="sm">Mulai</Button>
                                </Link>
                            </div>
                            <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <Megaphone className="h-8 w-8 text-emerald-500" />
                                    <div>
                                        <p className="font-medium">The Messenger</p>
                                        <p className="text-sm text-muted-foreground">Digital Marketing Strategy</p>
                                    </div>
                                </div>
                                <Link href="/dashboard/courses/messenger">
                                    <Button size="sm">Mulai</Button>
                                </Link>
                            </div>
                            <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <BarChart className="h-8 w-8 text-blue-500" />
                                    <div>
                                        <p className="font-medium">The Analyst</p>
                                        <p className="text-sm text-muted-foreground">Data Analysis & AI</p>
                                    </div>
                                </div>
                                <Link href="/dashboard/courses/analyst">
                                    <Button size="sm">Mulai</Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
