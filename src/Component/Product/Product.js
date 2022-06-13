import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Container } from '@mui/material';
import category from '../../category.jpg';

const Product = () => {
    
    const categories = [
        {
          id: 1,
          name: "Fruits and Vegetables",
          price: "400",
          photo: category
        },
        {
          id: 2,
          name: "Meat and FishCooking",
          price: "400",
          photo: category
        },
        {
          id: 3,
          name: "Beverages",
          price: "400",
          photo: category
        },
        {
          id: 4,
          name: "Home and Cleaning",
          price: "400",
          photo: category
        },
        {
          id: 5,
          name: "Health Products",
          price: "400",
          photo: category
        },
        {
          id: 6,
          name: "Baby Care",
          price: "400",
          photo: category
        },
        {
          id: 7,
          name: "Beauty Products",
          price: "400",
          photo: category
        },
        {
          id: 8,
          name: "Kitchen Appliances",
          price: "400",
          photo: category
        },
        {
          id: 9,
          name: "Commodities",
          price: "400",
          photo: category
        },
        {
          id: 10,
          name: "Dairy Products",
          price: "400",
          photo: category
        },
        {
          id: 11,
          name: "Packaged Foods",
          price: "400",
          photo: category
        },
        {
          id: 12,
          name: "Ice-Cream",
          price: "400",
          photo: category
        },
      ]
  return (
    <>
       
       <Grid container spacing={1}>
      
        {
          categories.map((pro) => {
            return (
              <>
                <Grid item  xs={2}>
                  <Card sx={{ maxWidth:345 }}>
                    <CardActionArea>
                      <CardMedia>
                         <img src={pro.photo} alt="not found"/>
                      </CardMedia>
                     
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

              </>
            )
          })
        }

      </Grid>
    </>
  )
}

export default Product