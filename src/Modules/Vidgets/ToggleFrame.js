import React, {useState} from 'react';
import ToggleButton from '../Components/Toggle_button/ToggleButton';
import { click } from '@testing-library/user-event/dist/click';

const ToggleFrame = () => {
    const [toggler, setToggler] = useState(false)
    function Click (){
        setToggler(!toggler)
    }
    return (
        <div className='Right'>
        <ToggleButton props={{click: Click , state: toggler,}}/>
        {!toggler && <span className={`body-text-1 RightText ${!toggler ? '' : 'hidden'}`}>Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</span>}
        {toggler && <span className={`body-text-1 RightText ${toggler ? '' : 'hidden'}`}>Дополнительные возможности обогащения данных об аудитории и монетизации</span>}
    </div>
    );
}

export default ToggleFrame;
