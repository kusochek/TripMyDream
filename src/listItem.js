import React from 'react';
import MediaCard from './ExpansionPanels.js';
// import Typography from '@material-ui/core/Typography';


export const data = [
    {
        id: 1,
        country: 'Италия, Рим',
        info:  'Из Киева в Рим и на вулканическое озеро Альбано всего за 79€ туда-обратно! (осенью)',
        dateFrom: 1566259200000,
        dateTo: 1566950400000,
        media: "rome.jpg"
    },
    {
        id: 2,
        country: 'На остров Закинтос',
        info:  '"Горящий" чартер с Варшавы на остров Закинтос всего-лишь за 101€ туда-обратно! С багажом!',
        dateFrom: 1565913600000,
        dateTo: 1567123200000,
        media: "zakintos.jpg"
    },
    {
        id: 3,
        country: 'Египет, Красное море',
        info:  'Осенью из Варшавы на Красное море всего за 37€ туда-обратно!',
        dateFrom: 1567123200000,
        dateTo: 1572393600000,
        media: "RedSea.jpeg"
    },
    {
        id: 4,
        country: 'Остров Менорка',
        info:  'Чартер с Варшавы на остров Менорка за 92€ туда-обратно с багажом!',
        dateFrom: 1563840000000,
        dateTo: 1565049600000,
        media: "menorka.jpeg"
    },
    {
        id: 5,
        country: 'Норвегия: Осло, Берген, Ставенгер, Олесунн',
        info:  'Дешевые авиабилеты в Осло и другие города Норвегии с Украины от €44 в две стороны!',
        dateFrom: 1564617600000,
        dateTo: 1572393600000,
        media: "Norvegian.jpg",
    },
];

class List extends React.Component {
  renderList() {
    const data = this.props.data;

    return data.map((item => {
      return (
        <MediaCard
          key={item.id}
          country={item.country}
          info={item.info}
        />
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
};

 export default List ;


