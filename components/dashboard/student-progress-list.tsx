import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Assuming Table component exists or I need to create it. I'll check components/ui first or create table.tsx. Actually Table is standard shadcn so likely missing.
// I'll implement a simple table structure first to avoid dependency issues if table.tsx is missing, or create table.tsx.
// Let's create `table.tsx` next if needed. For now I will standard HTML table styled with tailwind.

export function StudentProgressList() {
    const students = [
        {
            name: "Budi Santoso",
            email: "budi@example.com",
            course: "The Builder",
            progress: 75,
            status: "Active",
            lastActive: "2 jam lalu"
        },
        {
            name: "Siti Aminah",
            email: "siti@example.com",
            course: "The Messenger",
            progress: 30,
            status: "Active",
            lastActive: "1 hari lalu"
        },
        {
            name: "Rizky Pratama",
            email: "rizky@example.com",
            course: "The Analyst",
            progress: 90,
            status: "Completed",
            lastActive: "3 hari lalu"
        },
        {
            name: "Dewi Lestari",
            email: "dewi@example.com",
            course: "The Builder",
            progress: 10,
            status: "Inactive",
            lastActive: "1 minggu lalu"
        },
        {
            name: "Andi Wijaya",
            email: "andi@example.com",
            course: "The Analyst",
            progress: 55,
            status: "Active",
            lastActive: "5 jam lalu"
        },
    ];

    return (
        <div className="w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
                <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Siswa</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Kursus</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Progress</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Terakhir Aktif</th>
                    </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                    {students.map((student) => (
                        <tr key={student.email} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} alt={student.name} />
                                        <AvatarFallback>{student.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">{student.name}</div>
                                        <div className="text-xs text-muted-foreground">{student.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 align-middle">{student.course}</td>
                            <td className="p-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary transition-all" style={{ width: `${student.progress}%` }} />
                                    </div>
                                    <span className="text-xs font-medium">{student.progress}%</span>
                                </div>
                            </td>
                            <td className="p-4 align-middle">
                                <Badge variant={student.status === 'Active' ? 'default' : student.status === 'Completed' ? 'secondary' : 'outline'}>
                                    {student.status === 'Active' ? 'Aktif' : student.status === 'Completed' ? 'Selesai' : 'Tidak Aktif'}
                                </Badge>
                            </td>
                            <td className="p-4 align-middle text-right">{student.lastActive}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
