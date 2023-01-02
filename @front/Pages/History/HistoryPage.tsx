import './historyPage.scss';
import React, {useEffect, useState} from "react";
import {useAtomValue, useSetAtom} from "jotai";
import {userAtom} from "@Store/userStore";
import Modal from "react-modal";
import {object, string, number, date, InferType, ValidationError} from 'yup';
import {customModalStyles} from "@Utils/Util";
import {giftIsSentAtom} from "@Store/store";

interface StateContainer {
    email: string,
    name: string,
    surname: string,
    country: string,
    province: string,
    city: string,
    phone: string
}

const HistoryPage: React.FC = () => {
    const initialState = {
        email: '',
        name: '',
        surname: '',
        country: '',
        province: '',
        city: '',
        phone: ''
    };

    const initialErrors = {
        email: '',
        name: '',
        surname: '',
        country: '',
        province: '',
        city: '',
        phone: ''
    };
    const [history, setHistory] = useState<object>({});
    const [activeKey, setActiveKey] = useState<string>('');
    const [activePrizeType, setActivePrizeType] = useState<string>('');
    const [state, setState] = useState<StateContainer>(initialState);
    const [errors, setErrors] = useState<StateContainer>(initialErrors);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const setGiftIsSent = useSetAtom(giftIsSentAtom);
    const user = useAtomValue(userAtom);

    useEffect(() => {
        // localStorage.removeItem("history");
        let historyTemp = localStorage.getItem("history");
        let historyObjTemp = historyTemp ? JSON.parse(historyTemp) : {};
        setHistory(historyObjTemp);
    }, [localStorage.getItem("history")]);

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    }

    const closeModal = () => {
        setGiftIsSent(false);
        setIsOpen(false);
    }

    const showRedeemPrizeModal = (event: any) => {
        let objectKey = event.target.getAttribute("data-key");
        let prizeType = event.target.getAttribute("data-prizetype");
        setGiftIsSent(false);
        setActiveKey(objectKey);
        setActivePrizeType(prizeType);
        setIsOpen(true);
    }

    return (
        <div className={`content`}>
            {/*<RedeemPrizeModal modalIsOpen={modalIsOpen} objKey={activeKey} prizeType={activePrizeType} afterOpenModal={afterOpenModal} closeModal={closeModal}/>*/}
            <table className={'history_page_table'}>
                <tbody className={'history_page_table__tbody'}>
                    <tr className={'history_page_table__tr'}>
                        <th className={'history_page_table__th'}>Title</th>
                        <th className={'history_page_table__th'}>Prize type</th>
                        <th className={'history_page_table__th'}>Prize</th>
                        <th className={'history_page_table__th'}>Description</th>
                        <th className={'history_page_table__th'}>Result</th>
                        <th className={'history_page_table__th'}>Redeem</th>
                    </tr>
                    {
                        history[user.username] && Object.keys(history[user.username]).map((key, value) => (
                            <tr className={'history_page_table__tr'} key={history[user.username][key]['contestId'] + '_' + key}>
                                <td className={'history_page_table__td'}>{history[user.username][key]['title']}</td>
                                <td className={'history_page_table__td'}>{history[user.username][key]['prizeType'].charAt(0).toUpperCase() + history[user.username][key]['prizeType'].slice(1)}</td>
                                <td className={'history_page_table__td'}>{history[user.username][key]['result'] ? history[user.username][key]['prize']['title'] : ''}</td>
                                <td className={'history_page_table__td'}>{history[user.username][key]['result'] ? history[user.username][key]['prize']['description'] : ''}</td>
                                <td className={'history_page_table__td'}>{history[user.username][key]['result'] ? 'Passed' : 'Fail'}</td>
                                <td className={'history_page_table__td'}>
                                    {
                                        history[user.username][key]['redeemed']
                                            ? history[user.username][key]['prizeType'] === 'digital'
                                            ? history[user.username][key]['email'] : "Redeemed" : history[user.username][key]['result']
                                            ? <button className="btn_main history_page_table__redeem_btn" data-prizetype={history[user.username][key]['prizeType']} data-key={key} onClick={showRedeemPrizeModal}>Redeem</button> : `Can't be redeemed`
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default HistoryPage;