import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const GoodsItem = ({ name, price, setOrder, poster, id }) => (
  <Grid item xs={ 12 } md={ 4 }>
    <Card sx={ { height: '100%' } }>
      <CardMedia
        component="img"
        image={ poster }
        alt={ name }
        title={ name }
        sx={ { height: 140 } }
      />
      <CardContent>
        <Typography variant="h6" component="h3">{ name }</Typography>
        <Typography variant="body1">Цена: { price } руб.</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          onClick={ () => setOrder({ id, name, price }) }
        >
          Купить
        </Button>
      </CardActions>
    </Card>
  </Grid>
)

export default GoodsItem