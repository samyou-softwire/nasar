import styles from "./Sidebar.module.css";
import {Link, useHref, useMatch} from "react-router-dom";

const Sidebar = (props: {
    title: string,
    right?: boolean,
}) => {
    const objects: any[] = [];
    const href = useHref(".");
    function useRoute(route: any) {
        return <Link
            key={route.id}
            className={useMatch(`${href}/${route.id}`) ? styles.ActiveLink : ""}
            to={route.id}
        >
            {route.display}
        </Link>
    }

    return <div className={props.right ? styles.Sidebar2 : styles.Sidebar}>
        <h2>{props.title}</h2>
        <div className={styles.Links}>
            {objects.map(useRoute)}
        </div>
    </div>
}

export default Sidebar;