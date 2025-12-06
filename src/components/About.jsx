import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaCrosshairs, FaCode } from "react-icons/fa";

// Container Animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            ease: "easeOut",
        },
    },
};

// Item Animations
const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 12,
        },
    },
};

const About = () => {
    return (
        <motion.section
            id="about"
            className="py-24 px-6 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
        >
            <div className="container mx-auto max-w-6xl">
                {/* Title */}
                <motion.div variants={itemVariants} className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        About <span className="text-custom-cyan">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-custom-cyan mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Bio Section */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="flex items-center space-x-3 text-2xl font-semibold text-white border-b border-brand-border pb-4">
                            <FaUser className="text-custom-cyan" />
                            <h3>My Journey</h3>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-300">
                            I’m a dedicated <strong>MERN Stack & Frontend Developer</strong>{" "}
                            specializing in crafting fast, scalable, and user-focused web
                            experiences. I work mainly with{" "}
                            <strong>React, Next.js, Tailwind CSS</strong>, and modern
                            component-driven architecture to build clean, maintainable, and
                            high-performance applications.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-300">
                            I love transforming complex ideas into intuitive UI and optimized
                            workflows. From reusable components and API integration to
                            animations with Framer Motion — I focus on delivering smooth,
                            accessible, and visually polished digital products.
                        </p>

                        <motion.a
                            href="#contact"
                            className="inline-block bg-custom-cyan text-custom-dark-blue font-semibold px-7 py-3 rounded-lg shadow-xl hover:shadow-glow-cyan transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let’s Connect
                        </motion.a>
                    </motion.div>

                    {/* Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <AboutCard
                            icon={<FaBriefcase />}
                            title="Professional Focus"
                            text="Building modern SPAs and Next.js SSR/SSG applications with strong attention to performance, accessibility, and SEO-friendly architecture."
                            variants={itemVariants}
                        />
                        <AboutCard
                            icon={<FaCrosshairs />}
                            title="Current Goals"
                            text="Sharpening expertise in front-end engineering, building animation-rich UI, and mastering advanced state management with Redux & Zustand."
                            variants={itemVariants}
                        />
                        <AboutCard
                            icon={<FaCode />}
                            title="Code Philosophy"
                            text="Clean, modular, well-structured code with atomic design principles, scalable architecture, and consistent version control."
                            variants={itemVariants}
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

const AboutCard = ({ icon, title, text, variants }) => (
    <motion.div
        variants={variants}
        whileHover={{
            y: -6,
            boxShadow: "0 0 20px rgba(0, 170, 228, 0.45)",
            borderColor: "#00aae4",
        }}
        className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-xl transition-all duration-300"
    >
        <div className="flex items-center space-x-4 mb-4">
            <div className="text-3xl text-custom-cyan">{icon}</div>
            <h4 className="text-xl font-bold text-white tracking-wide">{title}</h4>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </motion.div>
);

export default About;
