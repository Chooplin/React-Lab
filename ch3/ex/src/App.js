import { useState } from 'react';
import Accordion from "./components/Accordion";

function App() {
    const [toggle, setToggle] = useState(true);

    return (
        <div style={{fontSize: '2rem', padding: 30}}>
            <Accordion
                title="This is a title"
                content={"This is a content"}
            />
        </div>
    );
}

export default App;
