import {Link, LoaderFunction, Outlet, useLoaderData} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";
import {fetchFromBackend} from "../../../API";

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

export default Cameras;