import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        {
            icon: <FaGithub />,
            href: "https://github.com/codeofmaple",
        },
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/md-nahidali",
        },
        {
            icon: <FaEnvelope />,
            href: "mailto:nahidali.dev@gmail.com",
        },
    ];

    return (
        <footer className="mt-32 bg-brand-dark/40 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-12 py-16">
                {/* Top Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl font-bold text-white tracking-wide">
                        NAHID<span className="text-custom-cyan">.DEV</span>
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-xl">
                        Building clean, fast, modern web experiences with React, Next.js,
                        Tailwind, and MERN Stack. Let's create something amazing together.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-8">
                        {socialLinks.map(({ icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -4 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className="
                  text-gray-300 text-2xl 
                  hover:text-custom-cyan 
                  transition-all duration-300
                "
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="mt-10 border-t border-white/10"></div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
                >

                    {/* Copyright */}
                    <p className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} NAHID.DEV — All Rights Reserved.
                    </p>

                    {/* Footer Navigation */}
                    <div className="flex space-x-6">
                        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={"#" + item.toLowerCase()}
                                className="hover:text-custom-cyan transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
