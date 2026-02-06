import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const ContactForm = ({ title = "Let's Build Something Great", subtitle = "Ready to scale? Fill out the form and we'll be in touch within 24 hours." }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const services = [
        'SEO & Organic Growth',
        'Paid Advertising (PPC)',
        'Web Development',
        'Other',
    ];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.service) newErrors.service = 'Please select a service';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section className="py-24 relative bg-black" id="contact">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <AnimateOnScroll animation="fade-in-up">
                    <div className="form-card">
                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
                                <p className="text-gray-400">{subtitle}</p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-12 animate-fade-in">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center border border-white">
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                                    <p className="text-gray-400">We will be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="modern-input-group">
                                            <label className="modern-label">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className={`modern-input ${errors.name ? 'border-red-800' : ''}`}
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name}</p>}
                                        </div>
                                        <div className="modern-input-group">
                                            <label className="modern-label">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@company.com"
                                                className={`modern-input ${errors.email ? 'border-red-800' : ''}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1 absolute">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="modern-input-group">
                                            <label className="modern-label">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="modern-input"
                                            />
                                        </div>
                                        <div className="modern-input-group">
                                            <label className="modern-label">Service Interested In</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className={`modern-input appearance-none ${errors.service ? 'border-red-800' : ''}`}
                                            >
                                                <option value="" disabled>Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>{service}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-4 top-[2.5rem] pointer-events-none text-gray-500">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            {errors.service && <p className="text-red-500 text-xs mt-1 absolute">{errors.service}</p>}
                                        </div>
                                    </div>

                                    <div className="modern-input-group">
                                        <label className="modern-label">Project Details</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your goals, timeline, and budget..."
                                            rows={4}
                                            className="modern-input resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-glow mt-4"
                                    >
                                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default ContactForm;
