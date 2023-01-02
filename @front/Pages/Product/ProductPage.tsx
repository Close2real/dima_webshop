import React, {useState} from "react";
import "./productPage.scss";
import Breadcrumbs from "@Components/Breadcrumbs/Breadcrumbs";
import boots1 from "@AppAssets/img/boots1.jpg";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const ProductPage: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="content app-productpage">
            <div className="app-productpage__container container">
                <Breadcrumbs/>
                <div className="app-productpage__container__productblock">
                    <div className="app-productpage__container__productblock__left">
                        <div className="app-productpage__container__productblock__left__featured">
                            <div className="app-productpage__container__productblock__left__featured__new">Новое</div>
                            <div className="app-productpage__container__productblock__left__featured__discount">Скидка</div>
                        </div>
                        <img src={boots1} alt=""/>
                    </div>
                    <div className="app-productpage__container__productblock__right">
                        <div className="app-productpage__container__productblock__right__collection">Коллекция</div>
                        <div className="app-productpage__container__productblock__right__title">Ботинки</div>
                        <div className="app-productpage__container__productblock__right__type">Тип ботинок</div>
                        <div className="app-productpage__container__productblock__right__availability">На складе</div>
                        <div className="app-productpage__container__productblock__right__options">
                            <div className="app-productpage__container__productblock__right__options__title">
                                Выберите опцию
                            </div>
                            <div className="app-productpage__container__productblock__right__options__block">
                                <div className="app-productpage__container__productblock__right__options__block__option">Опция 1</div>
                                <div className="app-productpage__container__productblock__right__options__block__option">Опция 2</div>
                                <div className="app-productpage__container__productblock__right__options__block__option">Опция 3</div>
                            </div>
                        </div>
                        <div className="app-productpage__container__productblock__right__color">
                            <div className="app-productpage__container__productblock__right__color__title">
                                Основной цвет
                            </div>
                            <div className="app-productpage__container__productblock__right__color__value">
                                Белый
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs className="app-productpage__container__tabs">
                    <TabList>
                        <Tab>Параметры 1</Tab>
                        <Tab>Параметры 2</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Всякие параметры 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Всякие параметры 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default ProductPage;