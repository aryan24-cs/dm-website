import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Home = () => {
    const stats = [
        { number: '500+', label: 'Projects Shipped' },
        { number: '$10M+', label: 'Client Revenue' },
        { number: '40%', label: 'Avg ROI Increase' },
    ];

    return (
        <div className="overflow-hidden bg-black">
            {/* Hero Section - Split Layout */}
            <section className="relative min-h-screen flex items-center pt-32 md:pt-48">
                <div className="absolute inset-0 grid-pattern opacity-10" />

                {/* Subtle White Glow */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left: Content */}
                    <div className="text-center lg:text-left">
                        <AnimateOnScroll animation="slide-right">
                            <div className="section-tag border-gray-700 bg-white/5">
                                Digital Growth Agency
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                                PERFORMANCE <br />
                                <span className="text-gray-500">THAT DELIVERS</span>
                            </h1>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                We combine engineering precision with creative boldness to build digital experiences that drive real business results.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#contact" className="btn-primary">
                                    Start Scaling
                                </a>
                                <Link to="/seo" className="px-8 py-4 border border-gray-800 text-gray-400 font-medium hover:text-white hover:border-white transition-all duration-300">
                                    View Our Work
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right: Visual / Bento Grid Visual */}
                    <div className="relative hidden lg:block">
                        <AnimateOnScroll animation="fade-in" delay={400}>
                            <div className="relative w-full aspect-square max-w-lg mx-auto">

                                <div className="absolute top-10 right-10 z-20 animate-float-precise">
                                    <div className="bento-card p-6 w-64 border-l-2 border-white bg-[#111]">
                                        <div className="text-4xl font-bold text-white mb-2">+145%</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider font-space">Organic Traffic</div>
                                        <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-[80%]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 left-10 z-10 animate-float-precise" style={{ animationDelay: '1s' }}>
                                    <div className="bento-card p-6 w-64 border-l-2 border-gray-500 bg-[#111]">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                            <span className="text-xs font-bold text-white uppercase tracking-wider">Active Campaign</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-1">9.8x ROAS</div>
                                        <div className="text-xs text-gray-400">Last 30 Days</div>
                                    </div>
                                </div>

                                {/* Decorative Circle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full animate-spin-slow border-dashed" />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>

                {/* Scroll Down Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7" />
                    </svg>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 border-y border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="group cursor-default">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-space">
                                {stat.number}
                            </h3>
                            <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Bento Grid */}
            <section className="py-32 relative bg-black" id="services">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 text-center lg:text-left">
                        <AnimateOnScroll animation="slide-right">
                            <div className="section-tag bg-white/5 border-gray-700">Our Expertise</div>
                        </AnimateOnScroll>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Designed to <span className="text-gray-500">Perform.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            We don't do "one size fits all". We engineer tailored digital solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Large Featured Card */}
                        <AnimateOnScroll animation="fade-in-up" className="lg:col-span-2 lg:row-span-2">
                            <Link to="/seo" className="bento-card h-full p-10 flex flex-col justify-between group bg-[#111] hover:bg-[#161616]">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">SEO & Growth</h3>
                                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                                        We go beyond keywords. We build comprehensive organic growth engines that compound over time. Technical audits, content strategy, and authority building for long-term dominance.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm">
                                    Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        </AnimateOnScroll>

                        {/* Smaller Cards */}
                        <AnimateOnScroll animation="fade-in-up" delay={100} className="lg:col-span-1 lg:row-span-1">
                            <Link to="/ads" className="bento-card h-full p-8 flex flex-col justify-between group bg-[#111] hover:bg-[#161616]">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Paid Advertising</h3>
                                    <p className="text-gray-400 text-sm">Targeted campaigns on Google & Meta.</p>
                                </div>
                                <div className="mt-4 flex items-center justify-end">
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all">
                                        ↗
                                    </div>
                                </div>
                            </Link>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={200} className="lg:col-span-1 lg:row-span-1">
                            <Link to="/development" className="bento-card h-full p-8 flex flex-col justify-between group bg-[#111] hover:bg-[#161616]">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                                    <p className="text-gray-400 text-sm">High-performance React & Next.js sites.</p>
                                </div>
                                <div className="mt-4 flex items-center justify-end">
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all">
                                        ↗
                                    </div>
                                </div>
                            </Link>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Marquee Clients */}
            <section className="py-20 border-y border-white/5 overflow-hidden bg-[#050505]">
                <div className="flex gap-20 animate-marquee whitespace-nowrap opacity-30 hover:opacity-80 transition-opacity duration-500">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-20 items-center select-none">
                            <span className="text-5xl font-bold text-white font-space">GOOGLE</span>
                            <span className="text-5xl font-bold text-white font-space">META</span>
                            <span className="text-5xl font-bold text-white font-space">SHOPIFY</span>
                            <span className="text-5xl font-bold text-white font-space">AMAZON</span>
                            <span className="text-5xl font-bold text-white font-space">VERCEL</span>
                            <span className="text-5xl font-bold text-white font-space">NETLIFY</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <div className="py-20 bg-black">
                <FAQ
                    faqs={[
                        { question: "Do you guarantee results?", answer: "We don't promise black magic, but our data-driven approach has a 98% success rate in improving core metrics within 90 days." },
                        { question: "How fast can we launch?", answer: "Onboarding takes 2-3 days. Campaign setups typically launch within 7-10 days." },
                        { question: "What industries do you work with?", answer: "We specialize in B2B, SaaS, and High-Ticket E-commerce. We look for partners, not just clients." },
                    ]}
                    title="The Details"
                    subtitle="Common questions about partnering with us."
                />
            </div>

            {/* Contact Form */}
            <div className="border-t border-white/10">
                <ContactForm />
            </div>
        </div>
    );
};

export default Home;
