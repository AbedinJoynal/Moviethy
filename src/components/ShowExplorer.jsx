import { Search, SlidersHorizontal } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { getShows } from '../services/get-shows';
import { getShowsbysearch } from '../services/get-searchedshow';
import ShowCard from './ShowCard';
import ShowModal from './ShowModal';

export default function ShowExplorer({
    title = 'Explore all shows',
    description = 'Find your next favorite story.',
}) {
    const [query, setQuery] = useState('');
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const closeSelectedShow = useCallback(() => setSelectedShow(null), []);

    useEffect(() => {
        const controller = new AbortController();
        const searchTerm = query.trim();

        const timeoutId = window.setTimeout(
            async () => {
                setLoading(true);
                setError('');
                try {
                    const results = searchTerm
                        ? await getShowsbysearch(searchTerm, controller.signal)
                        : await getShows(controller.signal);
                    setShows(results);
                } catch (requestError) {
                    if (requestError.name !== 'AbortError') {
                        setError(
                            'We could not load shows right now. Please try again.',
                        );
                        setShows([]);
                    }
                } finally {
                    if (!controller.signal.aborted) setLoading(false);
                }
            },
            searchTerm ? 350 : 0,
        );

        return () => {
            window.clearTimeout(timeoutId);
            controller.abort();
        };
    }, [query]);

    return (
        <section
            className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] py-[76px] pb-[92px] max-md:py-14 max-md:pb-16"
            aria-labelledby="shows-heading"
        >
            <div className="mb-6 flex items-end justify-between gap-6 max-[520px]:items-start">
                <div>
                    <p className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.8px] text-[#d3fb55]">
                        <SlidersHorizontal size={14} /> THE COLLECTION
                    </p>
                    <h2 id="shows-heading" className="m-0 font-sans text-[clamp(30px,4vw,42px)] font-semibold tracking-tight text-[#f4f1ed]">
                        {title}
                    </h2>
                    <p className="mt-2 text-sm text-[#a4a1a2]">{description}</p>
                </div>
                <span className="whitespace-nowrap rounded-full border border-white/10 px-3 py-2 text-xs text-[#a4a1a2] max-[520px]:px-2.5 max-[520px]:text-[10px]">
                    {loading
                        ? 'Loading…'
                        : `${shows.length} ${shows.length === 1 ? 'show' : 'shows'}`}
                </span>
            </div>

            <label className="mb-7 flex min-h-[54px] items-center gap-3 rounded-[10px] border border-white/10 bg-[#19191e] px-4 text-[#8e8d91] transition focus-within:border-[#d3fb55]/50 focus-within:ring-4 focus-within:ring-[#d3fb55]/[0.08]">
                <Search size={20} aria-hidden="true" />
                <span className="sr-only">Search shows by title</span>
                <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search for a show..."
                    className="h-[52px] min-w-0 flex-1 border-0 bg-transparent text-sm text-[#f4f1ed] outline-none placeholder:text-[#77767b] focus-visible:outline-none"
                />
                {query && (
                    <button
                        type="button"
                        className="cursor-pointer rounded-md border-0 bg-transparent px-2.5 py-2 text-sm text-[#a4a1a2] hover:bg-white/[0.06] hover:text-[#d3fb55]"
                        onClick={() => setQuery('')}
                    >
                        Clear
                    </button>
                )}
            </label>

            {loading && (
                <div className="flex min-h-[150px] items-center justify-center gap-3 text-center text-[#a4a1a2]" role="status">
                    <span className="size-5 animate-spin rounded-full border-2 border-[#d3fb55]/25 border-t-[#d3fb55]" />
                    <p className="m-0">
                        {query.trim() ? 'Searching shows…' : 'Loading shows…'}
                    </p>
                </div>
            )}
            {!loading && error && (
                <p className="flex min-h-[150px] items-center justify-center text-center text-[#ff9a9a]" role="alert">
                    {error}
                </p>
            )}
            {!loading && !error && shows.length === 0 && (
                <p className="flex min-h-[150px] items-center justify-center text-center text-[#a4a1a2]">
                    No shows found. Try another title.
                </p>
            )}

            {!loading && !error && shows.length > 0 && (
                <div className="grid grid-cols-2 gap-x-3 gap-y-4 min-[521px]:grid-cols-3 min-[761px]:grid-cols-4 min-[1051px]:grid-cols-5 min-[761px]:gap-x-[18px] min-[761px]:gap-y-[22px]">
                    {shows.map((show) => (
                        <ShowCard
                            key={show.id}
                            show={show}
                            onSelect={setSelectedShow}
                        />
                    ))}
                </div>
            )}

            {selectedShow && (
                <ShowModal show={selectedShow} onClose={closeSelectedShow} />
            )}
        </section>
    );
}
