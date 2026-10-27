import { CalendarDays, Star, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

function summaryAsText(summary) {
    return summary
        ? summary
              .replace(/<[^>]*>/g, ' ')
              .replace(/&nbsp;/g, ' ')
              .replace(/&amp;/g, '&')
              .replace(/&quot;/g, '"')
              .replace(/&#39;|&apos;/g, "'")
              .replace(/\s+/g, ' ')
              .trim()
        : 'No summary is available for this show.';
}

export default function ShowModal({ show, onClose }) {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        closeButtonRef.current?.focus();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-20 grid place-items-center overflow-y-auto bg-black/80 p-6 backdrop-blur-[7px] max-[520px]:items-start max-[520px]:py-8"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="relative grid w-full max-w-[760px] grid-cols-[minmax(190px,0.72fr)_1.28fr] overflow-hidden rounded-2xl border border-white/[0.14] bg-[#1b1b20] shadow-[0_24px_100px_rgba(0,0,0,0.6)] max-[520px]:max-w-[420px] max-[520px]:grid-cols-1"
                role="dialog"
                aria-modal="true"
                aria-labelledby="show-modal-title"
            >
                <button
                    ref={closeButtonRef}
                    className="absolute right-3 top-3 z-10 grid size-[38px] cursor-pointer place-items-center rounded-full border border-white/[0.17] bg-[#101013]/80 text-[#f4f1ed] hover:text-[#d3fb55]"
                    type="button"
                    aria-label="Close show details"
                    onClick={onClose}
                >
                    <X size={21} />
                </button>
                <div className="min-h-[400px] bg-[#25252a] max-[520px]:h-[230px] max-[520px]:min-h-0">
                    {show.image?.original || show.image?.medium ? (
                        <img
                            src={show.image.original || show.image.medium}
                            alt={`${show.name} poster`}
                            className="block size-full object-cover max-[520px]:object-[center_30%]"
                        />
                    ) : (
                        <span className="grid size-full place-items-center p-5 text-center text-sm text-[#a4a1a2]">
                            No poster available
                        </span>
                    )}
                </div>
                <div className="self-center p-[38px_30px] max-[520px]:p-6">
                    <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[1.8px] text-[#d3fb55]">
                        Show details
                    </p>
                    <h2
                        id="show-modal-title"
                        className="mb-4 mr-9 font-sans text-[30px] font-semibold leading-tight tracking-tight text-[#f4f1ed] max-[520px]:text-[25px]"
                    >
                        {show.name}
                    </h2>
                    <div className="flex flex-wrap gap-3 text-xs text-[#a4a1a2]">
                        <span className="inline-flex items-center gap-1 text-[#f0c767]">
                            <Star size={16} fill="currentColor" /> Rating:{' '}
                            {show.rating?.average ?? 'N/A'}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <CalendarDays size={16} /> Premiered:{' '}
                            {show.premiered || 'Unknown'}
                        </span>
                        {show.status && (
                            <span className="inline-flex items-center">
                                {show.status}
                            </span>
                        )}
                    </div>
                    {show.genres?.length > 0 && (
                        <div
                            className="mt-[18px] flex flex-wrap gap-2"
                            aria-label="Genres"
                        >
                            {show.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="rounded-full border border-[#d3fb55]/20 bg-[#d3fb55]/[0.06] px-2.5 py-1.5 text-[11px] text-[#d3fb55]"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}
                    <h3 className="mb-2 mt-6 text-sm font-semibold text-[#f4f1ed]">
                        Overview
                    </h3>
                    <p className="m-0 max-h-40 overflow-y-auto text-[13px] leading-[1.7] text-[#b7b4b4]">
                        {summaryAsText(show.summary)}
                    </p>
                    <button
                        className="mt-4 min-h-[38px] w-auto min-w-[110px] cursor-pointer rounded-md border border-[#d3fb55]/25 bg-[#d3fb55]/[0.07] px-4 text-xs font-bold text-[#d3fb55] hover:bg-[#d3fb55] hover:text-[#12130e]"
                        type="button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </section>
        </div>
    );
}
