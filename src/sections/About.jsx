import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        desc: "Crafting readable, well-structured code that scales effortlessly and remains easy to maintain."
    },
    {
        icon: Rocket,
        title: "Performance",
        desc: "Building highly optimized applications focused on speed, efficiency, and smooth user interactions."
    },
    {
        icon: Users,
        title: "Collaboration",
        desc: "Partnering with teams to solve problems, align vision, and deliver impactful solutions."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        desc: "Continuously exploring new technologies to build smarter, future-ready products."
    }
]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,
                        <span className="font-change text-primary-foreground italic font-normal"> one component at a time.</span>
                    </h2>
                    
                    {/* Description about me */}
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm a passionate software engineer and full stack developer who enjoys
                            building scalable, real-world applications that create impact. My journey
                            into development began with curiosity and quickly grew into a strong drive
                            for solving complex problems through clean and efficient code.
                        </p>
                        <p>
                            I work across the full stack, developing robust backend systems and
                            responsive, user-friendly interfaces using modern technologies. I focus on
                            writing maintainable code, optimizing performance, and delivering seamless
                            user experiences.
                        </p>
                        <p>
                            I have a strong interest in problem solving and continuously challenge
                            myself through data structures, algorithms, and real-world system design.
                            Outside of coding, I enjoy exploring new technologies and sharpening my
                            skills to grow as a better engineer every day.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 flex items-center">
                        <p className="text-lg font-medium italic text-foreground">
                            "I build reliable, maintainable software by combining strong engineering
                            fundamentals, thoughtful system design, and a deep focus on quality."
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >     
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                              <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
}