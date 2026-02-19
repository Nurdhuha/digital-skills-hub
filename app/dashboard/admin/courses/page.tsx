import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

export default function AdminCoursesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Kelola Kursus</h1>
                    <p className="text-muted-foreground">
                        Buat dan kelola materi kursus.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Buat Kursus Baru
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Daftar Kursus</CardTitle>
                    <CardDescription>
                        3 Kursus Aktif.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Judul Kursus</TableHead>
                                <TableHead>Kategori</TableHead>
                                <TableHead>Siswa</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">The Builder: Fullstack Dev</TableCell>
                                <TableCell>Programming</TableCell>
                                <TableCell>45</TableCell>
                                <TableCell>Published</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">Edit</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">The Messenger: Digital Marketing</TableCell>
                                <TableCell>Marketing</TableCell>
                                <TableCell>32</TableCell>
                                <TableCell>Published</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">Edit</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">The Analyst: Data Science</TableCell>
                                <TableCell>Data</TableCell>
                                <TableCell>28</TableCell>
                                <TableCell>Published</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">Edit</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
