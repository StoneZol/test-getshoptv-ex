import React from 'react';
import Image from 'next/image';
import ButtonBlack from '../../Components/Button_black/ButtonBlack';
import {Bulit} from '../../Components/Icons/ICONS';
import NoteBook from '/public/Image/NoteBook.png';
import {scrollToBottom} from '../../doubleFunc';

const Section5 = () => {
    return (
        <div className='contentSection5' id='howItWorks'>
            <div className='Main'>
                <div className='Left'>
                    <div className='Text'>
                        <span className={'H2 bold'}>Подробные отчёты для вас и правообладателей</span>
                        <div className='Punkts'>
                            <div className={'body-text-1 Punkt'}><Bulit/>
                                <span>Выручка, CTR, показы и другие показатели в реальном времени.</span>
                            </div>
                            <div className={'body-text-1 Punkt'}><Bulit/>
                                <span>Инструменты контроля качества трафика.</span>
                            </div>
                            <div className={'body-text-1 Punkt'}><Bulit/>
                                <span>Ежемесячные автоматические отчёты для каждого правообладателя.</span>
                            </div>

                        </div>
                    </div>
                    <ButtonBlack
                        props={{
                            text: 'Заказать звонок',
                            func: scrollToBottom
                        }}/>
                </div>
            </div>
            <Image src={NoteBook} alt=""/>
        </div>
    );
}

export default Section5;
