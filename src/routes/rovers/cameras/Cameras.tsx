import {Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const Cameras = () => <>
    <Sidebar2 title={"Cameras"}/>
    <Outlet/>
</>

export default Cameras;