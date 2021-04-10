import React from "react";
import {render} from "react-dom";
import Container from "./container";
import {ReduxStore} from "./ReduxStore";
import {Provider} from "react-redux";
const App = () => {
    return (
        <Provider store={ReduxStore}>
            <div>
                <Container/>
            </div>
        </Provider>
    );
};

render(<App/>, document.getElementById("root"));
