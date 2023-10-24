import {isRouteErrorResponse, Link, LoaderFunction, Outlet, useLoaderData, useRouteError} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import {fetchFromBackend} from "../../API";
import React from "react";

interface RoverData {
    id: string,
    name: string
}

type RoversData = RoverData[]

const Rovers = () => {
    const roversData = useLoaderData() as RoversData;

    return <>
        <Sidebar title={"Rovers"}>
            {roversData.map(roverData => <Link
                to={`${roverData.name.toLowerCase()}/cameras`}
                key={roverData.id}>
                {roverData.name}
            </Link>)}
        </Sidebar>
        <Outlet/>
    </>;
}
export const roversLoader: LoaderFunction = async () => {
    return fetchFromBackend("rovers");
}

export function RoversBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>Couldn't load rovers list!</div>;
        }
    }

    return <div>Something went wrong</div>;
}


export default Rovers;