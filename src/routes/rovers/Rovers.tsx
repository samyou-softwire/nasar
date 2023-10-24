import {Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Rovers = () => <>
    <Sidebar title={"Rovers"}/>
    <Outlet/>
</>


export default Rovers;