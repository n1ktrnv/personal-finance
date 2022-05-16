const MONTH_NAMES = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

const WEEK_DAYS = [
    'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'
];

const formatTime = (date) => {
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
};

const formatDate = (date) => {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const fullFormatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const weekDay = date.getDay();
    const currentYear = new Date().getFullYear();
    return `${day} ${MONTH_NAMES[month]}${year !== currentYear ? ' ' + year : ''}, ${WEEK_DAYS[weekDay]}`;
}

const getTimestamp = (date, time) => {
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    return date.getTime();
}

export {formatTime, formatDate, fullFormatDate, getTimestamp};