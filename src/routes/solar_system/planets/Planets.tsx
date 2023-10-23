import {Link, Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const Planets = () => <>
    <Sidebar2 title={"Planets"}>
        <Link to={"earth"}>Earth</Link>
        <Link to={"mars"}>Mars</Link>
    </Sidebar2>
    <Outlet/>
</>;

export default Planets;