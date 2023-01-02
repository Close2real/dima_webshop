import React from "react";
import "./catalogPage.scss";
import boots1 from "@AppAssets/img/boots1.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "@Components/Breadcrumbs/Breadcrumbs";

const ContactsPage: React.FC = () => {
    return (
        <div className="content app-catalogpage">
            <div className="app-catalogpage__container container">
                <Breadcrumbs/>
                <div className="app-catalogpage__container__category">
                    Ботинки
                </div>
                <div className="app-catalogpage__container__catalog">
                    <div className="app-catalogpage__container__catalog__left">
                        <div className="app-catalogpage__container__catalog__left__options">
                            <div className="app-catalogpage__container__catalog__left__options__hide_show">
                                <div className="app-catalogpage__container__catalog__left__options__hide_show__arrow">
                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                </div>
                                <div className="app-catalogpage__container__catalog__left__options__hide_show__title">
                                    Filter
                                </div>
                            </div>
                            <div className="app-catalogpage__container__catalog__left__options__suboption">
                                <div className="app-catalogpage__container__catalog__left__options__suboption__name">
                                    Suboption
                                </div>
                                <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions">
                                    <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item">
                                        <input type="checkbox"/>
                                        <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item__title">Option 1</div>
                                    </div>
                                    <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item">
                                        <input type="checkbox"/>
                                        <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item__title">Option 2</div>
                                    </div>
                                    <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item">
                                        <input type="checkbox"/>
                                        <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item__title">Option 3</div>
                                    </div>
                                    <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item">
                                        <input type="checkbox"/>
                                        <div className="app-catalogpage__container__catalog__left__options__suboption__suboptions__item__title">Option 4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-catalogpage__container__catalog__right">
                        <div className="app-catalogpage__container__catalog__right__sort">
                            <div className="app-catalogpage__container__catalog__right__sort__items">
                                Items <span>1-24</span> of <span>40</span>
                            </div>
                            <div className="app-catalogpage__container__catalog__right__sort__block">
                                <div className="app-catalogpage__container__catalog__right__sort__block__text">
                                    Sort by
                                </div>
                                <select name="" id="">
                                    <option value="newest">Новое</option>
                                    <option value="newest">Начиная от дешёвого</option>
                                    <option value="newest">Начиная от дорогого</option>
                                </select>
                            </div>
                        </div>
                        <div className="app-catalogpage__container__catalog__right__block">
                            <div className="app-catalogpage__container__catalog__right__block__item">
                                <div className="app-catalogpage__container__catalog__right__block__item__img">
                                    <div className="app-catalogpage__container__catalog__right__block__item__img__featured">
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__new">Новое</div>
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__discount">Скидка</div>
                                    </div>
                                    <img src={boots1} alt=""/>
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__collection">
                                    Ботинки коллекция 123
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__name">
                                    Обычный ботинок
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__subcategory">
                                    Подкатегория
                                </div>
                            </div>
                            <div className="app-catalogpage__container__catalog__right__block__item">
                                <div className="app-catalogpage__container__catalog__right__block__item__img">
                                    <div className="app-catalogpage__container__catalog__right__block__item__img__featured">
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__new">Новое</div>
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__discount">Скидка</div>
                                    </div>
                                    <img src={boots1} alt=""/>
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__collection">
                                    Ботинки коллекция 123
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__name">
                                    Обычный ботинок
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__subcategory">
                                    Подкатегория
                                </div>
                            </div>
                            <div className="app-catalogpage__container__catalog__right__block__item">
                                <div className="app-catalogpage__container__catalog__right__block__item__img">
                                    <div className="app-catalogpage__container__catalog__right__block__item__img__featured">
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__new">Новое</div>
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__discount">Скидка</div>
                                    </div>
                                    <img src={boots1} alt=""/>
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__collection">
                                    Ботинки коллекция 123
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__name">
                                    Обычный ботинок
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__subcategory">
                                    Подкатегория
                                </div>
                            </div>
                            <div className="app-catalogpage__container__catalog__right__block__item">
                                <div className="app-catalogpage__container__catalog__right__block__item__img">
                                    <div className="app-catalogpage__container__catalog__right__block__item__img__featured">
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__new">Новое</div>
                                        <div className="app-catalogpage__container__catalog__right__block__item__img__featured__discount">Скидка</div>
                                    </div>
                                    <img src={boots1} alt=""/>
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__collection">
                                    Ботинки коллекция 123
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__name">
                                    Обычный ботинок
                                </div>
                                <div className="app-catalogpage__container__catalog__right__block__item__subcategory">
                                    Подкатегория
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;