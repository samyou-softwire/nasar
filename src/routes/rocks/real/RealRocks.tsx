import {Outlet} from "react-router-dom";
import Sidebar2 from "../../../components/Sidebar/Sidebar2";

const RealRocks = () => <>
    <Sidebar2 title={"Real"}/>
    <Outlet/>
</>;

export default RealRocks;