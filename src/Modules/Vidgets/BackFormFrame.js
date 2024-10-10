import React, {useState, useEffect}from 'react';
import ButtonBlack from '../Components/Button_black/ButtonBlack';
import FormBack from '../Components/FormBack/FormBack';
import InputMail from '../Components/InputMail/InputMail';
import {CheckBox} from '../Components/Icons/ICONS';

const BackFormFrame = () => {
    const [buttonText, setButtonText] = useState('Отправить');

    useEffect(() => {
        const updateButtonText = () => {
            if (window.innerWidth < 515) {
                setButtonText('Заказать звонок');
            } else {
                setButtonText('Отправить');
            }
        };
        window.addEventListener('resize', updateButtonText);
        updateButtonText();
        return () => window.removeEventListener('resize', updateButtonText);
    }, []);
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
                <ButtonBlack props={{text: buttonText}}/>
            </div>
        </div>
    );
}

export default BackFormFrame;
