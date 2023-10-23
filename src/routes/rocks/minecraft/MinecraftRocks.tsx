import {Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const MinecraftRocks = () => <>
    <Sidebar2 title={"Minecraft"}/>
    <Outlet/>
</>

export default MinecraftRocks;