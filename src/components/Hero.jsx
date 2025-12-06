import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 px-6">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-3xl font-semibold text-white">Hello, It's Me</h2>
                    <h1 className="text-5xl md:text-7xl font-black tracking-wide mb-4 text-white mt-2">
                        Md Nahid Ali
                    </h1>
                    <h3 className="font-bold text-custom-cyan text-3xl md:text-4xl mb-6">
                        Frontend Developer
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">
                        I craft high-performance, accessible, and visually appealing websites with passion and precision. Let's build something amazing together.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                        {[FaGithub, FaLinkedin, FaFacebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 border-2 border-custom-cyan rounded-full flex items-center justify-center text-custom-cyan hover:bg-custom-cyan hover:text-custom-dark-blue transition-all duration-300">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    <a href="#" className="inline-block bg-custom-cyan text-custom-dark-blue text-lg font-semibold px-8 py-3 rounded-lg shadow-glow-cyan hover:shadow-none hover:translate-y-1 transition-all duration-300">
                        Download CV
                    </a>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <div className="relative w-[300px] h-[350px] lg:w-[400px] lg:h-[450px]">
                        {/* Hexagon Glow Background */}
                        <div className="absolute inset-0 bg-custom-cyan hexagon-shape blur-2xl opacity-50 animate-pulse"></div>
                        {/* Hexagon Image Container */}
                        <div className="absolute inset-0 bg-custom-cyan hexagon-shape p-1">
                            {/* Replace src with your real image */}
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                                alt="Md Nahid Ali"
                                className="w-full h-full object-cover hexagon-shape"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;