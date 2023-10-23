import React, {createContext, useContext, useState} from "react";

const Context = createContext({
    clicks: 0, setClicks:( value: number) => {}
});

const Component1 = () => {
    const [clicks, setClicks] = useState(0);

    return <div>
        <Context.Provider value={{
            clicks,
            setClicks
        }}>
            <Component2/>
            <Component3/>
        </Context.Provider>
    </div>
};
const Component2 = () => {
    const {clicks, setClicks} = useContext(Context)

    return <button onClick={() => setClicks(clicks+1)}>Clicks2</button>
};
const Component3 = () => <div>
    <Component4/>
    <p>Message</p>
</div>
const Component4 = () => {
    const {clicks} = useContext(Context);

    return <p>Value: {clicks}</p>
};

export default Component1;