import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href:  "#about", label: "About" },
    { href:  "#experience", label: "Experience" },
    { href:  "#projects", label: "Projects" },
    { href:  "#testimonials", label: "Testimonials" },
    { href:  "#contact", label: "Contact Me" }
]

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (<header className="fixed glass top-0 left-0 right-0 bg-[#00000095] py-5 z-90">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight text-primary">{"<Tanish Jangra />"}</a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {
                        navLinks.map((link, index) => {
                            return (<a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface hover:rounded-full">
                                {link.label}
                            </a>)
                        })
                    }
                </div>
            </div>

            {/* Button */}
            <div className="hidden md:block">
                <Button size="sm">Contact Me</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                { isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
        </nav>

        {/* Mobile Menu */}
            { isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {
                            navLinks.map((link, index) => {
                                return (<a 
                                    href={link.href} 
                                    key={index} 
                                    className="text-lg text-muted-foreground hover:text-foreground py-2"
                                    >
                                    {link.label}
                                </a>)
                            }) 
                        }
                        <Button size="sm">Contact Me</Button>
                    </div>
            </div>
            )}
    </header>)
}