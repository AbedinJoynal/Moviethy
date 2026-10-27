import ShowExplorer from '../components/ShowExplorer';

export default function Show() {
    return (
        <main className="flex-1">
            <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] pt-[70px] max-md:pt-[45px]">
                <p className="mb-[18px] text-[11px] font-bold uppercase tracking-[1.8px] text-[#d3fb55]">THE MOVIETHY GUIDE</p>
                <h1 className="m-0 max-w-[800px] font-sans text-[clamp(42px,6vw,68px)] font-semibold leading-tight tracking-[-3.5px] text-[#f4f1ed] max-md:tracking-[-2.5px]">
                    Find your next <span className="text-[#d3fb55]">favorite show.</span>
                </h1>
                <p className="mt-2 text-sm text-[#a4a1a2]">
                    Search the TVMaze collection and open any title to learn more.
                </p>
            </div>
            <ShowExplorer title="Browse the collection" description="Search the TVMaze catalog by show title." />
        </main>
    );
}
