import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t glass py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:h-24 md:flex-row px-4 md:px-6">
                <div className="flex flex-col items-center gap-2 px-8 md:flex-row md:gap-4 md:px-0">
                    <span className="font-bold text-lg"><span className="text-primary">Digital</span> Skills Hub</span>
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left hidden md:block">
                        &copy; {new Date().getFullYear()} Dibangun untuk Dampak SDG.
                    </p>
                </div>
                <div className="flex gap-6">
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Kebijakan Privasi
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Syarat Layanan
                    </Link>
                </div>
                <p className="text-center text-sm leading-loose text-muted-foreground md:hidden">
                    &copy; {new Date().getFullYear()} Dibangun untuk Dampak SDG.
                </p>
            </div>
        </footer>
    );
}
