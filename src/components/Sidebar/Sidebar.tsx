import {PropsWithChildren} from "react";
import styles from "./Sidebar.module.css";

const Sidebar = (props: PropsWithChildren<{
    title: string
}>) => <div className={styles.Sidebar}>
    <h2>{props.title}</h2>
    <div className={styles.Links}>
        {props.children}
    </div>
</div>

export default Sidebar;