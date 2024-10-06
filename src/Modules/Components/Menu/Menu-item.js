import React from 'react';

const MenuItem = ({props={}}) => {
    return (
        <>
                <span className={'menu-item button'}>{props.name}</span>
        </>
    );
}

export default MenuItem;
