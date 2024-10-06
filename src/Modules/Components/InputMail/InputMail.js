import React, {useState, useEffect} from 'react';
import { handleResize } from '../../doubleFunc';

const InputMail = (props = {}) => {
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(true)

    const [textClass, setTextClass] = useState('body-text-2');

    useEffect(() => {
        const state= handleResize();
        setTextClass(state);


        window.addEventListener('resize', handleResize); // Добавление обработчика события

        return () => {
            window.removeEventListener('resize', handleResize); // Очистка обработчика
        };
    }, []);

    const handleChandge = (e) => {
        const value = e.target.value
        setEmail(value)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(value));

        if (value.length===0){
            setIsValid(true)
        }
    };

return (
    <div className='InputMail'>
        <input
            className={`${textClass} ${!isValid ? 'error' : ''}`}
            type="email"
            value={email}
            placeholder='Введите e-mail'
            onChange={handleChandge}
            required/>
        {!isValid &&<span className='body-text-3'>Неправильно указана почта</span>}
    </div>
);
}

export default InputMail;
