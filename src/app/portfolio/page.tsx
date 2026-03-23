'use client';

import AgeCounter from '@/components/AgeCounter';
import BlogCard from '@/components/BlogCard';
import CTAButtons from '@/components/CTAButtons';
import GitHubContributions from '@/components/GitHubContributions';
import ProjectCard from '@/components/ProjectCard';
import RotatingTitle from '@/components/RotatingTitle';
import SkillBadges from '@/components/SkillBadges';
import SmoothScroll from '@/components/SmoothScroll';
import ThemeToggle from '@/components/ThemeToggle';
import VisitorCounter from '@/components/VisitorCounter';
import { blogs } from '@/data/blogs';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PortfolioPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headingFont = { fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace", fontWeight: 600 };
    const geistMonoFont = { fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace" };

    return (
        <SmoothScroll>
            <div className="min-h-screen text-page-text overflow-y-auto overflow-x-hidden relative z-[2]" style={geistMonoFont}>
                <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out" style={{ filter: isLoaded ? 'none' : 'blur(20px)', opacity: isLoaded ? 1 : 0 }}>
                    <div
                        className="flex items-center gap-8 px-6 py-3 rounded-xl"
                        style={{
                            background: 'var(--theme-nav-bg)',
                            backdropFilter: 'blur(32px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(32px) saturate(150%)',
                            border: '1px solid var(--theme-nav-border)',
                            boxShadow: 'var(--theme-nav-shadow)',
                        }}
                    >
                        <div className="relative nav-avatar-wrapper group">
                            <Link 
                                href={scrolled ? "#" : "https://nrjdalal.com"}
                                onClick={(e) => {
                                    if (scrolled) {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                            >
                                <img
                                    src="/images/nrjdalal.png"
                                    alt="Avatar"
                                    className="w-8 h-8 min-w-[32px] min-h-[32px] rounded-sm object-cover cursor-pointer shrink-0"
                                />
                            </Link>
                            {!scrolled && (
                                <div className="personal-space-tooltip hidden md:block absolute top-[90%] -translate-y-1/2 right-full z-[100]">
                                    <div className="pr-4">
                                        <Link
                                            href="https://nrjdalal.com"
                                            className="flex items-center gap-1.5 whitespace-nowrap hover:text-theme-primary text-theme-secondary transition-colors"
                                        >
                                            <span className="flex flex-col items-center">
                                                <span
                                                    className="tooltip-text"
                                                    style={{
                                                        fontFamily: "var(--font-dancing), 'Dancing Script', cursive",
                                                        fontSize: '21px',
                                                        letterSpacing: '0.5px',
                                                    }}
                                                >
                                                    check out my personal space!
                                                </span>
                                                <span
                                                    className="text-theme-muted text-[11px] tracking-wider"
                                                    style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace" }}
                                                >
                                                    (under construction)
                                                </span>
                                            </span>
                                            <svg className="arrow-svg flex-shrink-0" width="55" height="30" viewBox="0 0 70 38" fill="none">
                                                <path
                                                    className="arrow-path"
                                                    d="M2 32 C 10 30, 18 26, 26 20 C 36 12, 46 5, 56 2"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                                <polygon className="arrow-head" points="54,0 65,0 56,8" fill="currentColor" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link href="/portfolio/projects" className="text-sm text-theme-secondary hover:text-theme-primary transition-colors">
                            projects
                        </Link>
                        <Link href="/portfolio/blogs" className="text-sm text-theme-secondary hover:text-theme-primary transition-colors">
                            blog
                        </Link>
                        <ThemeToggle />
                    </div>
                </nav>
                <main
                    className="relative transition-all duration-700 ease-out"
                    style={{
                        filter: isLoaded ? 'blur(0px)' : 'blur(20px)',
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
                    }}
                >


                    <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">
                        <div className="mb-16">
                            <div className="relative mb-8 flex gap-4">
                                <div className="absolute top-0 right-0 z-10">
                                    <VisitorCounter />
                                </div>
                                <img
                                    src="/images/nrjdalal.png"
                                    alt="Avatar"
                                    className="w-24 h-24 rounded-sm object-cover shrink-0 mt-1"
                                    style={{ boxShadow: 'var(--theme-avatar-shadow)' }}
                                />
                                <div className="flex flex-col justify-start">
                                    <h1 className="text-2xl md:text-3xl text-theme-primary tracking-wide mb-1 pr-14 md:pr-0" style={headingFont}>
                                        Neeraj Dalal
                                    </h1>
                                    <RotatingTitle />
                                    <AgeCounter />
                                </div>
                            </div>

                            <div className="text-theme-secondary text-sm leading-relaxed mb-8">
                                <p className="mb-3">i build products across frontend, backend, automation, and cloud infrastructure. i care about performance, reliability, and shipping useful things.</p>
                                <p>outside work, i write technical blogs, contribute to open source, and keep exploring better developer workflows.</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-theme-muted">
                                <a href="https://github.com/nrjdalal" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="GitHub">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/nrjdalal" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="https://discord.com/users/nrjdalal" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="Discord">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                                </a>
                                <a href="mailto:nd941z@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="Gmail">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>

                            <CTAButtons />

                            <div className="mt-12 mb-8">
                                <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Skills</h2>
                                <SkillBadges />
                            </div>
                        </div>

                        <section id="projects" className="mb-16">
                            <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Projects</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {projects.slice(0, 2).map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>

                            <div className="flex justify-center mt-6">
                                <Link
                                    href="/portfolio/projects"
                                    className="group text-sm text-theme-muted hover:text-theme-primary px-4 py-2 rounded-lg border border-theme-divider hover:border-theme-card-hover-border hover:bg-theme-card transition-all flex items-center gap-2"
                                >
                                    <span className="animated-underline">View All</span>
                                    <svg className="w-4 h-4 view-all-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </Link>
                            </div>
                        </section>

                        <section className="mb-16">
                            <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Stats</h2>
                            <GitHubContributions username="nrjdalal" />
                        </section>

                        <section id="blog" className="mb-16">
                            <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Blogs</h2>

                            <div className="space-y-4">
                                {blogs.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))}
                            </div>

                            <div className="flex justify-center mt-6">
                                <Link
                                    href="/portfolio/blogs"
                                    className="group text-sm text-theme-muted hover:text-theme-primary px-4 py-2 rounded-lg border border-theme-divider hover:border-theme-card-hover-border hover:bg-theme-card transition-all flex items-center gap-2"
                                >
                                    <span className="animated-underline">View All</span>
                                    <svg className="w-4 h-4 view-all-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </Link>
                            </div>
                        </section>

                        <div className="mt-16 relative">
                            <div
                                className="absolute inset-0 pointer-events-none z-10"
                                style={{
                                    background: `linear-gradient(to bottom, var(--theme-gradient-overlay) 0%, transparent 30%, transparent 70%, var(--theme-gradient-overlay) 100%)`
                                }}
                            />
                            <img
                                src="/images/itachi-uchiha.png"
                                alt="Itachi Uchiha"
                                className="w-full h-48 object-cover object-center opacity-60"
                            />
                            <p
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-theme-muted text-lg tracking-wider z-20"
                                style={{ fontFamily: "var(--font-dancing), 'Dancing Script', cursive" }}
                            >
                                "nothing is permanent, yet code remains"
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </SmoothScroll>
    );
}
