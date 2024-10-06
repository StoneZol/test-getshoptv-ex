import React from 'react';

const ButtonBlack = ({props={}}) => {
    return (
        <div className={`button button-black`} onClick={props.func}>{props.text}</div>
    );
}

export default ButtonBlack;
