import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/50 mesh-bg py-12">
            <Card className="w-full max-w-md glass-card">
                <CardHeader className="space-y-1">
                    <Link href="/" className="flex items-center gap-2 mb-4 text-sm text-muted-foreground hover:text-primary">
                        <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
                    </Link>
                    <CardTitle className="text-2xl font-bold">Buat Akun Baru</CardTitle>
                    <CardDescription>
                        Bergabunglah dengan komunitas belajar kami hari ini.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">Nama Depan</Label>
                            <Input id="first-name" placeholder="Budi" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Nama Belakang</Label>
                            <Input id="last-name" placeholder="Santoso" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="nama@contoh.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                        <Input id="confirm-password" type="password" required />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Link href="/dashboard" className="w-full">
                        <Button className="w-full">Daftar</Button>
                    </Link>
                    <p className="text-center text-sm text-muted-foreground">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="text-primary hover:underline font-medium">
                            Masuk di sini
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
