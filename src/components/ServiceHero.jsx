import AnimateOnScroll from './AnimateOnScroll';

const ServiceHero = ({ title, subtitle, description, icon, gradient = 'from-cyan-500 to-indigo-500' }) => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className={`hero-glow top-1/4 left-1/4 bg-gradient-to-r ${gradient} opacity-20`} />
            <div className="hero-glow bottom-0 right-1/4 from-indigo-500/10 to-pink-500/10" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-500/10 animate-float" />
            <div className="absolute top-40 right-20 w-16 h-16 rounded-xl bg-indigo-500/10 animate-float delay-200" />
            <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-lg bg-pink-500/10 animate-float delay-300" />

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <AnimateOnScroll animation="fade-in-up">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} mb-8`}>
                        {icon}
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={100}>
                    <span className="inline-block px-4 py-2 bg-white/5 text-cyan-400 rounded-full text-sm font-medium mb-6 border border-white/10">
                        {subtitle}
                    </span>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={200}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={300}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={400}>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact-form" className="btn-primary text-white">
                            Get Free Consultation
                        </a>
                        <a href="#features" className="btn-secondary text-white">
                            Learn More
                        </a>
                    </div>
                </AnimateOnScroll>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
        </section>
    );
};

export default ServiceHero;
