import React, { useState } from 'react';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    styled,
    Theme,
    useTheme,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route, Link } from "react-router-dom";
import { useSignInCheck } from 'reactfire';

import { SearchForm, TurnTable } from '../../components';




const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            padding: '0',
            margin: '0',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: 'red'
        },
        icon: {
            color: 'red'
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            color: 'white',
            backgroundColor: 'black'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        toolbar: {
            display: 'flex',
            backgroundColor: 'black'
        },
        toolbar_button: {
            marginLeft: 'auto',
            color: 'white'
        },
    }),
);




interface DashProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
};


export const Home = withRouter(( props:DashProps ) => {
    console.log(props)
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    }

    const itemList = [
        {
            text: 'Sign In',
            onClick: () => <Link to="/signin">Sign In</Link>
        },
        {
            text: 'Inventory',
            onClick: () => <Link to="/inventory">Inventory</Link>
        },
        // change above to connect with Google account, etc//
    ]
    
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,

                })}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Vinylist
                    </Typography>
                    <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Search Collectorbase</Button>

                        <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Search Collectorbase</DialogTitle>
                            <DialogContent>
                                <DialogContentText></DialogContentText>
                                    <SearchForm />
                            </DialogContent>
                            <DialogActions>
                                {/*<Button onclick = {handleDialogClickClose} color="secondary">Search</Button>*/}
                            </DialogActions>
                        </Dialog>
                </Toolbar>
            </AppBar>
            <MUIDrawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                {itemList.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
                </List>
            </MUIDrawer>



            <main className={clsx(classes.content, {  //Main Area//
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <h1>Welcome to Vinylist!</h1>
                <TurnTable />
            </main>
            
        </div>
        )
    });



    //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    --personal access token






{/*export const Home = (props:Props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Vinylist</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        
                        <li>
                            <Link to="/Inventory" className={classes.nav_a}>Inventory</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                        <p>I <3 Vinyl</p>
                </div>
            </main>
        </div>
    )
}*/}