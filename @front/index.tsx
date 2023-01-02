import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "@AppCss/global.scss";
import Modal from "react-modal";
import "./FontAwesomeIncludes";

Modal.setAppElement('#root');

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);