"use client";

import { useEffect } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar";
import { BarChart, BookOpen, Home, Settings, Upload, Users, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items for Standard Users
const userItems = [
    {
        title: "Dasbor",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Kursus Saya",
        url: "/dashboard/courses",
        icon: BookOpen,
    },
    {
        title: "Pengumpulan",
        url: "/dashboard/submissions",
        icon: Upload,
    },
    {
        title: "Analitik",
        url: "/dashboard/analytics",
        icon: BarChart,
    },
    {
        title: "Pengaturan",
        url: "/dashboard/settings",
        icon: Settings,
    },
];

// Menu items for Admin Users
const adminItems = [
    {
        title: "Admin Dasbor",
        url: "/dashboard/admin",
        icon: Shield,
    },
    {
        title: "Kelola Pengguna",
        url: "/dashboard/admin/users",
        icon: Users,
    },
    {
        title: "Kelola Kursus",
        url: "/dashboard/admin/courses",
        icon: BookOpen,
    },
    {
        title: "Pengaturan Admin",
        url: "/dashboard/admin/settings",
        icon: Settings,
    },
    {
        title: "Kembali ke User",
        url: "/dashboard",
        icon: Home,
    },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const { setOpenMobile, isMobile } = useSidebar();
    const isAdmin = pathname?.startsWith("/dashboard/admin");

    // Close sidebar on mobile when route changes
    useEffect(() => {
        if (isMobile) {
            setOpenMobile(false);
        }
    }, [pathname, isMobile, setOpenMobile]);

    const items = isAdmin ? adminItems : userItems;
    const label = isAdmin ? "Administrator" : "Menu Utama";

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <div className="flex items-center px-4 py-2">
                    <span className="font-bold text-xl"><span className="text-primary">Digital</span> Skills Hub</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{label}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
