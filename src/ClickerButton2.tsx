import {useState} from "react";

const Component1 = () => {
    const [clicks, setClicks] = useState(0);

    return <div>
        <Component2 clicks={clicks} setClicks={setClicks}/>
        <Component3 clicks={clicks}/>
    </div>
};
const Component2 = (props: {
    clicks: number
    setClicks: (value: number) => void
}) => <button onClick={() => props.setClicks(props.clicks+1)}>Clicks2</button>;
const Component3 = (props: {
    clicks: number
}) => <div>
    <Component4 clicks={props.clicks}/>
    <p>Message</p>
</div>
const Component4 = (props: {
    clicks: number
}) => <p>Value: {props.clicks}</p>;

export default Component1;