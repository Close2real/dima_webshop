import React from "react";
import "./contactsPage.scss";

const ContactsPage: React.FC = () => {

    return (
        <div className="content app-contactspage">
            <div className="app-contactspage__container container">
                <div className="app-contactspage__container__title">
                    <h1>Наши контакты</h1>
                </div>
                <div className="app-contactspage__container__main">
                    <div className="app-contactspage__container__main__left">
                        <div className="app-contactspage__container__main__left__item">
                            Наш адрес
                        </div>
                        <div className="app-contactspage__container__main__left__item">
                            Latvia, Riga, Hz iela 52, LV-XXXX, +37128449023
                        </div>
                    </div>
                    <div className="app-contactspage__container__main__right">
                        <div className="app-contactspage__container__main__right__title">
                            Есть вопрос? Задайте его нам!
                        </div>
                        <div className="app-contactspage__container__main__right__form">
                            <input type="text" placeholder="Имя"/>
                            <input type="text" placeholder="Фамилия"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Телефон"/>
                            <input type="submit" placeholder="Отправить"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;