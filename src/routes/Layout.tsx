import {Link, Outlet, useMatch} from "react-router-dom";
import styles from "./Layout.module.css";
import Home from "./home/Home";

const Layout = () => {
    const onHomepage = useMatch("/");

    return <div className={styles.Layout}>
        <header className={styles.Header}>
            <h1>NASAR</h1>
            <div className={styles.Links}>
                <Link to={"rovers"}>Rovers</Link>
            </div>
        </header>
        {onHomepage ? <Home/> : <Outlet/>}
        <footer className={styles.Footer}>
            <Link to={"/"}>Home</Link>
        </footer>
    </div>
}

export default Layout;