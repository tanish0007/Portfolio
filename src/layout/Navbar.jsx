const navLinks = [
    { href:  "#about", label: "About" },
    { href:  "#experience", label: "Experience" },
    { href:  "#projects", label: "Projects" },
    { href:  "#testimonials", label: "Testimonials" },
    { href:  "#contact", label: "Contact Me" }
]

export const Navbar = () => {
    return (<header>
        <nav>
            <a href="#">{"<Tanish Jangra />"}</a>
            <div>
                <div>
                    {
                        navLinks.map((link, index) => {
                            <a href={link.href} key={index}>{link.label}</a>
                        })
                    }
                </div>
            </div>
        </nav>
    </header>)
}