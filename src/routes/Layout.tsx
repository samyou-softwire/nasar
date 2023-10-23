import {Link, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => <div className={styles.Layout}>
    <header className={styles.Header}>
        <h1>Objects Website</h1>
        <div className={styles.Links}>
            <Link to={"rocks"}>Rocks</Link>
            <Link to={"solar-system"}>Solar System</Link>
        </div>
    </header>
    <Outlet/>
    <footer className={styles.Footer}>
        <Link to={"/"}>Home</Link>
    </footer>
</div>

export default Layout;