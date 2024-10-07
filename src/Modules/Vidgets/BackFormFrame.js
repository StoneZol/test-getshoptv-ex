import React from 'react';
import ButtonBlack from '../Components/Button_black/ButtonBlack';
import FormBack from '../Components/FormBack/FormBack';
import InputMail from '../Components/InputMail/InputMail';
import {CheckBox} from '../Components/Icons/ICONS';

const BackFormFrame = () => {
    return (
        <div className='BackFormVidget'>
            <div className='Left'>
                <FormBack/>
            </div>
            <div className='Right'>
                <InputMail/>
                <div className='PDN'>
                    <CheckBox/>
                    <span className='body-text-3'>
                        Я ознакомлен(а) с <a href="#">политикой конфиденциальности</a> и согласен(на)
                        на обработку <a href='#'>персональных данных</a>.
                    </span>
                </div>
                <ButtonBlack props={{text:'Отправить'}}/>
            </div>
        </div>
    );
}

export default BackFormFrame;
