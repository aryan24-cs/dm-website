import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const AdsServices = () => {
    const features = [
        {
            title: 'Google Search Ads',
            description: 'Capture high-intent traffic precisely when customers are searching for your products or services.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            title: 'Meta (Facebook/IG) Ads',
            description: 'Reach your ideal audience with visually compelling ads on the world\'s largest social platforms.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Display & Retargeting',
            description: 'Re-engage visitors who didn\'t convert and build brand awareness across the web.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Conversion Tracking',
            description: 'Advanced setup to measure exactly which clicks lead to sales, calls, and leads.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            title: 'A/B Testing',
            description: 'Continuous testing of ad copy, creatives, and landing pages to improve performance.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
        {
            title: 'Landing Page Optimization',
            description: 'Designing high-converting landing pages that maximize the value of your ad spend.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
        },
    ];

    const caseStudies = [
        {
            client: 'Service Business',
            industry: 'Home Services',
            results: [
                { metric: 'Cost Per Lead', value: '-65%' },
                { metric: 'Conversion Rate', value: '12%' },
                { metric: 'Monthly Leads', value: '+200' },
            ],
            description: 'Restructured their Google Ads account to focus on high-intent local keywords.',
        },
        {
            client: 'E-commerce Store',
            industry: 'Retail',
            results: [
                { metric: 'ROAS', value: '8.5x' },
                { metric: 'Revenue', value: '+400%' },
                { metric: 'CAC', value: '-30%' },
            ],
            description: 'Scaled Facebook and Instagram ads using dynamic product catalogs and lookalike audiences.',
        },
        {
            client: 'Tech Platform',
            industry: 'SaaS',
            results: [
                { metric: 'Free Trials', value: '+180%' },
                { metric: 'CPA', value: '-40%' },
                { metric: 'Click Rate', value: '3.5%' },
            ],
            description: 'Implemented a multi-channel retargeting strategy to nurture leads through the funnel.',
        },
    ];

    const faqs = [
        {
            question: 'How much should I spend on ads?',
            answer: 'We recommend a starting budget of at least $1,500/month to gather enough data for optimization. However, the ideal budget depends on your industry, competition, and goals.',
        },
        {
            question: 'Which platform is better: Google or Facebook?',
            answer: 'It depends on your business model. Google is best for capturing high intent (people searching for a solution), while Facebook/Meta is excellent for generating demand and brand awareness.',
        },
        {
            question: 'How do you charge for ad management?',
            answer: 'We typically charge a flat monthly management fee or a percentage of ad spend, whichever is greater. This ensures our incentives are aligned with your growth.',
        },
        {
            question: 'Do I pay for ads directly?',
            answer: 'Yes, you will pay the ad platforms (Google/Meta) directly. Our management fee covers the strategy, setup, optimization, and reporting.',
        },
        {
            question: 'Can you work with my existing ad account?',
            answer: 'Absolutely. We prefer to audit and optimize existing accounts to preserve historical data, but we can also build new accounts from scratch if necessary.',
        },
    ];

    return (
        <div className="page-transition bg-black">
            <ServiceHero
                title="Scale with Paid Media"
                subtitle="Google & Meta Ads"
                description="Stop wasting money on ineffective ads. We build data-driven campaigns that target your ideal customers and deliver measurable ROI."
                icon={
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                }
            />

            {/* Contact Form Top */}
            <section className="relative py-16 bg-black" id="contact-form">
                <div className="max-w-3xl mx-auto px-6">
                    <ContactForm
                        variant="compact"
                        title="Get Your Free Audit"
                        subtitle="Find out how we can improve your ad performance"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">
                                Platform Expertise
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Multi-Channel Growth
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                We leverage the right platforms to find your customers where they spend their time
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
                            <span className="section-tag justify-center mb-4">Proven Results</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Results That Speak
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
            <FAQ faqs={faqs} title="PPC FAQs" subtitle="Common questions about our paid advertising services" />

            {/* Contact Form Bottom */}
            <div className="border-t border-white/10">
                <ContactForm
                    title="Ready to Scale Your Ads?"
                    subtitle="Let's build a profitable campaign strategy for your business"
                />
            </div>
        </div>
    );
};

export default AdsServices;
