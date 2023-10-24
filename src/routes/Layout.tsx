import {Link, Outlet, useLoaderData, useMatch} from "react-router-dom";
import styles from "./Layout.module.css";
import {RouteObject} from "../FakeAPI";
import Home from "./home/Home";

const Layout = () => {
    const objects = useLoaderData() as RouteObject[];
    const onHomepage = useMatch("/");

    return <div className={styles.Layout}>
        <header className={styles.Header}>
            <h1>Objects Website</h1>
            <div className={styles.Links}>
                {objects.map(route => <Link key={route.id} to={route.id}>{route.display}</Link>)}
            </div>
        </header>
        {onHomepage ? <Home/> : <Outlet/>}
        <footer className={styles.Footer}>
            <Link to={"/"}>Home</Link>
        </footer>
    </div>
}

export default Layout;