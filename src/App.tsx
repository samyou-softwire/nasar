import React from 'react';
import './App.css';
import {createBrowserRouter, isRouteErrorResponse, RouterProvider, useRouteError} from "react-router-dom";
import Layout from "./routes/Layout";
import Rovers, {RoversBoundary, roversLoader} from "./routes/rovers/Rovers";
import Cameras, {CamerasBoundary, camerasLoader} from "./routes/rovers/cameras/Cameras";
import Photos, {PhotosBoundary, photosLoader} from "./routes/rovers/cameras/photos/Photos";

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
    children: [
        {
            path: "rovers",
            element: <Rovers/>,
            loader: roversLoader,
            errorElement: <RoversBoundary/>,
            children: [
                {
                    path: ":roverID/cameras",
                    element: <Cameras/>,
                    loader: camerasLoader,
                    errorElement: <CamerasBoundary/>,
                    children: [
                        {
                            path: ":cameraID/photos",
                            element: <Photos/>,
                            loader: photosLoader,
                            errorElement: <PhotosBoundary/>,
                        }
                    ]
                },
            ]
        },
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
