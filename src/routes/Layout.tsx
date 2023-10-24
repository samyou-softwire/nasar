import {Link, Outlet, useMatch, useNavigation} from "react-router-dom";
import styles from "./Layout.module.css";
import Home from "./home/Home";
import Spinner from "../components/Spinner/Spinner";

const Layout = () => {
    const onHomepage = useMatch("/");
    const navigation = useNavigation();

    return <div className={styles.Layout}>
        {navigation.state === "loading" && <Spinner/>}
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