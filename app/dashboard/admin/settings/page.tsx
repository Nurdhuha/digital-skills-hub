import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function AdminSettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Pengaturan Admin</h1>
                <p className="text-muted-foreground">
                    Konfigurasi sistem global.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Pendaftaran</CardTitle>
                    <CardDescription>
                        Kontrol akses pendaftaran pengguna baru.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <Label className="text-base">Pendaftaran Terbuka</Label>
                            <p className="text-sm text-muted-foreground">
                                Izinkan pengguna baru mendaftar dari halaman depan.
                            </p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notifikasi Sistem</CardTitle>
                    <CardDescription>
                        Kirim notifikasi ke semua pengguna.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Judul Pengumuman</Label>
                        <Input placeholder="Contoh: Pemeliharaan Sistem" />
                    </div>
                    <div className="space-y-2">
                        <Label>Pesan</Label>
                        <Input placeholder="Pesan yang akan dikirim..." />
                    </div>
                    <Button>Kirim Pengumuman</Button>
                </CardContent>
            </Card>
        </div>
    );
}
