import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/50 mesh-bg">
            <Card className="w-full max-w-md glass-card">
                <CardHeader className="space-y-1">
                    <Link href="/" className="flex items-center gap-2 mb-4 text-sm text-muted-foreground hover:text-primary">
                        <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
                    </Link>
                    <CardTitle className="text-2xl font-bold">Masuk ke Akun Anda</CardTitle>
                    <CardDescription>
                        Masukkan email dan password Anda untuk mengakses dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="nama@contoh.com" required />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="text-xs text-primary hover:underline">
                                Lupa password?
                            </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Link href="/dashboard" className="w-full">
                        <Button className="w-full">Masuk</Button>
                    </Link>
                    <p className="text-center text-sm text-muted-foreground">
                        Belum punya akun?{" "}
                        <Link href="/register" className="text-primary hover:underline font-medium">
                            Daftar Sekarang
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
