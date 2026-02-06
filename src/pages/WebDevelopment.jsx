import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const WebDevelopment = () => {
    const features = [
        {
            title: 'Custom Design',
            description: 'Unique, brand-tailored designs that captivate your audience and set you apart from competitors.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Responsive Development',
            description: 'Websites that look and function perfectly on every device, from mobile phones to 4K desktop screens.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Performance Optimization',
            description: 'Lightning-fast load times and optimized code for better user experience and higher SEO rankings.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: 'E-commerce Solutions',
            description: 'Robust online stores built on Shopify or WooCommerce designed to maximize conversions and sales.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
        },
        {
            title: 'CMS Integration',
            description: 'Easy-to-manage content management systems that allow you to update your website without coding.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            title: 'Security & Maintenance',
            description: 'Ongoing support, security monitoring, and updates to keep your website safe and running smoothly.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    const caseStudies = [
        {
            client: 'Tech Startup',
            industry: 'SaaS',
            results: [
                { metric: 'Conversion Rate', value: '+150%' },
                { metric: 'Load Time', value: '0.8s' },
                { metric: 'User Engagement', value: '+200%' },
            ],
            description: 'Designed and developed a high-converting landing page system that tripled their lead generation.',
        },
        {
            client: 'Luxury Brand',
            industry: 'Fashion',
            results: [
                { metric: 'Online Sales', value: '+85%' },
                { metric: 'Mobile Traffic', value: '+120%' },
                { metric: 'Avg Order Value', value: '+35%' },
            ],
            description: 'Built a premium headless e-commerce experience that perfectly reflects their brand identity.',
        },
        {
            client: 'Corporate Consulting',
            industry: 'Professional Services',
            results: [
                { metric: 'Lead Quality', value: '+60%' },
                { metric: 'Bounce Rate', value: '-45%' },
                { metric: 'Page Views', value: '+210%' },
            ],
            description: 'Revamped their corporate website with a modern, professional design that instills trust.',
        },
    ];

    const faqs = [
        {
            question: 'How long does it take to build a website?',
            answer: 'A standard business website typically takes 4-8 weeks from design to launch. More complex projects like e-commerce stores or custom web apps may take 12 weeks or more.',
        },
        {
            question: 'Will my website be mobile-friendly?',
            answer: 'Absolutely. We design mobile-first to ensure your website looks and functions perfectly on all devices, including smartphones, tablets, and desktops.',
        },
        {
            question: 'Do I own the website after it\'s launched?',
            answer: 'Yes! Once the project is paid in full, you own 100% of the website, code, and content. We don\'t hold your digital assets hostage.',
        },
        {
            question: 'Can I update the content myself?',
            answer: 'Yes, we build on user-friendly CMS platforms (like WordPress, Shopify, or Sanity) that allow you to easily update text, images, and posts without needing to know code.',
        },
        {
            question: 'Do you provide hosting and maintenance?',
            answer: 'We offer optional hosting and maintenance packages to keep your site secure, fast, and up-to-date. However, you are free to host it wherever you prefer.',
        },
    ];

    return (
        <div className="page-transition bg-black">
            <ServiceHero
                title="Websites That Convert"
                subtitle="Web Development"
                description="We build stunning, high-performance websites designed to engage your audience and turn visitors into customers. From custom designs to complex web applications."
                icon={
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                }
            />

            {/* Contact Form Top */}
            <section className="relative py-16 bg-black" id="contact-form">
                <div className="max-w-3xl mx-auto px-6">
                    <ContactForm
                        variant="compact"
                        title="Start Your Project"
                        subtitle="Let's build a digital experience your customers will love"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">
                                Our Expertise
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                World-Class Development
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Technical excellence meets creative design to build robust digital solutions
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                <div className="bento-card p-8 h-full">
                                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 font-space">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="section bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">Portfolio</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Websites That Perform
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                <div className="result-card h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-8">
                                            <span className="industry-tag">
                                                {study.industry}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed text-sm">{study.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-6">
                                        {study.results.map((result, i) => (
                                            <div key={i}>
                                                <div className="result-metric text-3xl mb-1 text-white">{result.value}</div>
                                                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{result.metric}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqs={faqs} title="Web Dev FAQs" subtitle="Questions about our development process" />

            {/* Contact Form Bottom */}
            <div className="border-t border-white/10">
                <ContactForm
                    title="Ready to Build Your Website?"
                    subtitle="Contact us today for a free consultation and quote"
                />
            </div>
        </div>
    );
};

export default WebDevelopment;
