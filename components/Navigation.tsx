"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,} from "@/utils/NavigationMenu" ;
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/utils/Sheets";
import { ScrollArea } from "@/utils/ScrollArea";
import { MenuIcon } from "lucide-react"; 
import { useState } from "react"; 
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (item: { id: string; label: string; href?: string; external?: boolean }) => {
        if (item.href) {
            if (item.external) {
                window.open(item.href, '_blank', 'noopener,noreferrer');
            } else {
                router.push(item.href);
            }
        } else {
            if (pathname.startsWith('/blog') || pathname.startsWith('/ask-ai')) {
                router.push(`/#${item.id}`);
            } else {
                const element = document.getElementById(item.id);
                element?.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsOpen(false);
    };

    const navItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Certifications" },
        { id: "resume", label: "Resume", href: "https://drive.google.com/file/d/1413Z-6qO-Lq5CpeAAe56Prcp6reKMC62/view", external: true },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">
                        Sunil S
                    </Link>
                </div>

                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.id}>
                                    <NavigationMenuLink
                                        className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${item.id === 'resume'
                                            ? 'text-blue-400 relative animate-pulse hover:animate-none bg-blue-400/10 rounded-lg border border-blue-400/30 hover:bg-blue-400/20 hover:border-blue-400/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25'
                                            : ''
                                            }`}
                                        onClick={() => handleNavigation(item)}
                                    >
                                        {item.label}
                                        {item.id === 'resume' && (
                                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                            </span>
                                        )}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                
                <div className="md:hidden flex items-center gap-2">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">
                                <MenuIcon className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
                            <SheetHeader className="flex-shrink-0">
                                <SheetTitle>Navigation</SheetTitle>
                            </SheetHeader>
                            <ScrollArea className="flex-1 -mx-6 px-6">
                                <div className="grid gap-4 py-6">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            className={`justify-start h-12 text-lg font-medium transition-all duration-300 ${item.id === 'resume'
                                                ? 'text-blue-400 bg-blue-400/10 border border-blue-400/30 hover:bg-blue-400/20 hover:border-blue-400/50 animate-pulse hover:animate-none relative'
                                                : ''
                                                }`}
                                            onClick={() => handleNavigation(item)}
                                        >
                                            {item.label}
                                            {item.id === 'resume' && (
                                                <span className="absolute top-2 right-2 flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                    <div className="border-t pt-4 mt-4">
                                        <p className="text-sm text-muted-foreground mb-4">Quick Actions</p>
                                        <div className="space-y-2">
                                            <button
                                                className="w-full justify-start border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
                                                onClick={() => handleNavigation({ id: "contact", label: "Contact" })}
                                            >
                                                Get in Touch
                                            </button>
                                            <button
                                                className="w-full justify-start border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
                                                onClick={() => handleNavigation({ id: "projects", label: "Projects" })}
                                            >
                                                View Projects
                                            </button>
                                            <button
                                                className="w-full justify-start border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
                                                onClick={() => handleNavigation({ id: "resume", label: "Resume", href: "https://drive.google.com/file/d/1413Z-6qO-Lq5CpeAAe56Prcp6reKMC62/view?usp=sharing", external: true })}
                                            >
                                                My CV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}