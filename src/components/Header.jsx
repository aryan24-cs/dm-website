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
                    {/* Logo - Positioned Absolute */}
                    <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-50">
                        <Link to="/" className="block">
                            <img
                                src="/images/logo.png"
                                alt="Adzenity"
                                className="h-14 md:h-24 w-auto object-contain drop-shadow-2xl filter brightness-110 transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Spacer for Logo */}
                    <div className="w-16 md:w-32"></div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
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
                        <div className="hidden md:block">
                            <Link
                                to="/#contact"
                                className="btn-primary text-xs px-6 py-2.5 rounded-full border-none !bg-white !text-black hover:!bg-gray-200"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center z-50 text-white rounded-full bg-white/10"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col items-center justify-center gap-1.5 w-5">
                                <span
                                    className={`h-0.5 bg-white w-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                                />
                                <span
                                    className={`h-0.5 bg-white w-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                                />
                                <span
                                    className={`h-0.5 bg-white w-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
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
                <div
                    className={`absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                <div className={`relative h-full flex flex-col items-center justify-center p-6 space-y-8 transition-all duration-500 delay-100 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-bold text-white uppercase tracking-widest hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="/#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-bold text-white uppercase tracking-widest hover:text-gray-400 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
