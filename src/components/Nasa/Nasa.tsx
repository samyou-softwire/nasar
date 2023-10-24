import styles from "./Nasa.module.css";
import Paragraph from "../Paragraph/Paragraph";

const Nasa = () => <div className={styles.Centred}>
    <div className={styles.Sub}>
        <Paragraph
            title={"Welcome to NASA info centre!!!"}
            paragraph1={"See our selection of rovers and all the photos."}
            paragraph2={"Curiosity is my favourite!"}
            imageSrc={"./nasa.png"}
            imageAlt={"nasa logo"}
        />
    </div>
</div>

export default Nasa;