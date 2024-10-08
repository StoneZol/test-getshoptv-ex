import React, { useState, useEffect } from 'react';
import { Logo, Burger, Close } from '../Icons/ICONS';
import MenuItem from '../Menu/Menu-item';
import { scrollTo } from '../../doubleFunc';
import Menu from '../Menu/Menu';

const Header = ({ props = {} }) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasScrolledDown, setHasScrolledDown] = useState(false);

    const [showMenu, setShowMenu] = useState(true)

    const [activeSection, setActiveSection] = useState(null);
    const sections = ['advantages', 'howItWorks'];

    const handlerShowMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setHasScrolledDown(true);
            } else {
                setHasScrolledDown(false); 
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        const handleSectionScroll = () => {
            const headerHeight = document.querySelector('.Header')?.offsetHeight || 0;
            let currentSection = null;
            let closestSectionTop = Number.POSITIVE_INFINITY;
    
            sections.forEach((sectionId) => {
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    const sectionTop = rect.top - headerHeight;
    
                    // Проверяем, если секция находится в зоне видимости
                    if (sectionTop + rect.height > 0 && sectionTop < window.innerHeight) {
                        // Ищем самый верхний элемент, который в поле зрения
                        if (Math.abs(sectionTop) < Math.abs(closestSectionTop)) {
                            closestSectionTop = sectionTop;
                            currentSection = sectionId; // Запоминаем текущую секцию
                        }
                    }
                }
            });
    
            // Проверяем, если текущая секция видима более чем на 50%
            if (currentSection) {
                const currentSectionElement = document.getElementById(currentSection);
                const rect = currentSectionElement.getBoundingClientRect();
                const isMoreThan50Visible = rect.height / 2 <= window.innerHeight - rect.top; // Проверяем видимость
    
                // Если элемент виден менее чем на 50%, сбрасываем активную секцию
                if (!isMoreThan50Visible) {
                    currentSection = null;
                }
            }
    
            setActiveSection(currentSection); // Устанавливаем активную секцию
        };
    
        window.addEventListener('scroll', handleSectionScroll);
        return () => {
            window.removeEventListener('scroll', handleSectionScroll);
        };
    }, [sections, lastScrollY]);
    

    

    return (
        <header className={`Header ${hasScrolledDown ? 'scrolled' : ''}`}>
            <div className='HeaderBox'>
                <Logo />
                <div className='Header-menu'>
                <MenuItem props={{ name: 'Преимущества', active: activeSection === 'advantages', func: () => scrollTo('advantages')}} />
                <MenuItem props={{ name: 'Как работаем', active: activeSection === 'howItWorks', func: () => scrollTo('howItWorks')}} />
                </div>
                <div className='Header-menu-alt'><Burger props={{click: handlerShowMenu}}/>
                {!showMenu && <Menu activeSection={activeSection} scrollTo={scrollTo} closeUp={handlerShowMenu}/>}
        </div>
                
            </div>
        </header>
    );
}

export default Header;

