import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const SEOServices = () => {
    const features = [
        {
            title: 'Technical SEO Audit',
            description: 'Comprehensive analysis of your website\'s technical health, including site speed, mobile-friendliness, and crawlability.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Keyword Research',
            description: 'In-depth keyword analysis to identify high-value search terms that drive qualified traffic to your business.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            title: 'On-Page Optimization',
            description: 'Strategic optimization of meta tags, content, internal linking, and page structure for maximum visibility.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
        },
        {
            title: 'Link Building',
            description: 'White-hat link acquisition strategies to build authority and improve your domain\'s trustworthiness.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
        },
        {
            title: 'Content Strategy',
            description: 'SEO-focused content planning and creation that engages your audience and ranks in search engines.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: 'Local SEO',
            description: 'Dominate local search results with optimized Google Business Profile and local citation building.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery & Audit',
            description: 'We analyze your current SEO performance, competitors, and identify opportunities for growth.',
        },
        {
            step: '02',
            title: 'Strategy Development',
            description: 'Create a customized SEO roadmap aligned with your business goals and target audience.',
        },
        {
            step: '03',
            title: 'Implementation',
            description: 'Execute on-page optimizations, technical fixes, and content improvements.',
        },
        {
            step: '04',
            title: 'Link Building',
            description: 'Build high-quality backlinks through outreach, guest posting, and digital PR.',
        },
        {
            step: '05',
            title: 'Monitor & Optimize',
            description: 'Continuously track rankings, traffic, and conversions to refine our approach.',
        },
    ];

    const caseStudies = [
        {
            client: 'E-commerce Fashion Brand',
            industry: 'Retail',
            results: [
                { metric: 'Organic Traffic', value: '+312%' },
                { metric: 'Keyword Rankings', value: '150+' },
                { metric: 'Revenue Growth', value: '+185%' },
            ],
            description: 'Transformed their online presence through comprehensive technical SEO and content strategy.',
        },
        {
            client: 'B2B SaaS Company',
            industry: 'Technology',
            results: [
                { metric: 'Organic Leads', value: '+450%' },
                { metric: 'Domain Authority', value: '+25 pts' },
                { metric: 'Page 1 Rankings', value: '85+' },
            ],
            description: 'Built authority through targeted link building and thought leadership content.',
        },
        {
            client: 'Local Law Firm',
            industry: 'Legal Services',
            results: [
                { metric: 'Local Visibility', value: '+500%' },
                { metric: 'Phone Calls', value: '+230%' },
                { metric: 'Map Pack Rankings', value: '#1' },
            ],
            description: 'Dominated local search results through Google Business optimization and local citations.',
        },
    ];

    const faqs = [
        {
            question: 'How long does it take to see SEO results?',
            answer: 'SEO is a long-term strategy. While you may see some improvements within 3-4 months, significant results typically take 6-12 months. The timeline depends on factors like competition, website age, and starting point.',
        },
        {
            question: 'Do you guarantee first page rankings?',
            answer: 'No reputable SEO agency can guarantee specific rankings, as Google\'s algorithm is complex and constantly changing. However, we do guarantee to follow best practices and work diligently to improve your organic visibility.',
        },
        {
            question: 'What\'s included in your SEO packages?',
            answer: 'Our packages typically include technical SEO audits, on-page optimization, content strategy, link building, monthly reporting, and dedicated account management. We customize each package based on your specific needs.',
        },
        {
            question: 'Do you work with websites in any industry?',
            answer: 'Yes, we have experience across various industries including e-commerce, B2B, healthcare, legal, real estate, and more. Our strategies are tailored to each industry\'s unique challenges and opportunities.',
        },
        {
            question: 'How do you measure SEO success?',
            answer: 'We track multiple KPIs including organic traffic, keyword rankings, backlink quality, domain authority, and most importantly, conversions and revenue generated from organic search.',
        },
        {
            question: 'Will SEO work affect my existing paid campaigns?',
            answer: 'SEO and paid advertising complement each other beautifully. Strong organic visibility can reduce your reliance on paid ads while maintaining traffic levels. Many clients see improved overall marketing efficiency.',
        },
    ];

    return (
        <div className="page-transition">
            <ServiceHero
                title="Dominate Search Rankings"
                subtitle="SEO Services"
                description="Drive organic growth with our proven SEO strategies. We help businesses increase visibility, attract qualified traffic, and achieve sustainable growth through search engine optimization."
                icon={
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                }
                gradient="from-cyan-500 to-blue-500"
            />

            {/* Contact Form Top */}
            <section className="relative py-16" id="contact-form">
                <div className="max-w-3xl mx-auto px-6">
                    <ContactForm
                        variant="compact"
                        title="Get Your Free SEO Audit"
                        subtitle="Discover opportunities to improve your search rankings"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="section" id="features">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4">
                                What We Offer
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Comprehensive SEO Solutions
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Everything you need to improve your search engine visibility and drive organic growth
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                <div className="glass rounded-2xl p-8 card-hover h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
                                Our Process
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                How We Drive Results
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Our proven methodology delivers consistent, measurable improvements
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {process.map((step, index) => (
                                <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                    <div className="relative text-center lg:text-center">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10">
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
                            <span className="section-tag justify-center mb-4">Success Stories</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Real Results for Real Businesses
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                See how we've helped businesses achieve remarkable growth through SEO
                            </p>
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
                                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-500/30" />
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed">{study.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-6">
                                        {study.results.map((result, i) => (
                                            <div key={i}>
                                                <div className="result-metric text-3xl mb-1">{result.value}</div>
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
            <FAQ faqs={faqs} title="SEO FAQs" subtitle="Common questions about our SEO services" />

            {/* Contact Form Bottom */}
            <ContactForm
                title="Ready to Grow Your Organic Traffic?"
                subtitle="Let's discuss how we can help you dominate search rankings"
            />
        </div>
    );
};

export default SEOServices;
