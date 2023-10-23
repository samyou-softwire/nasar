import TheMoon from "./moons/TheMoon";
import Earth from "./planets/Earth";
import {Outlet} from "react-router-dom";

const SolarSystem = () => <div>
    <h2>The Solar System</h2>
    <Outlet/>
</div>

export default SolarSystem;