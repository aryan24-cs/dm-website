import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const AdsServices = () => {
    const platforms = [
        {
            name: 'Google Ads',
            description: 'Reach customers actively searching for your products or services with intent-driven advertising.',
            features: ['Search Ads', 'Display Network', 'Shopping Ads', 'YouTube Ads', 'Performance Max'],
            gradient: 'from-blue-500 to-cyan-500',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
            ),
        },
        {
            name: 'Meta Ads',
            description: 'Connect with billions of users on Facebook and Instagram with highly targeted social advertising.',
            features: ['Facebook Ads', 'Instagram Ads', 'Messenger Ads', 'Audience Network', 'Reels Ads'],
            gradient: 'from-indigo-500 to-purple-500',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#1877F2" />
                </svg>
            ),
        },
    ];

    const features = [
        {
            title: 'Campaign Strategy',
            description: 'Data-driven campaign planning aligned with your business objectives and target audience.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            title: 'Audience Targeting',
            description: 'Precise targeting using demographics, interests, behaviors, and custom audiences.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Creative Development',
            description: 'Compelling ad creative that captures attention and drives engagement.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Conversion Tracking',
            description: 'Implement proper tracking to measure every conversion and optimize performance.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            title: 'A/B Testing',
            description: 'Continuous testing of ads, audiences, and landing pages to optimize results.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
        },
        {
            title: 'Performance Reporting',
            description: 'Detailed reports on campaign performance, insights, and recommendations.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery Call',
            description: 'Understand your business goals, target audience, and competitive landscape.',
        },
        {
            step: '02',
            title: 'Account Audit',
            description: 'Analyze existing campaigns and identify optimization opportunities.',
        },
        {
            step: '03',
            title: 'Strategy & Setup',
            description: 'Develop campaign strategy and set up proper tracking infrastructure.',
        },
        {
            step: '04',
            title: 'Launch & Test',
            description: 'Launch campaigns with various ad variations and audience segments.',
        },
        {
            step: '05',
            title: 'Optimize & Scale',
            description: 'Continuously optimize based on data and scale winning campaigns.',
        },
    ];

    const caseStudies = [
        {
            client: 'D2C Beauty Brand',
            industry: 'E-commerce',
            results: [
                { metric: 'ROAS', value: '6.4x' },
                { metric: 'Cost Per Purchase', value: '-45%' },
                { metric: 'Revenue', value: '+280%' },
            ],
            description: 'Scaled Meta Ads from $10k to $100k monthly spend while maintaining profitability.',
        },
        {
            client: 'SaaS Platform',
            industry: 'Technology',
            results: [
                { metric: 'Demo Bookings', value: '+320%' },
                { metric: 'Cost Per Lead', value: '-52%' },
                { metric: 'Conversion Rate', value: '+85%' },
            ],
            description: 'Generated consistent B2B leads through Google Search and LinkedIn integration.',
        },
        {
            client: 'Home Services Company',
            industry: 'Local Services',
            results: [
                { metric: 'Lead Volume', value: '+400%' },
                { metric: 'Cost Per Lead', value: '$18' },
                { metric: 'Phone Calls', value: '+250%' },
            ],
            description: 'Dominated local market with Google Local Services Ads and Search campaigns.',
        },
    ];

    const faqs = [
        {
            question: 'What\'s the minimum budget needed for paid ads?',
            answer: 'We recommend a minimum of $1,500/month in ad spend for Google Ads and $2,000/month for Meta Ads to gather enough data for optimization. Management fees are additional and based on spend level.',
        },
        {
            question: 'How quickly can I expect results from paid advertising?',
            answer: 'Unlike SEO, paid ads can deliver results almost immediately. You may see leads within the first week. However, optimal performance typically requires 30-60 days of testing and optimization.',
        },
        {
            question: 'Do you manage both Google Ads and Meta Ads?',
            answer: 'Yes! We\'re certified partners for both platforms. We can manage campaigns across Google Search, Display, Shopping, YouTube, Facebook, Instagram, and more.',
        },
        {
            question: 'How do you measure campaign success?',
            answer: 'We focus on metrics that matter to your business: cost per acquisition, return on ad spend (ROAS), conversion rate, and ultimately, revenue generated from campaigns.',
        },
        {
            question: 'What industries do you have experience with?',
            answer: 'We\'ve managed campaigns across e-commerce, SaaS, professional services, healthcare, real estate, and local businesses. Our strategies are customized for each industry\'s unique characteristics.',
        },
        {
            question: 'What happens if my campaigns aren\'t performing?',
            answer: 'We conduct regular performance reviews and make data-driven adjustments. If a strategy isn\'t working, we pivot quickly. Our goal is always to maximize your ROI.',
        },
    ];

    return (
        <div className="page-transition">
            <ServiceHero
                title="Maximize Your Ad ROI"
                subtitle="Google & Meta Ads"
                description="Drive immediate results with expertly managed paid advertising campaigns. We help businesses generate leads and sales through Google Ads and Meta platforms with precision targeting and continuous optimization."
                icon={
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                }
                gradient="from-indigo-500 to-purple-500"
            />

            {/* Contact Form Top */}
            <section className="relative py-16" id="contact-form">
                <div className="max-w-3xl mx-auto px-6">
                    <ContactForm
                        variant="compact"
                        title="Get Your Free Ads Audit"
                        subtitle="Discover how to improve your paid advertising performance"
                    />
                </div>
            </section>

            {/* Platforms Section */}
            <section className="section" id="features">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium mb-4">
                                Platforms We Master
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Advertise Where Your Customers Are
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {platforms.map((platform, index) => (
                            <AnimateOnScroll key={index} animation={index === 0 ? 'slide-left' : 'slide-right'}>
                                <div className="glass rounded-2xl p-8 card-hover h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        {platform.icon}
                                        <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                                    </div>
                                    <p className="text-gray-400 mb-6">{platform.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {platform.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${platform.gradient} bg-opacity-10 text-white`}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-4">
                                What We Offer
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Full-Service PPC Management
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                End-to-end paid advertising management for maximum ROI
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                <div className="glass rounded-2xl p-8 card-hover h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 mb-6">
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
            <section className="section">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="inline-block px-4 py-2 bg-pink-500/10 text-pink-400 rounded-full text-sm font-medium mb-4">
                                Our Process
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                From Strategy to Scale
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {process.map((step, index) => (
                                <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                                    <div className="relative text-center">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10">
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
            <section className="section relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">Success Stories</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Proven Results That Speak
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
                                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed">{study.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-6">
                                        {study.results.map((result, i) => (
                                            <div key={i}>
                                                <div className="result-metric text-3xl mb-1 text-indigo-400">{result.value}</div>
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
            <FAQ faqs={faqs} title="PPC Advertising FAQs" subtitle="Common questions about our paid advertising services" />

            {/* Contact Form Bottom */}
            <ContactForm
                title="Ready to Scale Your Paid Advertising?"
                subtitle="Let's discuss how we can maximize your ad spend ROI"
            />
        </div>
    );
};

export default AdsServices;
