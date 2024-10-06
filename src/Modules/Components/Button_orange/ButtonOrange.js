import React from 'react';

    const ButtonOrange = ({props = {}}) => {
    return (
        <div className={`button button-orange ${props.disable ? ('disabled'):('')}`} onClick={props.func}>{props.text}</div>
    );
}

export default ButtonOrange;
