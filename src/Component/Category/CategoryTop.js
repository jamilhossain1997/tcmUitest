import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Grid } from '@material-ui/core';
import category from '../../category.jpg';


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding:`10px`,
    },
    content: {
        flex: '1 0 auto',
    },

    textTitle:{
        fontWeight: '500',
        fontSize: '.875rem',
        lineHeight: '1.25rem',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
   
}));

const CategoryTop = () => {
    const classes = useStyles();
    const theme = useTheme();

    const categories = [
        {
            id: 1,
            name: "Fruits and Vegetables",
            photo: category,
        },
        {
            id: 2,
            name: "Meat and FishCooking",
            photo: category,
        },
        {
            id: 3,
            name: "Beverages",
            photo: category,
        },
        {
            id: 4,
            name: "Home and Cleaning",
            photo: category,
        },
        {
            id: 5,
            name: "Health Products",
            photo: category,
        },
        {
            id: 6,
            name: "Baby Care",
            photo: category,
        },
        {
            id: 7,
            name: "Beauty Products",
            photo: category,
        },
        {
            id: 8,
            name: "Kitchen Appliances",
            photo: category,
        },
        {
            id: 9,
            name: "Commodities",
            photo: category,
        },
        {
            id: 10,
            name: "Dairy Products",
            photo: category,
        },
        {
            id: 11,
            name: "Packaged Foods",
            photo: category,
        },
        {
            id: 12,
            name: "Ice-Cream",
            photo: category,
        },
    ]
    return (
        <>
            <Grid container spacing={2}>

                {
                    categories?.map((item) => {
                        return (
                            <>
                                <Grid item xs={3}>
                                    <Card className={classes.root}>
                                        <CardMedia style={{padding:`10px`}}>
                                            <Avatar aria-label="recipe" style={{ width: `50px`, height: `50px` }}>
                                                <img src={item.photo} alt="not found" />
                                            </Avatar>
                                        </CardMedia>
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <Typography component="h5" variant="h5" className={classes.textTitle}>
                                                    Live From Space
                                                </Typography>
                                            </CardContent>
                                        </div>

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

export default CategoryTop