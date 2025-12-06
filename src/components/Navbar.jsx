import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
    const [open, setOpen] = useState(false);

    // Mobile menu animation
    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 14,
            },
        },
        exit: {
            x: "100%",
            transition: { duration: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.08 },
        }),
    };

    return (
        <>
            {/* NAVBAR */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
          fixed top-0 left-0 w-full z-50 
          bg-brand-dark/40 backdrop-blur-xl 
          border-b border-white/10 shadow-lg
        "
            >
                <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">

                    {/* Logo */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#"
                        className="text-2xl font-extrabold text-white tracking-wide"
                    >
                        NAHID<span className="text-custom-cyan">.DEV</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-10 text-lg">
                            {navLinks.map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ scale: 1.12 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                                >
                                    <Link
                                        to={item.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="
                      cursor-pointer text-gray-300 
                      hover:text-custom-cyan transition-colors 
                      font-medium tracking-wide relative group
                    "
                                        activeClass="text-custom-cyan"
                                    >
                                        {item}

                                        {/* hover underline */}
                                        <span
                                            className="
                        absolute left-0 -bottom-1 w-0 h-0.5 
                        bg-custom-cyan transition-all duration-300 group-hover:w-full
                      "
                                        ></span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-3xl text-white"
                        onClick={() => setOpen(true)}
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
            </motion.header>

            {/* MOBILE SLIDE-IN MENU */}
            <AnimatePresence>
                {open && (
                    <motion.aside
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="
              fixed top-0 right-0 h-full w-72 z-[999]
              bg-brand-dark/60 backdrop-blur-2xl
              border-l border-gray-700/50 shadow-xl
              px-8 py-10 flex flex-col
            "
                    >
                        {/* Close Button */}
                        <div className="flex justify-end mb-10">
                            <button
                                className="text-3xl text-gray-300 hover:text-custom-cyan transition"
                                onClick={() => setOpen(false)}
                            >
                                <HiX />
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <ul className="space-y-8 text-xl font-medium">
                            {navLinks.map((item, i) => (
                                <motion.li
                                    key={item}
                                    custom={i}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="
                      block text-gray-300 
                      hover:text-custom-cyan transition-colors
                      cursor-pointer
                    "
                                        onClick={() => setOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
