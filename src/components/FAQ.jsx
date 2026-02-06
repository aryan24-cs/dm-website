import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const FAQ = ({ faqs, title = 'Frequently Asked Questions', subtitle = 'Everything you need to know about our services.' }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative bg-black">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <AnimateOnScroll animation="fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {title}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 50}>
                            <div
                                className={`faq-card group ${openIndex === index ? 'active' : ''}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-6 flex items-center gap-6 text-left"
                                >
                                    <span className="faq-number">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>

                                    <span className={`text-lg font-medium flex-grow transition-colors ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>

                                    <div className={`w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-white border-white rotate-135' : 'group-hover:border-white'}`}>
                                        <svg
                                            className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-black' : 'text-gray-400 group-hover:text-white'}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </button>

                                <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                                    <div className="px-8 pb-8 pt-0 pl-20">
                                        <p className="text-gray-400 leading-relaxed text-base border-t border-white/10 pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
