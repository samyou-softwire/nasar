import {useState} from "react";

const ClickerButton = () => {
    const [clicks, setClicks] = useState<number>(0);

    return <button onClick={() => setClicks(clicks+1)}>Clicks {clicks}</button>
}

export default ClickerButton;