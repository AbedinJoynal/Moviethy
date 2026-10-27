import { CalendarDays, Star } from 'lucide-react';

function getYear(date) {
    return date ? date.slice(0, 4) : 'Year unavailable';
}

export default function ShowCard({ show, onSelect }) {
    return (
        <article className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#19191e] transition duration-200 hover:-translate-y-1 hover:border-[#d3fb55]/40">
            <button
                className="block aspect-[0.72] w-full cursor-pointer overflow-hidden border-0 bg-[#25252a] p-0 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#d3fb55]"
                type="button"
                aria-label={`See details for ${show.name}`}
                onClick={() => onSelect(show)}
            >
                {show.image?.medium ? (
                    <img
                        src={show.image.medium}
                        alt={`${show.name} poster`}
                        loading="lazy"
                        className="block size-full object-cover transition-transform duration-300 hover:scale-[1.035]"
                    />
                ) : (
                    <span
                        className="grid size-full place-items-center p-5 text-center text-sm text-[#a4a1a2]"
                        aria-label="Poster unavailable"
                    >
                        No poster available
                    </span>
                )}
            </button>
            <div className="p-3">
                <h3 className="mb-2.5 overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-[#f4f1ed]" title={show.name}>
                    {show.name}
                </h3>
                <div className="flex min-h-5 items-center justify-between gap-2 text-[11px] text-[#a4a1a2] max-[520px]:items-start max-[520px]:flex-col max-[520px]:gap-1">
                    <span className="inline-flex items-center gap-1 text-[#f0c767]">
                        <Star size={15} fill="currentColor" />{' '}
                        {show.rating?.average ?? 'N/A'}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <CalendarDays size={15} /> {getYear(show.premiered)}
                    </span>
                </div>
                <button
                    className="mt-3 min-h-[38px] w-full cursor-pointer rounded-md border border-[#d3fb55]/25 bg-[#d3fb55]/[0.07] px-3 text-xs font-bold text-[#d3fb55] transition-colors hover:bg-[#d3fb55] hover:text-[#12130e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d3fb55] max-[520px]:mt-2.5"
                    type="button"
                    onClick={() => onSelect(show)}
                >
                    See details
                </button>
            </div>
        </article>
    );
}
