import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'SEO', path: '/seo' },
        { name: 'Ads', path: '/ads' },
        { name: 'Dev', path: '/development' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pt-4 md:pt-6 px-4`}
            >
                <div
                    className={`relative w-full max-w-6xl rounded-full border border-white/10 flex items-center justify-between pl-4 md:pl-6 pr-2 py-2 md:py-3 backdrop-blur-xl transition-all duration-500 ${isScrolled
                        ? 'bg-black/80 shadow-2xl shadow-black/50 scale-[1.02]'
                        : 'bg-black/40'
                        }`}
                >
                    {/* Logo */}
                    <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-50">
                        <Link to="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                            <img
                                src="/images/logo.png"
                                alt="Adzenity"
                                className="h-14 md:h-24 w-auto object-contain drop-shadow-2xl filter brightness-110 transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Spacer for Logo */}
                    <div className="w-16 lg:w-32"></div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group overflow-hidden ${isActive(link.path)
                                    ? 'text-black bg-white'
                                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <Link
                                to="/#contact"
                                className="btn-primary text-xs px-6 py-2.5 rounded-full border-none !bg-white !text-black hover:!bg-gray-200"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button (Hamburger) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden relative w-12 h-12 flex items-center justify-center z-50 text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Open menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* FULL SCREEN MOBILE MENU OVERLAY (z-60 to sit firmly on top) */}
            <div
                className={`fixed inset-0 z-[60] md:hidden bg-black transition-all duration-500 flex flex-col ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Close Button Top Right */}
                <div className="absolute top-6 right-6 z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Logo in Menu for Context */}
                <div className="absolute top-6 left-6 z-50">
                    <img
                        src="/images/logo.png"
                        alt="Adzenity"
                        className="h-14 w-auto object-contain"
                    />
                </div>



                {/* Menu Content */}
                <div className="relative h-full flex flex-col justify-center px-8 z-10">
                    <div className="flex flex-col space-y-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`group flex items-baseline gap-6 transition-all duration-500 transform ${isMobileMenuOpen
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-[50px] opacity-0'
                                    }`}
                                style={{ transitionDelay: `${100 + (index * 100)}ms` }}
                            >
                                {/* Number Index */}
                                <span className="text-sm font-mono text-gray-600 font-medium group-hover:text-white transition-colors duration-300">
                                    0{index + 1}
                                </span>

                                {/* Outline Text Effect */}
                                <span
                                    className="text-5xl font-black uppercase tracking-tighter transition-all duration-300 group-hover:tracking-widest"
                                    style={{
                                        WebkitTextStroke: isActive(link.path) ? '0px' : '1px #ffffff',
                                        color: isActive(link.path) ? '#ffffff' : 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#ffffff';
                                        e.target.style.WebkitTextStroke = '0px';
                                        e.target.style.textShadow = 'none';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive(link.path)) {
                                            e.target.style.color = 'transparent';
                                            e.target.style.WebkitTextStroke = '1px #ffffff';
                                            e.target.style.textShadow = 'none';
                                        }
                                    }}
                                >
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        className={`h-px bg-white/20 w-full my-10 transition-all duration-500 ${isMobileMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                            }`}
                    />

                    {/* CTA Button */}
                    <div
                        className={`transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        <Link
                            to="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center justify-center w-full py-5 px-8 bg-white text-black font-extrabold text-xl uppercase tracking-widest hover:bg-gray-200 transition-all rounded-sm shadow-xl"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;
