import { Button } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarComp() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full shadow-xl sticky top-0 z-50" style={{ background: '#313474' }}>
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Brand */}
                <Link to="/" className="flex items-center gap-3 no-underline group">
                    <div className="flex flex-col leading-tight">
                        <span className="text-white font-extrabold text-lg tracking-tight">
                            Covid<span className="text-blue-200">-19</span>
                        </span>
                        <span className="text-blue-200 text-[10px] font-medium tracking-widest uppercase">
                            Health Scope
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-2">
                    <Link to="/">
                        <a className="px-5 py-2 rounded-lg text-sm font-semibold no-underline text-blue-100">Home</a>
                    </Link>
                    <a href="#" className="px-5 py-2 rounded-lg text-sm font-semibold no-underline text-blue-100">Global</a>
                    <a href="#" className="px-5 py-2 rounded-lg text-sm font-semibold no-underline text-blue-100">Countries</a>
                    <a href="#" className="px-5 py-2 rounded-lg text-sm font-semibold no-underline text-blue-100">About</a>
                </div>

                {/* Right side */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block"></span>
                        Live Data
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white hover:text-blue-200 focus:outline-none transition-colors"
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-white/20 px-4 py-3 flex flex-col gap-1" style={{ background: '#313474' }}>
                    <Link to="/">
                        <a onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-lg text-sm font-semibold no-underline bg-white text-blue-600">Home</a>
                    </Link>
                    <a href="#" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-lg text-sm font-semibold no-underline text-blue-100">Global</a>
                    <a href="#" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-lg text-sm font-semibold no-underline text-blue-100">Countries</a>
                    <a href="#" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-lg text-sm font-semibold no-underline text-blue-100">About</a>
                    <div className="flex items-center gap-2 mt-2 px-4 py-2 text-blue-200 text-xs font-semibold">
                        <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block"></span>
                        Live Data
                    </div>
                </div>
            )}
        </nav>
    );
}
