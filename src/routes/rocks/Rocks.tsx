import {Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Rocks = () => <>
    <Sidebar title={"Rocks"}/>
    <Outlet/>
</>


export default Rocks;