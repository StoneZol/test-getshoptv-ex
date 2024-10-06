export const handleResize = () => {        
        if (window.matchMedia('(max-width: 412px)').matches) {
            return ('body-text-2'); // до 412px
        } else if (window.matchMedia('(max-width: 768px)').matches) {
            return('body-text-1'); // от 412px до 768px
        } else {
            return('body-text-2'); // от 768px и больше
        }
    }; // Проверка размера окна