"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, LogIn, MessageSquare, User } from "lucide-react"
import Link from "next/link"

export function Header() {
    // TODO: Replace with actual auth state
    const isAuthenticated = false

    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
                    Intelligent Doc Processor
                </Link>
                
                {isAuthenticated ? (
                    <nav className="hidden md:flex items-center gap-6">
                        <Link 
                            href="/chat" 
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <MessageSquare className="h-4 w-4" />
                            Chat
                        </Link>
                        <Link 
                            href="/documents" 
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <FileText className="h-4 w-4" />
                            Documents
                        </Link>
                        <Link 
                            href="/dashboard" 
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <BarChart3 className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                    <User className="h-4 w-4" />
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </nav>
                ) : (
                    <nav className="flex items-center gap-4">
                        <Button variant="ghost" asChild>
                            <Link href="/login">
                                <LogIn className="h-4 w-4 mr-2" />
                                Sign in
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">
                                Get started
                            </Link>
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    )
}