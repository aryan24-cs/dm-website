import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const WebDevelopment = () => {
    const services = [
        {
            title: 'Custom Websites',
            description: 'Unique, tailored websites built from scratch to match your brand and business needs.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'E-commerce Development',
            description: 'Full-featured online stores with secure payments, inventory, and customer management.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Landing Pages',
            description: 'High-converting landing pages optimized for lead generation and sales.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            title: 'Web Applications',
            description: 'Custom web apps with complex functionality, user dashboards, and integrations.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            title: 'WordPress Development',
            description: 'Custom WordPress themes and plugins for easy content management.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
        },
        {
            title: 'Website Maintenance',
            description: 'Ongoing updates, security, performance optimization, and support.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    const technologies = [
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'Vue.js', category: 'Frontend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'WordPress', category: 'CMS' },
        { name: 'Shopify', category: 'E-commerce' },
        { name: 'Webflow', category: 'No-code' },
        { name: 'Tailwind CSS', category: 'Styling' },
    ];

    const features = [
        {
            title: 'Mobile-First Design',
            description: 'Responsive websites that look stunning on every device, from phones to desktops.',
            icon: '📱',
        },
        {
            title: 'Lightning Fast',
            description: 'Optimized for speed with sub-3-second load times for better user experience and SEO.',
            icon: '⚡',
        },
        {
            title: 'SEO Optimized',
            description: 'Built with SEO best practices to ensure your site ranks well in search engines.',
            icon: '🔍',
        },
        {
            title: 'Conversion Focused',
            description: 'Strategic design elements that guide visitors to take action and convert.',
            icon: '🎯',
        },
        {
            title: 'Secure & Reliable',
            description: 'SSL certificates, secure hosting, and regular backups to protect your site.',
            icon: '🔒',
        },
        {
            title: 'Easy to Manage',
            description: 'User-friendly CMS that lets you update content without technical knowledge.',
            icon: '✨',
        },
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery',
            description: 'Understand your goals, audience, and brand to create the perfect strategy.',
        },
        {
            step: '02',
            title: 'Design',
            description: 'Create wireframes and high-fidelity mockups for your approval.',
        },
        {
            step: '03',
            title: 'Development',
            description: 'Build your website with clean code and modern technologies.',
        },
        {
            step: '04',
            title: 'Testing',
            description: 'Rigorous testing across devices, browsers, and performance metrics.',
        },
        {
            step: '05',
            title: 'Launch',
            description: 'Deploy your site and provide training on how to manage it.',
        },
    ];

    const caseStudies = [
        {
            client: 'Premium Fitness Brand',
            industry: 'Health & Wellness',
            results: [
                { metric: 'Page Speed', value: '95/100' },
                { metric: 'Conversion Rate', value: '+180%' },
                { metric: 'Bounce Rate', value: '-45%' },
            ],
            description: 'Modern e-commerce site with immersive product pages and seamless checkout.',
        },
        {
            client: 'Law Firm',
            industry: 'Legal Services',
            results: [
                { metric: 'Lead Generation', value: '+250%' },
                { metric: 'Time on Site', value: '+120%' },
                { metric: 'Mobile Traffic', value: '+200%' },
            ],
            description: 'Professional website with case study showcases and integrated booking system.',
        },
        {
            client: 'Tech Startup',
            industry: 'SaaS',
            results: [
                { metric: 'Demo Requests', value: '+300%' },
                { metric: 'Page Views', value: '+180%' },
                { metric: 'Load Time', value: '1.2s' },
            ],
            description: 'Modern, animated website with product demos and pricing calculator.',
        },
    ];

    const faqs = [
        {
            question: 'How long does it take to build a website?',
            answer: 'Timeline depends on complexity. A simple landing page takes 1-2 weeks, a standard business website 4-6 weeks, and complex e-commerce or web applications 8-12+ weeks.',
        },
        {
            question: 'What platform do you build websites on?',
            answer: 'We work with various platforms based on your needs: WordPress for content-heavy sites, Shopify for e-commerce, React/Next.js for web applications, and Webflow for marketing sites. We\'ll recommend the best fit for your goals.',
        },
        {
            question: 'Do you provide hosting and maintenance?',
            answer: 'Yes! We offer hosting packages starting at $50/month that include maintenance, security updates, backups, and performance monitoring. We also provide one-time setup if you prefer to manage hosting yourself.',
        },
        {
            question: 'Will my website be mobile-friendly?',
            answer: 'Absolutely. All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones to large desktop monitors.',
        },
        {
            question: 'Can I update the website content myself?',
            answer: 'Yes! We build sites with user-friendly content management systems and provide training. You\'ll be able to update text, images, and basic layouts without any coding knowledge.',
        },
        {
            question: 'Do you offer redesigns for existing websites?',
            answer: 'Yes, we offer complete redesigns as well as partial updates. We can modernize your existing site while preserving your content and SEO value.',
        },
    ];

    return (
        <div className="page-transition">
            <ServiceHero
                title="Websites That Convert"
                subtitle="Website Development"
                description="Create stunning, high-performance websites that captivate visitors and drive business growth. From custom designs to e-commerce solutions, we build digital experiences that make an impact."
                icon={
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                }
                gradient="from-pink-500 to-rose-500"
            />

            {/* Contact Form Top */}
            <section className="relative py-16" id="contact-form">
                <div className="max-w-3xl mx-auto px-6">
                    <ContactForm
                        variant="compact"
                        title="Get a Free Website Quote"
                        subtitle="Tell us about your project and we'll provide a detailed estimate"
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="section" id="features">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-pink-500/10 text-pink-400 rounded-full text-sm font-medium mb-4">
                                Our Services
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Web Solutions for Every Need
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                From simple landing pages to complex web applications, we've got you covered
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                <div className="glass rounded-2xl p-8 card-hover h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center text-pink-400 mb-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-rose-500/5" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <AnimateOnScroll animation="fade-in-up">
                            <h3 className="text-2xl font-bold text-white mb-4">Technologies We Use</h3>
                            <p className="text-gray-400">Industry-leading tools for modern web development</p>
                        </AnimateOnScroll>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <AnimateOnScroll key={index} animation="fade-in" delay={index * 50}>
                                <div className="px-6 py-3 glass rounded-xl hover:border-pink-500/30 transition-all cursor-pointer">
                                    <span className="text-white font-medium">{tech.name}</span>
                                    <span className="text-gray-500 text-sm ml-2">/ {tech.category}</span>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-rose-500/10 text-rose-400 rounded-full text-sm font-medium mb-4">
                                What Makes Us Different
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Built for Performance
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                <div className="text-center p-6">
                                    <div className="text-5xl mb-6">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-4">
                                Our Process
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                From Concept to Launch
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {process.map((step, index) => (
                                <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                    <div className="relative text-center">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10">
                                            {step.step}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="section">
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
                                            <div className="flex gap-1">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-pink-500/30" />
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed">{study.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-6">
                                        {study.results.map((result, i) => (
                                            <div key={i}>
                                                <div className="result-metric text-3xl mb-1 text-pink-400">{result.value}</div>
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
            <FAQ faqs={faqs} title="Website Development FAQs" subtitle="Common questions about our web development services" />

            {/* Contact Form Bottom */}
            <ContactForm
                title="Ready to Build Your Dream Website?"
                subtitle="Let's discuss your project and bring your vision to life"
            />
        </div>
    );
};

export default WebDevelopment;
