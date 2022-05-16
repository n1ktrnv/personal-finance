import colors from "../res/colors";

const defaultAccounts = [
    {
        name: 'Наличные',
        balance: 0,
        color: colors.primary,
        icon: 'wallet',
    },
];

const defaultCategories = [
    {
        name: 'Продукты',
        color: '#F2413C',
        icon: 'food-variant',
    },
    {
        name: 'Развлечения',
        color: '#76DC00',
        icon: 'party-popper',
    },
    {
        name: 'Транспорт',
        color: '#7C9098',
        icon: 'bus',
    },
    {
        name: 'Жилье',
        color: '#F8A10D',
        icon: 'home',
    },
    {
        name: 'Связь, интернет',
        color: '#5970FF',
        icon: 'cellphone',
    },
    {
        name: 'Инвестиции',
        color: '#F53F82',
        icon: 'briefcase',
    },
    {
        name: 'Доход',
        color: '#52A346',
        icon: 'cash-multiple',
    },
];


export {defaultCategories, defaultAccounts};