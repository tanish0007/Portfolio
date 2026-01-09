import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        desc: "Writing maintainable, scalable code that stands the test of time."
    },
    {
        icon: Rocket,
        title: "Performance",
        desc: "Optimizing for speed and delivering lightning-fast user experiences."
    },
    {
        icon: Users,
        title: "Collaboration",
        desc: "Working closely with teams to bring ideas to life."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        desc: "Staying ahead with the latest technologies and best practices."
    }
]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Column */}
                <div>
                    <span>About Me</span>
                </div>

                <h2>
                    Building the future,
                    <span> one component at a time.</span>
                </h2>
            </div>
        </div>
    </section>
}