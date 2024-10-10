import React from 'react';
import {Icon, IconLineLeft, IconLineRight, Bulit} from '../../Components/Icons/ICONS';

const Section3 = () => {
    return (
        <div className='contentSection3' id='advantages'>
              <h2 className={'H2 bold'}>Баланс между вырочкой и удовлетворённостью пользователей</h2>
            <div className='Main'>
                <div className='Side'><Bulit/>
                    <span className={'H3 bold'}>Частотность под контролем</span>
                    <span className={'body-text-2'}>Чтобы не ронять NPS  и не увеличивать отток пользователей</span>
                </div>
                <div className='Center'>
                    <IconLineLeft/>
                    <Icon/>
                    <IconLineRight/>
                </div>
                <div className='Side'><Bulit/>
                    <span className={'H3 bold'}>Максимальная выручка</span>
                    <span className={'body-text-2'}>За счёт заполенения всех рекламных мест по высокой цене</span>
                </div>
            </div>
        </div>
    );
}

export default Section3;
