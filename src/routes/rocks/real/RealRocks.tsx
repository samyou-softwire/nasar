import {Link, Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const RealRocks = () => <>
    <Sidebar2 title={"Real"}>
        <Link to={"pebble"}>Pebble</Link>
        <Link to={"marble"}>Marble</Link>
    </Sidebar2>
    <Outlet/>
</>;

export default RealRocks;