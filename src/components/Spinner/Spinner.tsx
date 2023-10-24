import {
    BarLoader,
    BeatLoader,
    BounceLoader,
    CircleLoader,
    ClimbingBoxLoader,
    ClipLoader,
    ClockLoader,
    DotLoader,
    FadeLoader,
    GridLoader,
    HashLoader,
    MoonLoader,
    PacmanLoader,
    PropagateLoader,
    PuffLoader,
    PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader
} from "react-spinners";
import styles from "./Spinner.module.css";
import random from "random";

const Spinner = () => {
    const spinner = random.choice([
        <ClimbingBoxLoader/>,
        <BarLoader/>,
        <BeatLoader/>,
        <BounceLoader/>,
        <CircleLoader/>,
        <ClipLoader/>,
        <ClockLoader/>,
        <DotLoader/>,
        <FadeLoader/>,
        <GridLoader/>,
        <HashLoader/>,
        <MoonLoader/>,
        <PacmanLoader/>,
        <PropagateLoader/>,
        <PuffLoader/>,
        <PulseLoader/>,
        <RingLoader/>,
        <RiseLoader/>,
        <RotateLoader/>,
        <ScaleLoader/>,
        <SkewLoader/>,
        <SquareLoader/>,
        <SyncLoader/>
    ])

    return <div className={styles.Grayout}>
        {spinner}
    </div>
}

export default Spinner;