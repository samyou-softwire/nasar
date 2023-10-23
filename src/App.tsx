import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
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

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "rocks",
            element: <Rocks/>,
            children: [
                {
                    path: "minecraft",
                    element: <MinecraftRocks/>,
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
            children: [
                {
                    path: "moons",
                    element: <Moons/>,
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
