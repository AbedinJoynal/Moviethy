import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router';
import ShowExplorer from '../components/ShowExplorer';

export default function Home() {
    return (
        <main className="flex-1">
            <section className="relative isolate flex min-h-[510px] items-center overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_76%_45%,rgba(116,121,53,0.22),transparent_35%),linear-gradient(115deg,#121214_10%,#18191a_58%,#222318_100%)] max-md:min-h-[500px]">
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(90deg,transparent,black_80%)]" />
                <div className="pointer-events-none absolute -right-[20%] top-[10%] -z-10 size-[280px] rounded-full border border-[#d3fb55]/10 shadow-[0_0_100px_rgba(211,251,85,0.07),inset_0_0_80px_rgba(211,251,85,0.035)] md:right-[12%] md:top-[15%] md:size-[280px]" />
                <div className="pointer-events-none absolute -right-[35%] top-[15%] -z-10 size-[420px] rounded-full border border-[#d3fb55]/10 opacity-45 shadow-[0_0_100px_rgba(211,251,85,0.07),inset_0_0_80px_rgba(211,251,85,0.035)] md:right-[5%] md:top-[23%]" />
                <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] py-[84px] pb-[104px] max-md:py-[62px]">
                    <p className="mb-[18px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.8px] text-[#d3fb55]">
                        <span className="size-[7px] rounded-full bg-[#d3fb55] shadow-[0_0_14px_rgba(211,251,85,0.85)]" />
                        YOUR NEXT FAVORITE IS HERE
                    </p>
                    <h1 className="m-0 max-w-[760px] font-sans text-[clamp(48px,8vw,88px)] font-semibold leading-[0.99] tracking-[-5px] text-[#f4f1ed] max-md:text-[clamp(45px,12vw,62px)] max-md:tracking-[-3px] md:text-[clamp(52px,8vw,88px)]">
                        Stories worth
                        <br />
                        <span className="text-[#d3fb55]">staying in for.</span>
                    </h1>
                    <p className="my-6 mb-[30px] max-w-[470px] text-base leading-[1.7] text-[#b6b3b0] max-md:mt-[18px] max-md:text-sm">
                        Explore a world of shows, discover hidden gems, and find
                        the next thing you can’t stop watching.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 max-[520px]:max-w-[255px] max-[520px]:flex-col max-[520px]:items-stretch">
                        <Link
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d3fb55] px-5 text-sm font-bold text-[#15170f] no-underline transition hover:-translate-y-0.5 hover:bg-[#e2ff7b] max-[520px]:w-full"
                            to="/shows"
                        >
                            Explore shows <ArrowRight size={18} />
                        </Link>
                        <a
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-5 text-sm font-bold text-[#f4f1ed] no-underline transition hover:-translate-y-0.5 hover:bg-white/10 max-[520px]:w-full"
                            href="#show-collection"
                        >
                            <Play size={16} /> Browse the collection
                        </a>
                    </div>
                    <a
                        className="absolute bottom-[30px] left-1/2 grid size-[38px] -translate-x-1/2 place-items-center rounded-full border border-white/10 text-[#a4a1a2]"
                        href="#show-collection"
                        aria-label="Scroll to the show collection"
                    >
                        <ArrowDown size={18} />
                    </a>
                </div>
                <div
                    className="pointer-events-none absolute right-[10%] top-1/2 hidden size-[180px] -translate-y-1/2 text-[#d3fb55] opacity-65 md:block"
                    aria-hidden="true"
                >
                    <span className="absolute inset-6 rounded-full border border-[#d3fb55]/40" />
                    <span className="absolute left-[-45px] top-1/2 w-[270px] rotate-[-35deg] border-t border-[#d3fb55]/30" />
                </div>
            </section>
            <div id="show-collection" className="scroll-mt-20">
                <ShowExplorer
                    title="A universe of stories"
                    description="Browse the collection or search for a title you already love."
                />
            </div>
        </main>
    );
}
