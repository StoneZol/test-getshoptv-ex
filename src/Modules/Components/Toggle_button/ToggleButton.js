import React from 'react';

const ToggleButton = ({props={}}) => {

    return (
        <div className='ToggleButtonBox' onClick={props.func}>
            <div className='ToggleButton'>
                <div className={`ToggleFrame H3 bold ${!props.state ? 'active' : 'noactive'}`}><span>Операторам</span></div>
                <div className={`ToggleFrame H3 bold ${props.state ? 'active' : 'noactive'}`}><span>OTT сервисам</span></div>
            </div>
            <div className={`ToggleBackFrame `}>
                <div className={`BackFrame ${!props.state ? 'left' : 'right'}`}></div>
            </div>
        </div>
    );
};

export default ToggleButton;

