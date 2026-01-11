import { Button } from "@/components/Button";
import { ArrowRight,ChevronDown, Download, Github, Instagram, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = ["C++", "Data Structures", "HTML", "CSS", "Javascript", "Bootstrap", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MySQL", "SQL", "Jest", "Git", "Github", "REST APIs", "Postman", "Vercel", "Render", "Linux"]

export const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/hero-image.jpg"
                    alt="Hero Image"
                    className="w-full h-full object-cover opacity-40 rotate-180"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Violet Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-50"
                        style={{
                            backgroundColor: "#8a2be2",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15+ Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() *5}s` 
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Colummn - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Full Stack Web Developer
                            </span>
                        </div>
                        {/* main-line */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Turning <span className="text-primary glow-text">Ideas</span>
                                <br />
                                into refined
                                <span className="font-change italic font-normal text-white"> Digital Experiences</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Tanish Jangra — a Full-Stack Developer crafting robust backend systems and intuitive frontends using React, Node.js, and Express.js. I focus on performance, scalability, and real-world impact.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm">Follow me:</span>
                            {[
                                { icon: Github, href: "https://github.com/tanish0007" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/tanish-jangra-16a4a622a/" },
                                { icon: Instagram, href: "https://www.instagram.com/tanishjangra07"},
                            ].map((social, index) => (
                                <a key={index} href={social.href} className="border-4 p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" >{<social.icon className="w-5 h-5" />}</a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image Section */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image Box */}
                        <div className="relative max-w-md mx-auto">
                            <div
                            className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparentto-primary/10 blur-2xl animate-pulse" />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/developer.jpg" alt="Tanish Jangra"
                                    className="w-full aspec-[4/5] oject-cover rounded-2xl"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Open to work
                                        </span>
                                    </div>
                                </div>
                                {/* Stats badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 flex flex-col items-center">
                                    <div className="text-2xl font-bold text-primary">2+</div>
                                    <div className="text-xs text-white">Years Exp.</div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">My Tech Stack</p>
                    <div className="relative overflow-hidden">
                        <div
                          className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10"
                        />
                        <div
                          className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10"
                        />
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll-down */}

            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div> */}
        </section>
    );
};