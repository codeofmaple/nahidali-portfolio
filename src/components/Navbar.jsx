import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border"
        >
            <div className="container mx-auto flex justify-between items-center p-6 lg:px-12">
                <a href="#" className="text-2xl font-bold text-white tracking-wider">
                    Portfolio<span className="text-custom-cyan">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-lg">
                        {navLinks.map((item) => (
                            <li key={item}>
                                <Link
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer text-gray-300 hover:text-custom-cyan transition-colors font-medium"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Navbar;