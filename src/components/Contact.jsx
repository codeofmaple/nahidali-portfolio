import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Get in <span className="text-custom-cyan">Touch</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Contact Info</h3>
                        <ContactItem icon={<FaEnvelope />} label="Email" value="nahidali.dev@gmail.com" />
                        <ContactItem icon={<FaPhone />} label="Phone" value="+880131444143" />
                        <ContactItem icon={<FaMapMarkerAlt />} label="Location" value="Rajshahi, Bangladesh" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <form className="bg-brand-card border border-brand-border p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-custom-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="space-y-4 relative z-10">
                                <input type="text" placeholder="Name" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-custom-cyan focus:outline-none focus:shadow-glow-cyan transition-all" />
                                <input type="email" placeholder="Email" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-custom-cyan focus:outline-none focus:shadow-glow-cyan transition-all" />
                                <textarea rows="4" placeholder="Message" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-custom-cyan focus:outline-none focus:shadow-glow-cyan transition-all"></textarea>
                                <button className="w-full bg-custom-cyan text-custom-dark-blue font-bold py-3 rounded-lg hover:shadow-glow-cyan transition-all transform hover:-translate-y-1">Send Message</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-4 bg-brand-card border border-brand-border p-5 rounded-xl hover:border-custom-cyan transition-colors">
        <div className="text-custom-cyan text-2xl bg-brand-dark p-3 rounded-full shadow-lg">{icon}</div>
        <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide">{label}</p>
            <p className="text-white font-medium text-lg">{value}</p>
        </div>
    </div>
);

export default Contact;