import React from 'react';
// import Typography from '@material-ui/core/Typography';
import ListItem from "./list-item.component";

import "./list.styles.css";

class List extends React.Component {
  renderList() {
    const items = this.props.items;

    return items.map((item, index) => {
      return (
        <ListItem
          key={index}
          name={item.name}
          url={item.html_url}
          description={item.description}
        />
      );
    });
  }

  render() {
    return <div className="repos-list">{this.renderList()}</div>;
  }
}

export let data = [
    {
        id: 1,
        country: 'Италия, Рим',
        info:  'Из Киева в Рим и на вулканическое озеро Альбано всего за 79€ туда-обратно! (осенью)',
        dateFrom: new Date(1566259200000),
        dateTo: new Date(1566950400000),
        media: "rome.jpg"
    },
    {
        id: 2,
        country: 'На остров Закинтос',
        info:  '"Горящий" чартер с Варшавы на остров Закинтос всего-лишь за 101€ туда-обратно! С багажом!',
        dateFrom: new Date(1565913600000),
        dateTo: new Date(1567123200000),
        media: "zakintos.jpg"
    },
    {
        id: 3,
        country: 'Египет, Красное море',
        info:  'Осенью из Варшавы на Красное море всего за 37€ туда-обратно!',
        dateFrom: new Date(1567123200000),
        dateTo: new Date(1572393600000),
        media: "RedSea.jpeg"
    },
    {
        id: 4,
        country: 'Остров Менорка',
        info:  'Чартер с Варшавы на остров Менорка за 92€ туда-обратно с багажом!',
        dateFrom: new Date(1563840000000),
        dateTo: new Date(1565049600000),
        media: "menorka.jpeg"
    },
    {
        id: 5,
        country: 'Норвегия: Осло, Берген, Ставенгер, Олесунн',
        info:  'Дешевые авиабилеты в Осло и другие города Норвегии с Украины от €44 в две стороны!',
        dateFrom: new Date(1564617600000),
        dateTo: new Date(1572393600000),
        media: "Norvegian.jpg"
    },
];
// export function Blog(props) {
// const content = props.data.map((post) =>
// <div key={post.id}>
//     <Typography component="h5" variant="h5">
//         {post.country}                    
//     </Typography>
//     <Typography variant="subtitle1" color="textSecondary">
//         {post.info}
//         <p><b>Даты:20-28 серпня.</b></p>
//     </Typography>
// </div>
// );
// return (
//     <div>
//       {content}
//     </div>
//   );
// }
 export default { data };


