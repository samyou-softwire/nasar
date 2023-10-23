import styles from "./Paragraph.module.css";

interface ParagraphProps {
    title: string,
    paragraph1: string,
    paragraph2: string,
    imageSrc: string,
    imageAlt?: string
}

const Paragraph = (props: ParagraphProps) => <div className={styles.Paragraph}>
    <h1>{props.title}</h1>
    <p>{props.paragraph1}</p>
    <p>{props.paragraph2}</p>
    <img className={styles.Image} src={props.imageSrc} alt={props.imageAlt ? props.imageAlt : "Paragraph Image"}/>
</div>

export default Paragraph;