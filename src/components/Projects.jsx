import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'ToyTopia',
            desc: 'A modern toy marketplace with interactive UI, filters, and search.',
            tags: ['React', 'Firebase', 'Tailwind'],
            category: 'Frontend',
            img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?fit=crop&w=800&q=80'
        },
        {
            title: 'FinEase',
            desc: 'Complete finance tracker with dashboard charts and secure auth.',
            tags: ['Next.js', 'MongoDB', 'Express'],
            category: 'Full Stack',
            img: 'https://images.unsplash.com/photo-1554224155-9732d560736f?fit=crop&w=800&q=80'
        },
        {
            title: 'BookHub',
            desc: 'Online library management system with real-time updates.',
            tags: ['MERN Stack', 'Redux', 'JWT'],
            category: 'Full Stack',
            img: 'https://images.unsplash.com/photo-1507842217121-9e93ca0a50bd?fit=crop&w=800&q=80'
        }
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Featured <span className="text-custom-cyan">Projects</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-brand-card border border-brand-border rounded-xl overflow-hidden flex flex-col h-full group hover:shadow-glow-cyan/30 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="p-3 bg-white rounded-full text-black hover:bg-custom-cyan hover:text-white transition"><FaExternalLinkAlt /></button>
                                    <button className="p-3 bg-white rounded-full text-black hover:bg-custom-cyan hover:text-white transition"><FaGithub /></button>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-custom-cyan uppercase tracking-wider mb-2">{project.category}</span>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-brand-dark px-2 py-1 rounded text-gray-300 border border-brand-border">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;