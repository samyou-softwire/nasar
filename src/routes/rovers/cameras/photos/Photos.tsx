import {LoaderFunction, useLoaderData} from "react-router-dom";
import {fetchFromBackend} from "../../../../API";

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

export default Photos;
export const photosLoader: LoaderFunction = async ({params}) => {
    return fetchFromBackend(`rovers/${params["roverID"]}/cameras/${params["cameraID"]}/photos`);
}