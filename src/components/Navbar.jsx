import { Clapperboard, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
    const navLinkClass = ({ isActive }) =>
        `block py-3 text-sm font-semibold transition-colors hover:text-white md:py-0 ${
            isActive ? 'text-[#d3fb55]' : 'text-[#a4a1a2]'
        }`;

    return (
        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#101013]/95">
            <nav
                className="relative mx-auto flex min-h-16 w-[calc(100%-2rem)] max-w-[1180px] items-center justify-between md:min-h-[76px]"
                aria-label="Main navigation"
            >
                <Link
                    className="inline-flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight text-[#f4f1ed] no-underline"
                    to="/"
                    onClick={closeMenu}
                >
                    <span className="grid size-9 place-items-center rounded-[11px] bg-[#d3fb55] text-[#141512]">
                        <Clapperboard size={21} aria-hidden="true" />
                    </span>
                    <span>Moviethy</span>
                </Link>

                <button
                    className="grid size-10 place-items-center rounded-lg border-0 bg-transparent text-[#f4f1ed] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d3fb55] md:hidden"
                    type="button"
                    aria-label={
                        menuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    }
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <div
                    className={`${
                        menuOpen ? 'flex' : 'hidden'
                    } absolute left-0 right-0 top-full flex-col border-b border-white/10 bg-[#141418] px-4 pb-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
                >
                    <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/shows" onClick={closeMenu} className={navLinkClass}>
                        Explore shows
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
