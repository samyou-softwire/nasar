import {Link, Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const Moons = () => <>
    <Sidebar2 title={"Moons"}>
        <Link to={"moon"}>The Moon</Link>
        <Link to={"crescent"}>Crescent Moon</Link>
    </Sidebar2>
    <Outlet/>
</>;

export default Moons;