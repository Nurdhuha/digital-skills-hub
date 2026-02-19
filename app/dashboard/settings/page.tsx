"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Lock, User } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="flex-1 space-y-4 p-4 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Pengaturan</h2>
            </div>

            <Tabs defaultValue="profile" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="profile">Profil</TabsTrigger>
                    <TabsTrigger value="account">Akun</TabsTrigger>
                    <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profil Pengguna</CardTitle>
                            <CardDescription>
                                Kelola informasi publik profil Anda.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input id="name" defaultValue="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Input id="bio" placeholder="Ceritakan sedikit tentang Anda" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Simpan Perubahan</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="account" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Keamanan Akun</CardTitle>
                            <CardDescription>
                                Perbarui kata sandi dan amankan akun Anda.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current">Kata Sandi Saat Ini</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new">Kata Sandi Baru</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline">Perbarui Kata Sandi</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preferensi Notifikasi</CardTitle>
                            <CardDescription>
                                Atur notifikasi apa saja yang ingin Anda terima.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="marketing" className="flex flex-col space-y-1">
                                    <span>Email Marketing</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        Terima email tentang produk baru, fitur, dan lainnya.
                                    </span>
                                </Label>
                                <Switch id="marketing" />
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="updates" className="flex flex-col space-y-1">
                                    <span>Update Kursus</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        Dapatkan notifikasi saat materi baru ditambahkan.
                                    </span>
                                </Label>
                                <Switch id="updates" defaultChecked />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
