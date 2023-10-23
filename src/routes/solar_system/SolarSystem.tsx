import {Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const SolarSystem = () => <>
    <Sidebar title={"Solar System"}/>
    <Outlet/>
</>

export default SolarSystem;