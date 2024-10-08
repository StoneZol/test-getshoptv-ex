import React from 'react';
import ButtonOrange from '../../Components/Button_orange/ButtonOrange';
import {scrollToBottom} from '../../doubleFunc';
import Header from '../../Components/Header/Header';

const Section1 = () => {
    return (
        <div className='contentSection'>
                            <Header/>
            <div className='Main'>
                <div className='TextBtn'>
                    <div className='Text'>
                        <span className={'Text1 H1'}>
                            Монетизируйте клиентскую базу, не снижая NPS
                        </span>
                        <span className={'Text2 H3'}>Найдите идеальный баланс выручки и
                            удовлетворённости пользователей с платформой рекламной монетизации</span>

                    </div>
                    <ButtonOrange
                        props={{
                            text: 'Заказать Звонок',
                            func: scrollToBottom
                        }}/>
                </div>
            </div>
        </div>
    );
}

export default Section1;
