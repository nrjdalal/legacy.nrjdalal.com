'use client';

import {
    SiDocker,
    SiExpress,
    SiFigma,
    SiGit,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

const skills = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Redis', icon: SiRedis },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Docker', icon: SiDocker },
    { name: 'Postman', icon: SiPostman },
    { name: 'Figma', icon: SiFigma },
];

export default function SkillBadges() {
    return (
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                    <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-theme-badge-border bg-theme-badge-bg text-theme-badge-text text-xs hover:bg-theme-card-hover transition-colors"
                    >
                        <Icon className="w-3 h-3" />
                        {skill.name}
                    </span>
                );
            })}
        </div>
    );
}
