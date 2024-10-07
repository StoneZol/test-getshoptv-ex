export const handleResize = () => {
    if (window.matchMedia('(max-width: 412px)').matches) {
        return ('body-text-2'); // до 412px
    } else if (window.matchMedia('(max-width: 768px)').matches) {
        return ('body-text-1'); // от 412px до 768px
    } else {
        return ('body-text-2'); // от 768px и больше
    }
}; // Проверка размера окна

export const scrollToBottom = () => {
    window.scrollTo(
        {top: document.documentElement.scrollHeight, behavior: 'smooth'}
    );
};

export const scrollTo = (idSection) => {
    const section = document.getElementById(idSection);
    const header = document.querySelector('.Header'); // Находим ваш хедер по классу

    if (section && header) {
        const headerHeight = header.offsetHeight; // Получаем высоту хедера
        const topOffset = section.offsetTop - headerHeight; // Учитываем высоту хедера

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
        });
    }
};
