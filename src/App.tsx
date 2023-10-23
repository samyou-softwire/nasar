import React from 'react';
import './App.css';
import {createBrowserRouter, isRouteErrorResponse, RouterProvider, useRouteError} from "react-router-dom";
import Layout from "./routes/Layout";
import Rocks from "./routes/rocks/Rocks";
import MinecraftRocks from "./routes/rocks/minecraft/MinecraftRocks";
import RealRocks from "./routes/rocks/real/RealRocks";
import SolarSystem from "./routes/solar_system/SolarSystem";
import TheMoon from "./routes/solar_system/moons/TheMoon";
import Moons from "./routes/solar_system/moons/Moons";
import CrescentMoon from "./routes/solar_system/moons/CrescentMoon";
import Pebble from "./routes/rocks/real/Pebble";
import Marble from "./routes/rocks/real/Marble";
import Cobblestone from "./routes/rocks/minecraft/Cobblestone";
import Obsidian from "./routes/rocks/minecraft/Obsidian";
import Planets from "./routes/solar_system/planets/Planets";
import Earth from "./routes/solar_system/planets/Earth";
import Mars from "./routes/solar_system/planets/Mars";
import {getMinecraft, getMoons, getObjects, getPlanets, getReal, getRocks, getSolarSystem} from "./FakeAPI";

function RootBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>This page doesn't exist!</div>;
        }

        if (error.status === 401) {
            return <div>You aren't authorized to see this</div>;
        }

        if (error.status === 503) {
            return <div>Looks like our API is down</div>;
        }

        if (error.status === 418) {
            return <div>🫖</div>;
        }
    }

    return <div>Something went wrong</div>;
}

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    errorElement: <RootBoundary/>,
    loader: () => {
        return getObjects();
    },
    children: [
        {
            path: "rocks",
            element: <Rocks/>,
            loader: () => {
                return getRocks();
            },
            children: [
                {
                    path: "minecraft",
                    element: <MinecraftRocks/>,
                    loader: () => {
                        return getMinecraft();
                    },
                    children: [
                        {
                            path: "cobblestone",
                            element: <Cobblestone/>
                        },
                        {
                            path: "obsidian",
                            element: <Obsidian/>
                        }
                    ]
                },
                {
                    path: "real",
                    element: <RealRocks/>,
                    loader: () => {
                        return getReal();
                    },
                    children: [
                        {
                            path: "pebble",
                            element: <Pebble/>
                        },
                        {
                            path: "marble",
                            element: <Marble/>
                        }
                    ]
                },
            ]
        },
        {
            path: "solar-system",
            element: <SolarSystem/>,
            loader: () => {
                return getSolarSystem();
            },
            children: [
                {
                    path: "moons",
                    element: <Moons/>,
                    loader: () => {
                        return getMoons();
                    },
                    children: [
                        {
                            path: "moon",
                            element: <TheMoon/>
                        },
                        {
                            path: "crescent",
                            element: <CrescentMoon/>
                        }
                    ]
                },
                {
                    path: "planets",
                    element: <Planets/>,
                    loader: () => {
                        return getPlanets();
                    },
                    children: [
                        {
                            path: "earth",
                            element: <Earth/>
                        },
                        {
                            path: "mars",
                            element: <Mars/>
                        }
                    ]
                },
            ]
        }
    ]
}])

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
