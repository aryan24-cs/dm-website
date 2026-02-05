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

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'SEO Services', path: '/seo' },
        { name: 'Ads', path: '/ads' },
        { name: 'Development', path: '/development' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header
                className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4`}
            >
                <div
                    className={`w-full max-w-5xl transition-all duration-500 rounded-full border backdrop-blur-md flex items-center justify-between px-6 py-3 ${isScrolled
                        ? 'bg-slate-900/90 border-slate-700/50 shadow-lg shadow-cyan-500/10 scale-[0.98]'
                        : 'bg-slate-900/40 border-white/10'
                        }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                            <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                            Digital<span className="text-cyan-400">Pro</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive(link.path)
                                    ? 'text-white bg-white/10 shadow-sm'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/#contact"
                            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
                        >
                            <span>Get Started</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors z-50"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col items-end gap-1.5">
                                <span
                                    className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                                        }`}
                                />
                                <span
                                    className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'
                                        }`}
                                />
                                <span
                                    className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-slate-900/95 backdrop-blur-2xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Content */}
                <div className={`relative h-full flex flex-col items-center justify-center p-6 space-y-8 transition-all duration-500 delay-100 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-8 w-full max-w-xs">
                        <Link
                            to="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-primary w-full flex justify-center items-center text-white py-4 text-lg"
                        >
                            Start Project
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
