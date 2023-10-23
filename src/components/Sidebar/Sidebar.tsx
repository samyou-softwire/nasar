import styles from "./Sidebar.module.css";
import {Link, useHref, useLoaderData, useMatch} from "react-router-dom";
import {RouteObject} from "../../FakeAPI";
import {useCallback} from "react";

const Sidebar = (props: {
    title: string,
    right?: boolean,
}) => {
    const routes = useLoaderData() as RouteObject[];
    const href = useHref(".");
    function useRoute(route: RouteObject) {
        return <Link
            className={useMatch(`${href}/${route.id}`) ? styles.ActiveLink : ""}
            to={route.id}
        >
            {route.display}
        </Link>
    }

    return <div className={props.right ? styles.Sidebar2 : styles.Sidebar}>
        <h2>{props.title}</h2>
        <div className={styles.Links}>
            {routes.map(useRoute)}
        </div>
    </div>
}

export default Sidebar;