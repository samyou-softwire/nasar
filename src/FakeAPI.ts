type RouteObject = {id: string, display: string};

export function getObjects(): Promise<RouteObject[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: "rocks",
                display: "Rocks"
            },
            {
                id: "solar-system",
                display: "Solar System"
            }
        ]), 1000);
    })
}

export function getRocks(): Promise<RouteObject[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: "minecraft",
                display: "Minecraft"
            },
            {
                id: "real",
                display: "Real"
            }
        ]), 1000);
    })
}

export function getSolarSystem(): Promise<RouteObject[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: "planets",
                display: "Planets"
            },
            {
                id: "moons",
                display: "Moons"
            }
        ]), 1000);
    })
}

export function getMinecraft(): Promise<RouteObject[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: "cobblestone",
                display: "Cobblestone"
            },
            {
                id: "obsidian",
                display: "Obsidian"
            }
        ]), 1000);
    })
}

export function getReal(): Promise<RouteObject[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: "pebble",
                display: "Pebble"
            },
            {
                id: "marble",
                display: "Marble"
            }
        ]), 1000);
    })
}

export function getPlanets(): Promise<RouteObject[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: "earth",
                display: "Earth"
            },
            {
                id: "mars",
                display: "Mars"
            }
        ]), 1000);
    })
}

export function getMoons(): Promise<RouteObject[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: "moon",
                display: "The Moon"
            },
            {
                id: "crescent",
                display: "Crescent Moon"
            }
        ]), 1000);
    })
}