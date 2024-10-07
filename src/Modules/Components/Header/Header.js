import React, { useState, useEffect } from 'react';
import { Logo } from '../Icons/ICONS';
import MenuItem from '../Menu/Menu-item';

const Header = ({ props = {} }) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasScrolledDown, setHasScrolledDown] = useState(false); // Добавляем состояние для отслеживания скролла вниз

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Проверяем, прокрутили ли страницу вниз
            if (currentScrollY > 100) {
                setHasScrolledDown(true); // Применяем тень
            } else {
                setHasScrolledDown(false); // Убираем тень, если вернулись на самый верх
            }

            setLastScrollY(currentScrollY); // Обновляем последнюю позицию скролла
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`Header ${hasScrolledDown ? 'scrolled' : ''}`}>
            <div className='HeaderBox'>
                <Logo />
                <div className='Header-menu'>
                    <MenuItem props={{ name: 'Преимущества' }} />
                    <MenuItem props={{ name: 'Как работаем' }} />
                </div>
            </div>
        </header>
    );
}

export default Header;

