import {Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const Moons = () => <>
    <Sidebar2 title={"Moons"}/>
    <Outlet/>
</>;

export default Moons;