import React, {useEffect, useState} from 'react';
import TestimonialCard from "./TestimonialCard";
import ProjectCard from "./ProjectCard";
import confetti from "canvas-confetti";

const CONVERSION_MONTH = 4; // June (0-based index: Jan = 0)
const CONVERSION_DAY = 7;

const launchConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
        confetti({
            particleCount: 5,
            spread: 80,
            origin: { y: 0.6 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    };

    frame();
};

export default function Portfolio() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    useEffect(() => {
        const today = new Date();

        const isSameDay =
            today.getMonth() === CONVERSION_MONTH &&
            today.getDate() === CONVERSION_DAY;

        if (isSameDay) {
            launchConfetti();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., Formspree, EmailJS, or custom API)
        const body = formData.message;

        window.location.href = `mailto:${formData.email}?subject=${encodeURIComponent(
            "Gbenga.dev Message"
        )}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const testimonials = [
        {
            quote: "You will be able to tell immediately that Gbenga is a pro. Cool, calm, collected, and knowledgeable.",
            author: "Wybe Minnebo",
            role: "Sr. SWE, Salacia Solutions"
        },
        {
            quote: "Gbenga was very helpful!! He was able to help us troubleshoot bugs quickly and taught us a lot. Looking forward to another session with him!",
            author: "Alex Chisholm",
            role: "Client, Codementor"
        },
        {
            quote: "Gbenga helped me to refactor my code. He was really fast to solve the issues and learned more about Android and how to implement correctly compose with my code since it was my first time using it in my project. I totally recommend him. He is the best!",
            author: "Jenny Cárdenas",
            role: "Frontend Engineer, Globant"
        },
        {
            quote: "Gbenga is smart, clear, honest, and generous. He helped me write more reliable code and understand that there was a better technical approach to achieving my goals with the overall Android app being built. ",
            author: "Rolando Brown",
            role: "Client, Codementor"
        }
    ];

    const socialMedia = {
        codementor: "https://www.codementor.io/@devmike01",
        github: "https://github.com/devmike01",
        linkedin: "https://www.linkedin.com/in/gbenga-oladipupo-6137a284/",
        stackoverflow: "https://stackoverflow.com/users/5265414/devmike01",
    }

    return (
        <div className="bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 min-h-screen">

            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="#" className="text-xl font-bold tracking-tight text-emerald-400">
                        &lt;gbenga.dev /&gt;
                    </a>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
                        <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
                        <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
                        <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a>
                        <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
                    </nav>
                    <a href="#contact" className="px-4 py-2 text-xs font-semibold text-emerald-400 border border-emerald-400/30 rounded-lg hover:bg-emerald-400/10 transition-all duration-300">
                        Hire Me
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section id="about" className="relative min-h-screen flex items-center overflow-hidden py-24 px-6 bg-slate-950">

                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-center w-full">

                    {/* Left Content */}
                    <div className="lg:col-span-6 xl:col-span-7 space-y-10">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 shadow-inner">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                            <span className="text-slate-300 font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                    Available for Remote Roles
                </span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-white leading-[0.85]">
                                Gbenga <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-500">
                        Oladipupo.
                    </span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed max-w-xl font-light">
                                Building <span className="text-white font-medium">high-concurrency</span> mobile and backend systems. Specialist in Native Android, Flutter, Kotlin Multiplatform, Django and Spring Boot.
                            </p>
                        </div>

                        {/* CTA & Socials Row */}
                        {/* CTA & Socials Row */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
                            <button className="group relative px-10 py-5 bg-white text-slate-950 font-bold rounded-2xl transition-all hover:bg-emerald-400 active:scale-95 overflow-hidden shadow-2xl shadow-emerald-500/10"
                            onClick={() => {
                                window.location.href = '#contact';
                            }}>
                                <span className="relative z-10 text-lg">Work With Me</span>
                            </button>

                            <div className="flex items-center gap-5 border-l border-slate-800 pl-8 h-12">
                                {/* GitHub */}
                                <a href={socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" title="GitHub">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>

                                {/* Stack Overflow */}
                                <a href={socialMedia.stackoverflow} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#F48024] transition-colors" title="Stack Overflow">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.986 21.867v-6.404h2.155v8.551H1.887v-8.551h2.155v6.404h14.944zm-14.513-4.505l10.603.011l.002-2.154l-10.603-.011l-.002 2.154zm1.347-8.324l.875-1.971l9.467 4.2l-.875 1.971l-9.467-4.2zm3.12-4.943l1.43-1.61L17.77 10.11l-1.43 1.61L8.94 4.095zm5.29-3.52l1.835-1.126l5.805 9.452l-1.835 1.127L14.23.575zm-9.34 11.597l10.855 2.263l-.431 2.098l-10.854-2.263l.43-2.098z"/></svg>
                                </a>

                                {/* Codementor */}
                                <a href={socialMedia.codementor} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#4B968E] transition-colors" title="Codementor">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.65 1.5c-1.37 0-2.43.34-3.18.91-.7.54-1.12 1.35-1.12 2.3 0 1.05.51 1.9 1.4 2.4l-.4.7c-.55.95-.55 2.1 0 3.05l.4.7c-.89.5-1.4 1.35-1.4 2.4 0 .95.42 1.76 1.12 2.3.75.57 1.81.91 3.18.91s2.43-.34 3.18-.91c.7-.54 1.12-1.35 1.12-2.3 0-1.05-.51-1.9-1.4-2.4l.4-.7c.55-.95.55-2.1 0-3.05l-.4-.7c.89-.5 1.4-1.35 1.4-2.4 0-.95-.42-1.76-1.12-2.3-.75-.57-1.81-.91-3.18-.91zM7.22 1.76c-.46 0-.85.34-.9.8l-.8 7.3c-.05.46.26.88.72.93s.88-.26.93-.72l.8-7.3c.05-.46-.26-.88-.72-.93h-.03zM3.4 3.42c-.4-.25-.93-.13-1.18.27s-.13.93.27 1.18l6.3 3.93c.15.1.33.15.5.15s.35-.05.5-.15c.4-.25.52-.78.27-1.18L3.4 3.42zm.03 12.3c-.4.25-.52.78-.27 1.18l6.3 3.93c.15.1.33.15.5.15s.35-.05.5-.15c.4-.25.13-.93-.27-1.18l-6.3-3.93c-.4-.25-.93-.13-1.18.27zM7.19 21c-.46.05-.77.47-.72.93.05.46.47.77.93.72l7.3-.8c.46-.05.77-.47.72-.93s-.47-.77-.93-.72l-7.3.8z"/>
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077B5] transition-colors" title="LinkedIn">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-6 xl:col-span-5 relative">
                        <div className="absolute top-12 -left-8 z-30 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-5 py-3 rounded-2xl shadow-2xl transform -rotate-6">
                            <p className="text-xs font-mono font-bold text-emerald-400 tracking-widest">SR. ENGINEER</p>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/20 to-teal-500/20 rounded-[3rem] blur-2xl group-hover:opacity-60 transition duration-1000"></div>

                            <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <div className="aspect-[4/5] w-full">
                                    <img
                                        src="/gbenga.heif"
                                        alt="Gbenga"
                                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                    />
                                </div>

                                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-10 flex flex-col justify-end">
                                    <div className="flex justify-between items-end border-t border-white/10 pt-6">
                                        <div className="space-y-1">
                                            <span className="block text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest">Stack</span>
                                            <span className="block text-white text-sm font-medium leading-none">Native Android / Flutter / KMP / Spring</span>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <span className="block text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest">Based In</span>
                                            <span className="block text-white text-sm font-medium leading-none">Lagos, NG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="h-[1px] w-8 bg-emerald-500"></div>
                                <span className="text-emerald-400 font-mono text-xs font-bold tracking-[0.3em] uppercase">Archive 2022-2026</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
                                Selected <span className="text-slate-500">Works.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-xs text-sm leading-relaxed border-l border-slate-800 pl-6">
                            Engineering-focused solutions ranging from <span className="text-slate-200">offline payment infrastructure</span> to enterprise-grade security SDKs.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard
                            title="InaRead"
                            description="A mobile app that helps you understand your electricity meter readings, track shared usage, and reduce energy costs."
                            tags={["Springboot", "Android", "Architecture"]}
                            link="https://play.google.com/store/apps/details?id=dev.gbenga.inaread"
                        />
                        <ProjectCard
                            title="PageStepIndicator"
                            description="A highly customizable step indicator UI library with support for titles, labels, progress states, and flexible styling options — designed to create smooth and intuitive multi-step user experiences."
                            tags={["Android", "Android SDK", "Kotlin"]}
                            link="https://github.com/devmike01/PageStepIndicator"
                        />
                        <ProjectCard
                            title="JadeSharedPreference"
                            description="A light weight library which uses annotation processing to generate codes that let you read and write to SharedPreferences file on Android"
                            tags={["Android", "Android SDK", "Kotlin"]}
                            link="https://github.com/devmike01/JadeSharedPreference"
                        />
                    </div>
                </div>
            </section>



            {/* Scrolling Testimonials Section */}
            <section id="testimonials" className="relative py-24 bg-slate-950 overflow-hidden">
                {/* Decorative Background: Engineer Grid */}
                <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 mb-16">
                    <div className="flex flex-col items-center text-center">
            <span className="px-3 py-1 text-xs font-mono font-medium tracking-widest text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                Testimonials
            </span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Trusted by <span className="text-emerald-400">visionaries.</span>
                        </h2>
                        <p className="mt-4 text-slate-400 max-w-2xl text-lg">
                            Collaborating with teams to turn complex technical challenges into elegant, scalable codebases.
                        </p>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="relative flex flex-col gap-6 w-full">
                    {/* Edge Fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

                    {/* Row 1: Moving Left */}
                    <div className="animate-marquee flex gap-6 whitespace-nowrap">
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <TestimonialCard key={index} item={item} />
                        ))}
                    </div>

                </div>
            </section>




            {/* Contact Form */}
            <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Info */}
                    <div className="md:col-span-5 space-y-6">
                        <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase block">Get In Touch</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Let's build something epic together.</h2>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Have an interesting project or architecture puzzle you want solved? Drop me a message, and let's get down to business.
                        </p>
                        <div className="space-y-3 font-mono text-xs text-slate-400">
                            <p><span className="text-emerald-400">EMAIL:</span>michaelgbenga91@gmail.com</p>
                            <p><span className="text-emerald-400">LOCATION:</span> Global / Remote</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="md:col-span-7 bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 shadow-xl">
                        <div>
                            <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">Your Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Brief details about your project..."
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm py-3 px-4 rounded-lg transition-colors shadow-lg shadow-emerald-500/10">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-900 py-12 px-6 bg-slate-950 text-slate-500 text-xs">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>© 2026 devmike01. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href={socialMedia.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
                        <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
                        <a href={socialMedia.stackoverflow} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">StackOverflow</a>
                        <a href={socialMedia.codementor} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">CodeMentor</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}
