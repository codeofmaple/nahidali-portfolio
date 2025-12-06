import { motion } from 'framer-motion';
import { SiExpress, SiMongodb, SiGit, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiFirebase } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Firebase', icon: <SiFirebase /> },
    ];

    // Duplicate for seamless loop
    const marqueeItems = [...skills, ...skills, ...skills];

    return (
        <section id="skills" className="py-20 px-4 overflow-hidden bg-brand-dark/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Technical <span className="text-custom-cyan">Skills</span></h2>
                </motion.div>

                {/* Infinite Marquee */}
                <div className="relative flex overflow-x-hidden mb-16 group">
                    {/* The 'animate-scroll' class is defined in index.css */}
                    <div className="animate-scroll flex space-x-8 group-hover:[animation-play-state:paused] w-max">
                        {marqueeItems.map((skill, index) => (
                            <div key={index} className="flex items-center gap-2 bg-brand-card border border-brand-border px-6 py-3 rounded-lg text-brand-text min-w-[150px] justify-center hover:border-custom-cyan transition-colors">
                                <span className="text-2xl text-custom-cyan">{skill.icon}</span>
                                <span className="font-semibold text-lg">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Gradient Fade Edges */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-custom-dark-blue to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-custom-dark-blue to-transparent z-10"></div>
                </div>

                {/* Detailed Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCard title="Frontend" icon={<SiReact className="text-blue-400" />}
                        tags={['JavaScript (ES6+)', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']} />
                    <SkillCard title="Backend" icon={<SiNodedotjs className="text-green-500" />}
                        tags={['Node.js', 'Express.js', 'REST API', 'JWT', 'MongoDB']} />
                    <SkillCard title="Tools" icon={<SiGit className="text-orange-500" />}
                        tags={['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify']} />
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ title, icon, tags }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-brand-card border border-brand-border rounded-xl p-6 hover:shadow-glow-cyan/20 transition-all duration-300"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="text-3xl">{icon}</div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="bg-brand-dark/60 text-gray-300 px-3 py-1.5 rounded-md text-sm border border-brand-border hover:border-custom-cyan hover:text-white transition-colors">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

export default Skills;