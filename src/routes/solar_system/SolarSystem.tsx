import {Link} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const SolarSystem = () => <div>
    <Sidebar title={"The Solar System"}>
        <Link to={"planets"}>Planets</Link>
        <Link to={"moons"}>Moons</Link>
    </Sidebar>
</div>

export default SolarSystem;