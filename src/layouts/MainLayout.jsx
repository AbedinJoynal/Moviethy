import { Outlet } from 'react-router';
import { Clapperboard } from 'lucide-react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';

export default function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col overflow-hidden bg-[#101013] font-sans text-[#f4f1ed] antialiased selection:bg-[#d3fb55] selection:text-[#101013]">
            <Navbar />
            <Outlet />
            <footer className="mt-auto border-t border-white/10 bg-[#0c0c0f]">
                <div className="mx-auto flex min-h-[90px] w-[calc(100%-2rem)] max-w-[1180px] items-center justify-between gap-4 max-[520px]:min-h-[112px] max-[520px]:flex-wrap max-[520px]:py-5">
                    <Link className="inline-flex items-center gap-2 font-sans text-[15px] font-bold tracking-tight text-[#f4f1ed] no-underline" to="/">
                        <Clapperboard size={18} />
                        <span>Moviethy</span>
                    </Link>
                    <p className="m-0 text-xs text-[#a4a1a2] max-[520px]:order-1 max-[520px]:basis-full">Discover something worth watching.</p>
                    <small className="text-xs text-[#a4a1a2]">© {new Date().getFullYear()} Moviethy</small>
                </div>
            </footer>
        </div>
    );
}
