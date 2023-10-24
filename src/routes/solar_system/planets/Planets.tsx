import {Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const Planets = () => <>
    <Sidebar2 title={"Planets"}/>
    <Outlet/>
</>;

export default Planets;