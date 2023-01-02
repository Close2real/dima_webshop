import React, {useCallback, useEffect, useState} from "react";
import "./footer.scss";
import Logo from "@AppAssets/img/Logo.png";
import {library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareInstagram, faSquareTwitter, faSquareFacebook} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <>
            <footer className={'app-main-footer'}>
                <div className="app-footer flex">
                    <div className="app-footer__menu container">
                        <div className="app-footer__menu__links">
                            <h3 className="app-footer__menu__links__title">
                                Футер инфа 1
                            </h3>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                        </div>
                        <div className="app-footer__menu__links">
                            <h3 className="app-footer__menu__links__title">
                                Футер инфа 1
                            </h3>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                        </div>
                        <div className="app-footer__menu__links">
                            <h3 className="app-footer__menu__links__title">
                                Футер инфа 1
                            </h3>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                            <div className="app-footer__menu__links__link">Пункт 1</div>
                        </div>
                        <div className="app-footer__menu__subscription">
                            <h3 className="app-footer__menu__subscription__title">Подписка</h3>
                            <div className="app-footer__menu__subscription__subscribe">Какой-то текст для того чтобы подписались</div>
                            <div className="app-footer__menu__subscription__subscribe_block">
                                <input placeholder="Введите email" type="text"/>
                                <button>Подписаться</button>
                            </div>
                        </div>
                    </div>
                    <div className="app-footer__infoblock container">
                        <div className="app-footer__infoblock__logo">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="app-footer__infoblock__socials">
                            <FontAwesomeIcon icon={faSquareInstagram} />
                            <FontAwesomeIcon icon={faSquareTwitter} />
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </div>
                    </div>
                    <div className="app-footer__additional">
                        <div className="app-footer__additional__container container">
                            <div className="app-footer__additional__container__item">Копирайт</div>
                            <div className="app-footer__additional__container__item">Условия приватности</div>
                            <div className="app-footer__additional__container__item">Условия пользования</div>
                            <div className="app-footer__additional__container__item">Дисклеймер</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

};

export default Footer;