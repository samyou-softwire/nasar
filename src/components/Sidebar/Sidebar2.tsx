import Sidebar from "./Sidebar";
import {PropsWithChildren} from "react";

const Sidebar2 = (props: PropsWithChildren<{
    title: string,
}>) => <Sidebar right {...props}/>

export default Sidebar2;