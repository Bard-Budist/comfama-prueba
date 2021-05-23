import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography
} from '@material-ui/core';
import './components.css';

const Item = (props) => {
  const {
    dataItem
  } = props;
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="media"
          image={dataItem.image}
          title="Contemplative Reptile"
        />
        <div className="badge">
          <p>{dataItem.type}</p>
        </div>
        <CardContent>
          <Typography>
          {
            dataItem.title.length > 30 ?
              `${dataItem.title.substring(0, 25)}...` : dataItem.title
          }
          </Typography>
          <Typography component="p">
            <strong>
              {dataItem.scoreTitle}
            </strong>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Item;