import AnimateOnScroll from './AnimateOnScroll';

const ServiceHero = ({ title, subtitle, description, icon }) => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-32 md:pt-48 pb-16 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-10" />

            {/* Subtle White Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gray-500 opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <AnimateOnScroll animation="fade-in-up">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8 text-white">
                        {icon}
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={100}>
                    <span className="section-tag mb-6">
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
                        <a href="#contact-form" className="btn-primary">
                            Get Free Consultation
                        </a>
                    </div>
                </AnimateOnScroll>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default ServiceHero;
