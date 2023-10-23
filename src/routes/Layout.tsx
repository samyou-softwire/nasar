import Rocks from "./rocks/Rocks";
import SolarSystem from "./solar_system/SolarSystem";
import {Outlet} from "react-router-dom";

const Layout = () => <div>
    <h1>Objects Website</h1>
    <Outlet/>
</div>

export default Layout;