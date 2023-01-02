import React, {Suspense} from "react";
import Router from "./_Router";
import {Provider} from "jotai";

const App = () => {

    return (
        <Provider>
            <Suspense fallback="Loading...">
                <Router/>
            </Suspense>
        </Provider>
    );

};

export default App;