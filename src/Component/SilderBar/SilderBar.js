import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { BsMegaphone } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import { BiFoodMenu } from 'react-icons/bi';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

import sales from '../../icons/sales.png';
import popular from '../../icons/popular.png';
import food from '../../icons/food.png';
import toothbrush from '../../icons/tooth-brush.png';
import shampoo from '../../icons/shampoo.png';
import hygienic from '../../icons/hygienic.png';
import babyCare from '../../icons/babyCare.png';
import cleaning from '../../icons/cleaning.png';
import kitchen from '../../icons/kitchen.png';
import office from '../../icons/office.png';
import toy from '../../icons/toy.png';
import lifestyle from '../../icons/lifestyle.png';

import CatgoryTop from '../Category/CategoryTop';
import Product from '../Product/Product';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        marginLeft:'693px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const SilderBar = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                             TCM
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.grow} />
                    </Toolbar>

                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <MenuList sx={{ backgroundColor: `#F2F2F2` }}>
                            <MenuItem >
                                <ListItemIcon>
                                    <BsMegaphone />
                                </ListItemIcon>
                                <ListItemText>Offer</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <IoFastFoodOutline />
                                </ListItemIcon>
                                <ListItemText>Food Aid</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <BiFoodMenu />
                                </ListItemIcon>
                                <ListItemText>Recipes</ListItemText>
                            </MenuItem>
                        </MenuList>

                    </List>
                    <Divider />
                    <List>
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <img src={popular} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Popular</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <img src={sales} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Flash Sales</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={food} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Food</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={toothbrush} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Personal Care</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={hygienic} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Hygiene</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={shampoo} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Beauty & Health</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={babyCare} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Bady Care</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={kitchen} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Cleaning Supplies</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={cleaning} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Home & Kitchen</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={office} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Stationery & Office</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={toy} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Toys & Sports</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <img src={lifestyle} alt="not image" style={{ width: `26px` }} />
                                </ListItemIcon>
                                <ListItemText>Fashion & LifeStyle</ListItemText>
                            </MenuItem>

                        </MenuList>
                    </List>

                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    <CatgoryTop />
                    <Product/>
                </Main>
            </Box>

        </>
    )
}

export default SilderBar