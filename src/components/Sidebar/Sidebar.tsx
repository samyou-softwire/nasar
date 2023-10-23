import styles from "./Sidebar.module.css";
import {Link, useLoaderData} from "react-router-dom";
import {RouteObject} from "../../FakeAPI";

const Sidebar = (props: {
    title: string
}) => {
    const routes = useLoaderData() as RouteObject[]

    return <div className={styles.Sidebar}>
        <h2>{props.title}</h2>
        <div className={styles.Links}>
            {routes.map(route => <Link to={route.id}>{route.display}</Link>)}
        </div>
    </div>
}

export default Sidebar;