import {PropsWithChildren} from "react";
import styles from "./Sidebar.module.css";
import {Outlet} from "react-router-dom";

const Sidebar = (props: PropsWithChildren<{
    title: string
}>) => <div className={styles.Sidebar}>
    <h2>{props.title}</h2>
    <div className={styles.Links}>
        {props.children}
    </div>
    <div className={styles.Outlet}>
        <Outlet/>
    </div>
</div>

export default Sidebar;