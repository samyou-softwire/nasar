import {Link, Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Rocks = () => <>
    <Sidebar title={"Rocks"}>
        <Link to={"minecraft"}>Minecraft</Link>
        <Link to={"real"}>Real</Link>
    </Sidebar>
    <Outlet/>
</>


export default Rocks;