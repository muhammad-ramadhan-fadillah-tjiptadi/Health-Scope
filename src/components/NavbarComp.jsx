import { Link } from "react-router-dom";

export default function NavbarComp() {

    return (
        <nav className="w-full shadow-xl sticky top-0 z-50" style={{ background: '#313474' }}>
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Brand */}
                <Link to="/" className="flex items-center gap-3 no-underline group">
                    <div className="flex flex-col leading-tight">
                        <span className="text-white font-extrabold text-lg tracking-tight">
                            Covid-19
                        </span>
                        <span className="text-blue-200 text-[10px] font-medium tracking-widest uppercase">
                            Health Scope
                        </span>
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-2">
                    <Link to="/">
                        <button className="px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 bg-white text-gray-900 shadow cursor-pointer">Home</button>
                    </Link>
                    <a href="#">
                        <button className="px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 text-blue-100 hover:bg-white/10 hover:text-white cursor-pointer">Global</button>
                    </a>
                    <a href="#">
                        <button className="px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 text-blue-100 hover:bg-white/10 hover:text-white cursor-pointer">Countries</button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
