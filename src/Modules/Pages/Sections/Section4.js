import React from 'react';
import Partner1 from '../../../Image/Partner1.png'
import Partner2 from '../../../Image/Partner2.png'
import Partner3 from '../../../Image/Partner3.png'

const Section4 = () => {
    return (
            <div className='contentSection4'>
                <span className={'Left H3'}>Наши партнеры по монетизации</span>
                <div className='Partners'>
                    <img src={Partner1} style={{height: '54.33px'}}alt="" />
                    <img src={Partner2} style={{height: '70.78px'}}alt="" />
                    <img src={Partner3} style={{height: '60.52px'}}alt="" />
                </div>
            </div>
    );
}

export default Section4;
