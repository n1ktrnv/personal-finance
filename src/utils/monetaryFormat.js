import format from 'format-number';

const getMonetaryFormat = (number) => format({integerSeparator: ' ', suffix: ' ₽'})(number);

export {getMonetaryFormat};