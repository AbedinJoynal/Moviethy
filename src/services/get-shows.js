export const getShows = async (signal) => {
    const result = await fetch('https://api.tvmaze.com/shows', { signal });

    if (!result.ok) {
        throw new Error(`Failed to fetch shows: ${result.status}`);
    }

    return result.json();
};
