import {Link} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Rocks = () => <div>
    <Sidebar title={"Rocks"}>
        <Link to={"minecraft"}>Minecraft</Link>
        <Link to={"real"}>Real</Link>
    </Sidebar>
</div>

export default Rocks;