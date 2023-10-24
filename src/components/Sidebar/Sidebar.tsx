import styles from "./Sidebar.module.css";
import {PropsWithChildren} from "react";

const Sidebar = (props: PropsWithChildren<{
    title: string,
    right?: boolean,
}>) => {
    return <div className={props.right ? styles.Sidebar2 : styles.Sidebar}>
        <h2>{props.title}</h2>
        <div className={styles.Links}>
            {props.children}
        </div>
    </div>
}

export default Sidebar;