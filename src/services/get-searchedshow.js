export const getShowsbysearch = async (query, signal) => {
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
    const response = await fetch(url, { signal });

    if (!response.ok) {
        throw new Error(`Failed to search shows: ${response.status}`);
    }

    const results = await response.json();
    return results.map((result) => result.show);
};
