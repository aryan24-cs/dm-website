import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Home = () => {
    const services = [
        {
            title: 'SEO & Ranking',
            description: 'Dominate search results with data-driven organic strategies.',
            icon: '📈',
            link: '/seo',
            size: 'large', // grid-col-span-2
        },
        {
            title: 'Performance Ads',
            description: 'High-ROI campaigns on Google & Meta.',
            icon: '🎯',
            link: '/ads',
            size: 'small', // grid-col-span-1
        },
        {
            title: 'Web Dev',
            description: 'Blazing fast, modern web experiences.',
            icon: '⚡',
            link: '/development',
            size: 'small', // grid-col-span-1
        },
    ];

    const stats = [
        { number: '500+', label: 'Projects Shipped' },
        { number: '$10M+', label: 'Client Revenue' },
        { number: '40%', label: 'Avg ROI Increase' },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Split Layout */}
            <section className="relative min-h-screen flex items-center pt-20">
                <div className="grid-bg-glow absolute inset-0 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="relative z-10 text-center lg:text-left">
                        <AnimateOnScroll animation="slide-right">
                            <div className="section-tag">
                                Digital Growth Agency
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
                                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Digital Empires</span>
                            </h1>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Stop chasing trends. Start setting them. We combine engineering precision with creative boldness to scale your brand.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#contact" className="btn-modern btn-modern-primary">
                                    Start Scaling
                                </a>
                                <Link to="/seo" className="btn-modern btn-modern-outline">
                                    View Our Work
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right: Visual / Bento Grid Visual */}
                    <div className="relative hidden lg:block">
                        <AnimateOnScroll animation="fade-in" delay={400}>
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                {/* Abstract Floating Cards Visual */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />

                                <div className="absolute top-10 right-10 z-20 animate-float-precise">
                                    <div className="bento-card p-6 w-64 border-l-4 border-cyan-400">
                                        <div className="text-4xl font-bold text-white mb-2">+145%</div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider">Organic Traffic</div>
                                        <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-cyan-400 w-[80%]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 left-10 z-10 animate-float-precise" style={{ animationDelay: '1s' }}>
                                    <div className="bento-card p-6 w-64 border-l-4 border-pink-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-sm font-bold text-white">Campaign Active</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-1">9.8x ROAS</div>
                                        <div className="text-xs text-gray-400">Last 30 Days</div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full animate-spin-slow border-dashed" />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>

                {/* Scroll Down Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="group cursor-default">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors bg-clip-text">
                                {stat.number}
                            </h3>
                            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Bento Grid */}
            <section className="py-32 relative" id="services">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 text-center lg:text-left">
                        <AnimateOnScroll animation="slide-right">
                            <div className="section-tag">Our Expertise</div>
                        </AnimateOnScroll>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Designed to <span className="text-cyan-400">Perform</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            We don't do "one size fits all". We engineer tailored digital solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Large Featured Card */}
                        <AnimateOnScroll animation="fade-in-up" className="lg:col-span-2 lg:row-span-2">
                            <Link to="/seo" className="bento-card h-full p-10 flex flex-col justify-between group">
                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                                    🚀
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">SEO & Growth Architecture</h3>
                                    <p className="text-gray-400 text-lg max-w-lg">
                                        We go beyond keywords. We build comprehensive organic growth engines that compound over time. Technical audits, content strategy, and authority building.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-white font-semibold">
                                    Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>

                                {/* Abstract Background Element */}
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />
                            </Link>
                        </AnimateOnScroll>

                        {/* Smaller Cards */}
                        <AnimateOnScroll animation="fade-in-up" delay={100} className="lg:col-span-1 lg:row-span-1">
                            <Link to="/ads" className="bento-card h-full p-8 flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl mb-4">
                                        🎯
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Paid Advertising</h3>
                                    <p className="text-gray-400">Sniper-targeted campaigns on Google & Meta.</p>
                                </div>
                                <div className="mt-4 flex items-center justify-end">
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white text-black transition-all">
                                        ↗
                                    </div>
                                </div>
                            </Link>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={200} className="lg:col-span-1 lg:row-span-1">
                            <Link to="/development" className="bento-card h-full p-8 flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-2xl mb-4">
                                        ⚡
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                                    <p className="text-gray-400">Next.js & React applications built for speed.</p>
                                </div>
                                <div className="mt-4 flex items-center justify-end">
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white text-black transition-all">
                                        ↗
                                    </div>
                                </div>
                            </Link>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Marquee Clients */}
            <section className="py-20 border-y border-white/5 overflow-hidden bg-black/50">
                <div className="flex gap-20 animate-marquee whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
                    {/* Repeated for smooth loop */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-20 items-center">
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">GOOGLE</span>
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">META</span>
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SHOPIFY</span>
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">AMAZON</span>
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">VERCEL</span>
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">NETLIFY</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <div className="py-20">
                <FAQ
                    faqs={[
                        { question: "Do you guarantee results?", answer: "We don't promise black magic, but our data-driven approach has a 98% success rate in improving core metrics within 90 days." },
                        { question: "How fast can we launch?", answer: "Onboarding takes 2-3 days. Campaign setups typically launch within 7-10 days." },
                    ]}
                    title="The Details"
                    subtitle="Common questions about partnering with us."
                />
            </div>

            {/* Contact Form */}
            <ContactForm />
        </div>
    );
};

export default Home;
