import MinecraftRocks from "./minecraft/MinecraftRocks";
import RealRocks from "./real/RealRocks";
import {Outlet} from "react-router-dom";

const Rocks = () => <div>
    <h2>Rocks</h2>
    <Outlet/>
</div>

export default Rocks;