import React from "react";
import {useSetAtom} from "jotai";
import {loginAtom} from "@Store/userStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homePage.scss";
import sliderImg from "@AppAssets/img/slider_sample.jpg";
import boots1 from "@AppAssets/img/boots1.jpg";
import boots2 from "@AppAssets/img/boots2.jpg";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const HomePage: React.FC = () => {
    const setLogin = useSetAtom(loginAtom);

    return (
        <div className="content app-homepage">
            <div className="container app-homepage__container">
                <Slider {...settings} className="app-homepage__slider">
                    <div className="app-homepage__slider__item"><img src={sliderImg} alt=""/></div>
                    <div className="app-homepage__slider__item"><img src={sliderImg} alt=""/></div>
                    <div className="app-homepage__slider__item"><img src={sliderImg} alt=""/></div>
                </Slider>
                <div className="app-homepage__categories">
                    <div className="app-homepage__categories__title">
                        Категория товаров
                    </div>
                    <div className="app-homepage__categories__items">
                        <div className="app-homepage__categories__items__left">
                            <div className="app-homepage__categories__items__left__item">
                                <img src={boots1} alt=""/>
                            </div>
                        </div>
                        <div className="app-homepage__categories__items__right">
                            <div className="app-homepage__categories__items__right__item">
                                <img src={boots2} alt=""/>
                                <div className="app-homepage__categories__items__right__item__title">Ботинки</div>
                                <div className="app-homepage__categories__items__right__item__description">Краткое описание</div>
                            </div>
                            <div className="app-homepage__categories__items__right__item">
                                <img src={boots2} alt=""/>
                                <div className="app-homepage__categories__items__right__item__title">Ботинки</div>
                                <div className="app-homepage__categories__items__right__item__description">Краткое описание</div>
                            </div>
                            <div className="app-homepage__categories__items__right__item">
                                <img src={boots2} alt=""/>
                                <div className="app-homepage__categories__items__right__item__title">Ботинки</div>
                                <div className="app-homepage__categories__items__right__item__description">Краткое описание</div>
                            </div>
                            <div className="app-homepage__categories__items__right__item">
                                <img src={boots2} alt=""/>
                                <div className="app-homepage__categories__items__right__item__title">Ботинки</div>
                                <div className="app-homepage__categories__items__right__item__description">Краткое описание</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;