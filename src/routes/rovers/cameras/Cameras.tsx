import {isRouteErrorResponse, Link, LoaderFunction, Outlet, useLoaderData, useRouteError} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";
import {fetchFromBackend} from "../../../API";
import React from "react";

interface CameraData {
    name: string,
    fullName: string
}

type CamerasData = CameraData[]

const Cameras = () => {
    const camerasData = useLoaderData() as CamerasData;

    return <>
        <Sidebar2 title={"Cameras"}>
            {camerasData.map(cameraData => <Link
                to={`${cameraData.name.toLowerCase()}/photos`}
                key={cameraData.name}>
                {cameraData.fullName}
            </Link>)}
        </Sidebar2>
        <Outlet/>
    </>;
}
export const camerasLoader: LoaderFunction = async ({params}) => {
    return fetchFromBackend(`rovers/${params["roverID"]}/cameras`);
}

export function CamerasBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>Couldn't find this rover!</div>;
        }
    }

    return <div>Something went wrong</div>;
}

export default Cameras;