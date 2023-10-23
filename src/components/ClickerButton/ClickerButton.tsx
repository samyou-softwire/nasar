import {useEffect, useState} from "react";

const ClickerButton = () => {
    const storedClicks = localStorage.getItem("clicks");
    const initialClicks = storedClicks ? parseInt(storedClicks) : 0;
    const [clicks, setClicks] = useState<number>(initialClicks);

    useEffect(() => {
        localStorage.setItem("clicks", `${clicks}`);
    }, [clicks]);

    return <button onClick={() => setClicks(clicks+1)}>Clicks {clicks}</button>
}

export default ClickerButton;