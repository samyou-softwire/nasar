import nasa from "./nasa.png"

const Nasa = () => {
    return <div>
        <h1>Welcome to NASA info centre!!!</h1>
        <p>See our selection of rovers and all the photos.</p>
        <p>Curiosity is my favourite!</p>
        <img className={"NasaLogo"} src={"./nasa.png"} alt={"nasa logo"}/>
    </div>
}

export default Nasa;