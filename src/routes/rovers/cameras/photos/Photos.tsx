import {isRouteErrorResponse, LoaderFunction, useLoaderData, useRouteError} from "react-router-dom";
import {fetchFromBackend} from "../../../../API";
import React from "react";

interface PhotoData {
    src: string,
    camera: string,
    rover: string,
    id: number
}

type PhotosData = PhotoData[];

const Photos = () => {
    const photosData = useLoaderData() as PhotosData;

    return <div>
        {photosData.map(photoData => <img
            src={photoData.src}
            alt={`${photoData.rover} ${photoData.camera}`}
            key={photoData.id}
        />)}
    </div>
};
export const photosLoader: LoaderFunction = async ({params}) => {
    return fetchFromBackend(`rovers/${params["roverID"]}/cameras/${params["cameraID"]}/photos`);
}

export function PhotosBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>No photos found!</div>;
        }
    }

    return <div>Something went wrong</div>;
}

export default Photos;