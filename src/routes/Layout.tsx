import {Link, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => <div>
    <header className={styles.Layout}>
        <h1>Objects Website</h1>
        <div className={styles.Links}>
            <Link to={"rocks"}>Rocks</Link>
            <Link to={"solar-system"}>Solar System</Link>
        </div>
    </header>
    <Outlet/>
</div>

export default Layout;