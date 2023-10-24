import {Link, LoaderFunction, Outlet, useLoaderData} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import {fetchFromBackend} from "../../API";

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


export default Rovers;