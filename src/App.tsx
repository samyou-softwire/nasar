import React from 'react';
import './App.css';
import {createBrowserRouter, isRouteErrorResponse, RouterProvider, useRouteError} from "react-router-dom";
import Layout from "./routes/Layout";
import Rovers from "./routes/rovers/Rovers";
import Cameras from "./routes/rovers/cameras/Cameras";
import Photos from "./routes/rovers/cameras/photos/Photos";

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
            children: [
                {
                    path: ":roverID/cameras",
                    element: <Cameras/>,
                    children: [
                        {
                            path: ":cameraID/photos",
                            element: <Photos/>
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
