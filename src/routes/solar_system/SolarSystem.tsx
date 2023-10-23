import {Link, Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const SolarSystem = () => <>
    <Sidebar title={"The Solar System"}>
        <Link to={"planets"}>Planets</Link>
        <Link to={"moons"}>Moons</Link>
    </Sidebar>
    <Outlet/>
</>

export default SolarSystem;