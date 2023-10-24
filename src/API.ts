export const fetchFromBackend: typeof fetch = async (input, init) => {
    const result = await fetch(`http://localhost:8000/${input}`, init);

    if (!result.ok) {
        throw result;
    }

    return result;
};