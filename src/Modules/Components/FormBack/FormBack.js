import React, {useState, useEffect} from 'react';
import { handleResize } from '../../doubleFunc';

const FormBack = () => {
    const [textClass, setTextClass] = useState('body-text-2');

    useEffect(() => {
        const state= handleResize();
        setTextClass(state);

        window.addEventListener('resize', handleResize); // Добавление обработчика события

        return () => {
            window.removeEventListener('resize', handleResize); // Очистка обработчика
        };
    }, []);
    return (
        <div className='FormBack'>
            <textarea
                className={`FormInput ${textClass}`}
                placeholder='Напишите свой вопрос' />
        </div>
    );
}

export default FormBack;
