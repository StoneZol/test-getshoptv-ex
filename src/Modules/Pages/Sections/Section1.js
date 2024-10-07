import React from 'react';
import ButtonOrange from '../../Components/Button_orange/ButtonOrange';

const Section1 = () => {
    return (
        <div className='contentSection'>
            <div className='Main'>
                <div className='TextBtn'>
                    <span className={'Text1 H1'}>
                        Монетизируйте клиентскую базу, не снижая NPS
                    </span>
                    <span className={'Text2 H3'}>Найдите идеальный баланс выручки и
                        удовлетворённости пользователей с платформой рекламной монетизации</span>
                    <ButtonOrange
                        props={{
                            text: 'Заказать Звонок'
                        }}/>
                </div>
            </div>
        </div>
    );
}

export default Section1;
