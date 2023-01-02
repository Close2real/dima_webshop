import React from "react";
import "./breadcrumbs.scss";

const Breadcrumbs: React.FC = () => {
    return (
        <div className="component-breadcrumbs">
            <div className="component-breadcrumbs__item">Главная</div>
            <div className="component-breadcrumbs__item">Ботинки</div>
        </div>
    );
}

export default Breadcrumbs;