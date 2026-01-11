import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { href:  "#", label: "Home" },
    { href:  "#about", label: "About" },
    { href:  "#projects", label: "Projects" },
    { href:  "#experience", label: "Experience" },
    { href:  "#testimonials", label: "Testimonials" },
    { href:  "#contact", label: "Contact Me" },
]

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
    <header className={`fixed glass top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "bg-[#00000095] py-4" : "bg-transparent py-5"} z-50 border-0`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight text-white">
                <span className="text-primary">{"<"}</span>{" Tanish Jangra "}<span className="text-primary">{"/>"}</span>
            </a>

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
                <div className="md:hidden absolute top-full right-0 glass-strong animate-fade-in border-0">
                    <div className="container px-4 py-4 flex flex-col gap-2">
                        {
                            navLinks.map((link, index) => {
                                return (<a 
                                    href={link.href} 
                                    key={index} 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg min-w-70  text-muted-foreground hover:text-foreground hover:bg-black py-6 text-center rounded-full"
                                    >
                                    {link.label}
                                </a>)
                            }) 
                        }
                        <Button onClick={() => setIsMobileMenuOpen(false)} size="lg">Contact Me</Button>
                    </div>
            </div>
            )}
    </header>)
}