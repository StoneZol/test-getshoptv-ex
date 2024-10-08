import React from 'react';
import { useState, useEffect} from 'react';


export const Icon = () => {
return(    
<div className='Icon'>
        <svg
            className='In'
            width="80"
            height="75"
            viewBox="0 0 80 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_345)">
                <path
                    d="M70.2185 9.40415C70.8663 10.7735 71.2549 12.3201 71.2549 14.0116V60.9883C71.2549 62.6638 70.8663 64.2103 70.2185 65.5797C75.2226 66.4174 79.9999 62.4543 79.9999 56.993V17.9908C79.9999 12.4973 75.2064 8.56643 70.2185 9.40415Z"
                    fill="white"/>
                <path
                    opacity="0.8"
                    d="M70.2195 9.40416C68.0818 4.92558 62.9644 2.39632 57.9766 4.00731C59.7094 6.00495 60.7944 8.64699 60.7944 11.6434V63.3404C60.7944 66.3207 59.7094 68.9789 57.9928 70.9765C62.9968 72.5875 68.098 70.0421 70.2357 65.5797C70.8834 64.2103 71.2721 62.6477 71.2721 60.9883V14.0116C71.2721 12.3362 70.8834 10.7896 70.2357 9.40416H70.2195Z"
                    fill="white"/>
                <path
                    opacity="0.4"
                    d="M22.8664 58.4106C18.7692 56.9446 16.0162 52.9654 16.0162 48.503V27.7372C16.0162 23.3875 18.6235 19.505 22.5749 17.9423L57.3603 4.21661C57.5708 4.13606 57.7652 4.08773 57.9757 4.02329C55.0121 0.591868 50.1538 -0.954691 45.5061 0.881848L7.20648 15.993C2.8664 17.7007 0 21.9859 0 26.7706V49.6146C0 54.5281 3.02834 58.8939 7.53036 60.521L45.8138 74.2628C50.3806 75.9061 55.0769 74.3434 57.9595 71.0086C57.8462 70.9764 57.749 70.9603 57.6356 70.9119L22.834 58.4267L22.8664 58.4106Z"
                    fill="white"/>
                <path
                    opacity="0.6"
                    d="M60.7933 62.3406L39.9998 54.8665C36.6151 53.6421 34.3317 50.3396 34.3317 46.6504V29.4127C34.3317 25.8041 36.4856 22.5821 39.7568 21.2772L60.7933 12.9322V11.6595C60.7933 8.66305 59.7083 6.03712 57.9755 4.02338C57.7649 4.08782 57.5706 4.13615 57.3601 4.2167L22.5585 17.9585C18.607 19.5212 15.9998 23.4037 15.9998 27.7534V48.5192C15.9998 52.9816 18.7528 56.9447 22.85 58.4268L57.6516 70.912C57.7649 70.9443 57.8621 70.9765 57.9755 71.0087C59.7083 68.9949 60.7771 66.3529 60.7771 63.3726L60.7933 62.4019V62.3406Z"
                    fill="white"/>
                <path
                    d="M34.3307 29.3967V46.6343C34.3307 50.3396 36.5979 53.6422 39.9987 54.8504L60.7922 62.3416V12.9323L39.7558 21.2772C36.4845 22.566 34.3307 25.8041 34.3307 29.4128V29.3967Z"
                    fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_1_345">
                    <rect
                        width="80"
                        height="74.8148"
                        fill="white"
                        transform="translate(0 0.0925903)"/>
                </clipPath>
            </defs>
        </svg>
    </div>)
}

export const IconLineLeft = () => {
    const [windowWidth, setWindowWidth] = useState(0);

        useEffect(() => {
            // Проверяем, есть ли доступ к window
            if (typeof window !== "undefined") {
                setWindowWidth(window.innerWidth);
                const handleResize = () => setWindowWidth(window.innerWidth);
                window.addEventListener('resize', handleResize);
    
                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }
        }, []);

    const renderSvg = () => {
        if (windowWidth > 1220) {
            return (
                <svg
                    width="227"
                    height="12"
                    viewBox="0 0 227 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.218805 6C0.218805 9.19287 2.80713 11.7812 6 11.7812C9.19287 11.7812 11.7812 9.19287 11.7812 6C11.7812 2.80713 9.19287 0.218805 6 0.218805C2.80713 0.218805 0.218805 2.80713 0.218805 6ZM6 7.08397H227V4.91603H6V7.08397Z"
                        fill="#FF5900"/>
                </svg>

            );
        }
        if (windowWidth <= 1220 && windowWidth > 515) {
            return (
                <svg
                    width="96"
                    height="12"
                    viewBox="0 0 96 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM6 7L96 7.00001L96 5.00001L6 5L6 7Z"
                        fill="#FF5900"/>
                </svg>

            );
        }
        if (windowWidth <= 515) {
            return (
                <svg
                    width="12"
                    height="59"
                    viewBox="0 0 12 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 0.666667C3.05448 0.666667 0.666666 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666666 6 0.666667ZM5 6L5 59L7 59L7 6L5 6Z"
                        fill="#FF5900"/>
                </svg>

            )
        }
    };

    return <> {
        renderSvg()
    }</>;
};

export const IconLineRight = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const renderSvg = () => {
        if (windowWidth > 1220) {
            return (
                <svg
                    className='Line'
                    width="230"
                    height="12"
                    viewBox="0 0 230 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path
                        d="M218.219 6.00002C218.219 9.19289 220.807 11.7812 224 11.7812C227.193 11.7812 229.781 9.19289 229.781 6.00002C229.781 2.80715 227.193 0.218825 224 0.218824C220.807 0.218824 218.219 2.80715 218.219 6.00002ZM-9.4764e-08 7.08397L224 7.08399L224 4.91605L9.4764e-08 4.91603L-9.4764e-08 7.08397Z"
                        fill="#FF5900"/>
                </svg>
            );
        }
        if (windowWidth <= 1220 && windowWidth > 515) {
            return (
                <svg
                    width="96"
                    height="12"
                    viewBox="0 0 96 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M95.3333 6C95.3333 3.05448 92.9455 0.666667 90 0.666667C87.0545 0.666666 84.6667 3.05448 84.6667 6C84.6667 8.94552 87.0545 11.3333 90 11.3333C92.9455 11.3333 95.3333 8.94552 95.3333 6ZM90 5L8.74228e-08 4.99999L-8.74228e-08 6.99999L90 7L90 5Z"
                        fill="#FF5900"/>
                </svg>

            );
        }
        if (windowWidth <= 515) {
            return (
                <svg
                    width="12"
                    height="59"
                    viewBox="0 0 12 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 47.6667C3.05448 47.6667 0.666669 50.0545 0.666669 53C0.666669 55.9455 3.05448 58.3333 6 58.3333C8.94552 58.3333 11.3333 55.9455 11.3333 53C11.3333 50.0545 8.94552 47.6667 6 47.6667ZM5 4.37114e-08L5 53L7 53L7 -4.37114e-08L5 4.37114e-08Z"
                        fill="#FF5900"/>
                </svg>

            )
        }
    };

    return <> {
        renderSvg()
    }</>;
};


export const Bulit = () => {
    return (
        <div className='Bulit'>
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" fill="#FF5900"/>
                <path
                    d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2375 11.4697 20.5304C11.7626 20.8233 12.2374 20.8233 12.5303 20.5304L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5304L20.5303 12.5304L19.4697 11.4698L11.4697 19.4698L12.5303 20.5304Z"
                    fill="white"/>
            </svg>
        </div>
    );
}


export const Logo = () => {
    return (
        <div className='Logo'>
            <svg
                width="161"
                height="40"
                viewBox="0 0 161 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                {/* <rect width="161" height="40" rx="10" fill="white"/> */}
                <path
                    d="M48.7065 27V11.7862H52.5959V23.4114H59.8805V27H48.7065ZM69.4028 27.1719C67.8556 27.1719 66.5018 26.8496 65.3415 26.2049C64.1811 25.5603 63.2786 24.6578 62.6339 23.4974C62.0036 22.3227 61.6884 20.9618 61.6884 19.4146C61.6884 17.8245 62.0179 16.4492 62.6769 15.2888C63.3359 14.1141 64.2527 13.2045 65.4274 12.5598C66.6021 11.9152 67.963 11.5928 69.5102 11.5928C71.043 11.5928 72.3896 11.908 73.55 12.5383C74.7104 13.1687 75.6201 14.064 76.279 15.2244C76.938 16.3704 77.2675 17.7313 77.2675 19.3072C77.2675 20.8543 76.938 22.2224 76.279 23.4114C75.6344 24.5861 74.7175 25.5101 73.5285 26.1834C72.3538 26.8424 70.9786 27.1719 69.4028 27.1719ZM69.4887 23.4974C70.4055 23.4974 71.1433 23.2897 71.702 22.8742C72.2607 22.4445 72.6618 21.9144 72.9054 21.2841C73.1632 20.6538 73.2921 20.0306 73.2921 19.4146C73.2921 18.9562 73.2205 18.4906 73.0773 18.0179C72.9483 17.5308 72.7335 17.0795 72.4326 16.6641C72.1461 16.2486 71.7593 15.912 71.2722 15.6541C70.7852 15.3963 70.1835 15.2673 69.4672 15.2673C68.5647 15.2673 67.8341 15.4751 67.2754 15.8905C66.7167 16.2916 66.3084 16.8073 66.0506 17.4377C65.7927 18.068 65.6638 18.7198 65.6638 19.3931C65.6638 20.0664 65.7927 20.7182 66.0506 21.3486C66.3228 21.9789 66.7382 22.4946 67.2969 22.8957C67.8699 23.2968 68.6005 23.4974 69.4887 23.4974ZM87.0579 27.1719C85.5394 27.1719 84.2142 26.8567 83.0825 26.2264C81.9651 25.5818 81.0984 24.6721 80.4824 23.4974C79.8664 22.3227 79.5584 20.9331 79.5584 19.3287C79.5584 18.1253 79.7303 17.0509 80.0742 16.1054C80.4323 15.1456 80.9408 14.329 81.5998 13.6557C82.2588 12.9824 83.0467 12.4739 83.9635 12.13C84.8947 11.7719 85.9262 11.5928 87.0579 11.5928C88.2326 11.5928 89.307 11.7934 90.2811 12.1945C91.2696 12.5813 92.0862 13.1901 92.7308 14.021C93.3898 14.8376 93.8052 15.8833 93.9771 17.1583H90.1307C90.0448 16.6999 89.8729 16.3346 89.615 16.0624C89.3715 15.7902 89.0563 15.5897 88.6695 15.4607C88.297 15.3318 87.8673 15.2673 87.3802 15.2673C86.6639 15.2673 86.0622 15.3891 85.5752 15.6326C85.0881 15.8762 84.6942 16.2057 84.3933 16.6211C84.1068 17.0222 83.8991 17.4735 83.7702 17.9749C83.6412 18.462 83.5768 18.9562 83.5768 19.4576C83.5768 20.1309 83.6914 20.7827 83.9206 21.413C84.1641 22.029 84.5509 22.5304 85.0809 22.9172C85.6253 23.304 86.3559 23.4974 87.2728 23.4974C87.7312 23.4974 88.1681 23.4401 88.5835 23.3255C88.999 23.2109 89.35 23.0318 89.6365 22.7883C89.923 22.5304 90.1021 22.2009 90.1737 21.7998H86.5851V18.5336H94.2565V19.0923C94.2565 20.797 93.9986 22.2511 93.4829 23.4544C92.9672 24.6578 92.1793 25.5818 91.1192 26.2264C90.0591 26.8567 88.7053 27.1719 87.0579 27.1719ZM104.261 27.1719C102.714 27.1719 101.36 26.8496 100.2 26.2049C99.0397 25.5603 98.1372 24.6578 97.4926 23.4974C96.8622 22.3227 96.5471 20.9618 96.5471 19.4146C96.5471 17.8245 96.8766 16.4492 97.5355 15.2888C98.1945 14.1141 99.1114 13.2045 100.286 12.5598C101.461 11.9152 102.822 11.5928 104.369 11.5928C105.902 11.5928 107.248 11.908 108.409 12.5383C109.569 13.1687 110.479 14.064 111.138 15.2244C111.797 16.3704 112.126 17.7313 112.126 19.3072C112.126 20.8543 111.797 22.2224 111.138 23.4114C110.493 24.5861 109.576 25.5101 108.387 26.1834C107.212 26.8424 105.837 27.1719 104.261 27.1719ZM104.347 23.4974C105.264 23.4974 106.002 23.2897 106.561 22.8742C107.119 22.4445 107.52 21.9144 107.764 21.2841C108.022 20.6538 108.151 20.0306 108.151 19.4146C108.151 18.9562 108.079 18.4906 107.936 18.0179C107.807 17.5308 107.592 17.0795 107.291 16.6641C107.005 16.2486 106.618 15.912 106.131 15.6541C105.644 15.3963 105.042 15.2673 104.326 15.2673C103.423 15.2673 102.693 15.4751 102.134 15.8905C101.575 16.2916 101.167 16.8073 100.909 17.4377C100.651 18.068 100.522 18.7198 100.522 19.3931C100.522 20.0664 100.651 20.7182 100.909 21.3486C101.181 21.9789 101.597 22.4946 102.156 22.8957C102.729 23.2968 103.459 23.4974 104.347 23.4974Z"
                    fill="black"/>
            </svg>

        </div>
    );
}

export const Close = ({props ={}}) => {
    return (
        <div className='Close' onClick={props.click}>
            <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                    x="1"
                    y="0.999756"
                    width="42"
                    height="42"
                    rx="9"
                    stroke="#FF5900"
                    stroke-width="2"/>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.0069 13.5927C14.6164 13.2022 13.9832 13.2022 13.5927 13.5927C13.2022 13.9832 13.2022 14.6164 13.5927 15.0069L20.4948 21.909L13.5929 28.8109C13.2024 29.2014 13.2024 29.8346 13.5929 30.2251C13.9835 30.6156 14.6166 30.6156 15.0072 30.2251L21.909 23.3232L28.8109 30.2251C29.2014 30.6156 29.8346 30.6156 30.2251 30.2251C30.6156 29.8346 30.6156 29.2014 30.2251 28.8109L23.3232 21.909L30.2253 15.0069C30.6158 14.6164 30.6158 13.9832 30.2253 13.5927C29.8348 13.2022 29.2016 13.2022 28.8111 13.5927L21.909 20.4948L15.0069 13.5927Z"
                    fill="#FF5900"/>
            </svg>

        </div>
    );
}

export const UPs = ({props={}}) => {
    return (
        <div className='UPs'>
            <span className='body-text-3'>Наверх</span>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.93361 16.0497C7.64071 16.3426 7.64071 16.8174 7.93361 17.1103C8.2265 17.4032 8.70137 17.4032 8.99427 17.1103L7.93361 16.0497ZM17.6992 8.09473C17.6992 7.68051 17.3634 7.34473 16.9492 7.34473L10.1992 7.34473C9.78501 7.34473 9.44922 7.68051 9.44922 8.09473C9.44922 8.50894 9.78501 8.84473 10.1992 8.84473L16.1992 8.84473L16.1992 14.8447C16.1992 15.2589 16.535 15.5947 16.9492 15.5947C17.3634 15.5947 17.6992 15.2589 17.6992 14.8447L17.6992 8.09473ZM8.99427 17.1103L17.4795 8.62506L16.4189 7.5644L7.93361 16.0497L8.99427 17.1103Z"
                    fill="currentColor"/>
            </svg>

        </div>
    );
}


export const CheckBox = (props = {}) => {
    const [isChecked, setIsChecked] = useState(false); // Управляемое состояние

    const handleClick = () => {
        setIsChecked(!isChecked); // Переключение состояния
        if (props.click) {
            props.click(); // Выполняем внешний колбэк, если он передан
        }
    };

    return (
        <div className='CheckBox' onClick={handleClick}>
            {isChecked ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="14" height="14" rx="4" fill="#FF5900"/>
                    <path d="M10.2667 4.75418L5.77507 9.24585L3.7334 7.20418" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="13" height="13" rx="3.5" stroke="#A4ADAC"/>
                </svg>
            )}
        </div>
    );
}


export const Burger = ({props = {}}) => {
    return (
        <div className='Burger' onClick={props.click}>
            <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                    x="1"
                    y="1"
                    width="42"
                    height="42"
                    rx="9"
                    stroke="#FF5900"
                    stroke-width="2"/>
                <path
                    d="M11.4783 14H33"
                    stroke="#FF5900"
                    stroke-width="2"
                    stroke-linecap="round"/>
                <path
                    d="M11.4783 22H33"
                    stroke="#FF5900"
                    stroke-width="2"
                    stroke-linecap="round"/>
                <path
                    d="M11.4783 30H33"
                    stroke="#FF5900"
                    stroke-width="2"
                    stroke-linecap="round"/>
            </svg>

        </div>
    )
}





