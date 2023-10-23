import {Link, Outlet, useLoaderData} from "react-router-dom";
import styles from "./Layout.module.css";
import {RouteObject} from "../FakeAPI";

const Layout = () => {
    const objects = useLoaderData() as RouteObject[];

    return <div className={styles.Layout}>
        <header className={styles.Header}>
            <h1>Objects Website</h1>
            <div className={styles.Links}>
                {objects.map(route => <Link to={route.id}>{route.display}</Link>)}
            </div>
        </header>
        <Outlet/>
        <footer className={styles.Footer}>
            <Link to={"/"}>Home</Link>
        </footer>
    </div>
}

export default Layout;