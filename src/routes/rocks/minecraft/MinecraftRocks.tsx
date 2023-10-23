import {Link, Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const MinecraftRocks = () => <>
    <Sidebar2 title={"Minecraft"}>
        <Link to={"cobblestone"}>Cobblestone</Link>
        <Link to={"obsidian"}>Obsidian</Link>
    </Sidebar2>
    <Outlet/>
</>

export default MinecraftRocks;