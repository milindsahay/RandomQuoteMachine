import React from "react";
import { render } from "react-dom";
import Container from './container';

const App = ()=>{
    return (
        <div>
        <h1>In the React</h1>
        <Container />
        </div>
    );
}

render(<App />, document.getElementById('root'));