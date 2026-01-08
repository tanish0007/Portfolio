import { Button } from "@/components/Button";

const navLinks = [
    { href:  "#about", label: "About" },
    { href:  "#experience", label: "Experience" },
    { href:  "#projects", label: "Projects" },
    { href:  "#testimonials", label: "Testimonials" },
    { href:  "#contact", label: "Contact Me" }
]

export const Navbar = () => {
    return (<header className="fixed top-0 left-0 right-0 bg-transparent py-5">
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
            <button className="md:hidden p-2 text-foreground">

            </button>
        </nav>
    </header>)
}