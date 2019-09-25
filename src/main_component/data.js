export const data = [
    {
        id: 1,
        country: 'Италия, Рим',
        info:  'Из Киева в Рим и на вулканическое озеро Альбано всего за 79€ туда-обратно! (осенью)',
        dateFrom: '1566259200000',
        dateTo: '1566950400000',
        media: "rome.jpg",
        text: '',
    },
    {
        id: 2,
        country: 'На остров Закинтос',
        info:  '"Горящий" чартер с Варшавы на остров Закинтос всего-лишь за 101€ туда-обратно! С багажом!',
        dateFrom: '1565913600000',
        dateTo: '1567123200000',
        media: "zakintos.jpg",
        text: '',
    },
    {
        id: 3,
        country: 'Египет, Красное море',
        info:  'Осенью из Варшавы на Красное море всего за 37€ туда-обратно!',
        dateFrom: '1567123200000',
        dateTo: '1572393600000',
        media: "RedSea.jpeg",
        text: '',
    },
    {
        id: 4,
        country: 'Остров Менорка',
        info:  'Чартер с Варшавы на остров Менорка за 92€ туда-обратно с багажом!',
        dateFrom: '1563840000000',
        dateTo: '1565049600000',
        media: "menorka.jpeg",
        text: '',
    },
    {
        id: 5,
        country: 'Норвегия: Осло, Берген, Ставенгер, Олесунн',
        info:  'Дешевые авиабилеты в Осло и другие города Норвегии с Украины от €44 в две стороны!',
        dateFrom: '1564617600000',
        dateTo: '1572393600000',
        media: "Norvegian.jpg",
        text: '',
    },
];

const signUp = [
    {
        id: 1,
        firstName: 'admin',
        lastName: 'admin',
        mail: 'kusochek1995@gmail.com',
        password: '123456789',
    },
    {
        id: 2,
        firstName: 'Illia',
        lastName: 'Doncov',
        mail: '2768999@gmail.com',
        password: '987654321',
    },
];


const admin = [
    {
        id: 1,
        country: 'Италия, Рим',
        info:  'Из Киева в Рим и на вулканическое озеро Альбано всего за 79€ туда-обратно! (осенью)',
        dateFrom: new Date(1566259200000),
        dateTo: new Date(1566950400000),
        media: "rome.jpg",
        favorite: false,
        text: '',
        edit: function() {

        },
        delete: function() {

        },
    },
    {
        id: 2,
        country: 'На остров Закинтос',
        info:  '"Горящий" чартер с Варшавы на остров Закинтос всего-лишь за 101€ туда-обратно! С багажом!',
        dateFrom: new Date(1565913600000),
        dateTo: new Date(1567123200000),
        media: "zakintos.jpg",
        favorite: false,
        text: '',
        edit: function() {

        },
        delete: function() {

        },
    },
    {
        id: 3,
        country: 'Египет, Красное море',
        info:  'Осенью из Варшавы на Красное море всего за 37€ туда-обратно!',
        dateFrom: new Date(1567123200000),
        dateTo: new Date(1572393600000),
        media: "RedSea.jpeg",
        favorite: false,
        text: '',
        edit: function() {

        },
        delete: function() {

        },
    },
    {
        id: 4,
        country: 'Остров Менорка',
        info:  'Чартер с Варшавы на остров Менорка за 92€ туда-обратно с багажом!',
        dateFrom: new Date(1563840000000),
        dateTo: new Date(1565049600000),
        media: "menorka.jpeg",
        favorite: false,
        text: '',
        edit: function() {

        },
        delete: function() {

        },
    },
    {
        id: 5,
        country: 'Норвегия: Осло, Берген, Ставенгер, Олесунн',
        info:  'Дешевые авиабилеты в Осло и другие города Норвегии с Украины от €44 в две стороны!',
        dateFrom: new Date(1564617600000),
        dateTo: new Date(1572393600000),
        media: "Norvegian.jpg",
        favorite: false,
        text: '',
        edit: function() {

        },
        delete: function() {

        },
    },
];

const userPage = [
    {
        id: 1,
        country: 'Италия, Рим',
        info:  'Из Киева в Рим и на вулканическое озеро Альбано всего за 79€ туда-обратно! (осенью)',
        dateFrom: new Date(1566259200000),
        dateTo: new Date(1566950400000),
        media: "rome.jpg",
        favorite: false,
        text: '',
    },
    {
        id: 2,
        country: 'На остров Закинтос',
        info:  '"Горящий" чартер с Варшавы на остров Закинтос всего-лишь за 101€ туда-обратно! С багажом!',
        dateFrom: new Date(1565913600000),
        dateTo: new Date(1567123200000),
        media: "zakintos.jpg",
        favorite: false,
        text: '',
    },
    {
        id: 3,
        country: 'Египет, Красное море',
        info:  'Осенью из Варшавы на Красное море всего за 37€ туда-обратно!',
        dateFrom: new Date(1567123200000),
        dateTo: new Date(1572393600000),
        media: "RedSea.jpeg",
        favorite: false,
        text: '',
    },
    {
        id: 4,
        country: 'Остров Менорка',
        info:  'Чартер с Варшавы на остров Менорка за 92€ туда-обратно с багажом!',
        dateFrom: new Date(1563840000000),
        dateTo: new Date(1565049600000),
        media: "menorka.jpeg",
        favorite: false,
        text: '',
    },
    {
        id: 5,
        country: 'Норвегия: Осло, Берген, Ставенгер, Олесунн',
        info:  'Дешевые авиабилеты в Осло и другие города Норвегии с Украины от €44 в две стороны!',
        dateFrom: new Date(1564617600000),
        dateTo: new Date(1572393600000),
        media: "Norvegian.jpg",
        favorite: false,
        text: '',
    },
];

const add = [
    {
        id: 6,
        country: 'Норвегия: Осло, Берген, Ставенгер, Олесунн',
        info:  'Дешевые авиабилеты в Осло и другие города Норвегии с Украины от €44 в две стороны!',
        dateFrom: new Date(1564617600000),
        dateTo: new Date(1572393600000),
        media: "Norvegian.jpg",
        text: '',
    }
]