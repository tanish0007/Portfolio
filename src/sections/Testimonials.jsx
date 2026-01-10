import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        quote:
            "Tanish explains technical concepts in a very simple and practical way. Whether it was JavaScript, React, or backend basics, his explanations made learning much easier.",
        author: "Parshant Yadav",
        role: "Student, Bachelor of Commerce",
        avatar:
            "/avatars/parshant.jpeg",
    },
    {
        quote:
            "What sets Tanish apart is his problem-solving approach. He analyzes issues deeply before writing code, which results in cleaner logic and better performance. His guidance during projects was extremely helpful.",
        author: "Muskan Singh",
        role: "Student, Master of Computer Application (KUK)",
        avatar:
            "/avatars/muskan.png",
    },
    {
        quote:
            "Tanish has a very strong understanding of full-stack development concepts. His way of designing backend APIs and connecting them seamlessly with the frontend helped me understand how real-world applications are built.",
        author: "Amit Saini",
        role: "Student, Master of Computer Application (KUK)",
        avatar:
            "/avatars/amit.jpg",
    },
    {
        quote:
            "I learned a lot by observing how Tanish approaches real-world projects. His focus on clean code and best practices inspired me to improve my own development skills.",
        author: "Manish Goswami",
        role: "Student, Bachelor of Commerce (Honours)",
        avatar:
            "/avatars/manish.jpeg",
    },
    {
        quote:
            "Tanish is highly consistent and detail-oriented in his work. From database design to UI implementation, he maintains quality throughout the project. Working with him improved my understanding of scalable application development.",
        author: "Devang Mittal",
        role: "Student, Master of Computer Application (KUK)",
        avatar:
            "/avatars/devang.png",
    },
    
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2
       w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div
                className="container mx-auto 
      px-6 relative z-10"
            >
                {/* Section Header */}
                <div
                    className="text-center max-w-3xl 
        mx-auto mb-16"
                >
                    <span
                        className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
                    >
                        What People Say
                    </span>
                    <h2
                        className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
                    >
                        Kind words from{" "}
                        <span
                            className="font-serif italic 
            font-normal text-white"
                        >
                            amazing people.
                        </span>
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 right-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[activeIdx].avatar}
                                    alt={testimonials[activeIdx].author}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div>
                                    <div className="font-semibold">
                                        {testimonials[activeIdx].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={previous}
                            >
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        onClick={() => setActiveIdx(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                                                ? "w-8 bg-primary"
                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};