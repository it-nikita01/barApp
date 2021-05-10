import React from 'react';
import { Typography, Container, Button ,AppBar, Toolbar, CssBaseline, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme)=>({
    root: {
        color:"#fff"
    },
    BodyContainer:{
        marginTop: "10px"
    },
    title: {
        flexGrow: 1,
    },
    login:{
        color:"#fff"
    },
    "&login":{
        background:"red"
    },
    IconButton:{
        color:"#fff"
    },
    AppbarBg:{
        background:"#fff",
        color:"#000"
    }
}))



const HomePage = ()=>{
    const classes=useStyles()
    return(
        <>
            <CssBaseline />
            <AppBar position="static" className={classes.AppbarBg}>
                <Toolbar>
                    <IconButton edge="start" className={classes.IconButton}>
                        <MenuIcon  style={{ color: "#000" }}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Testing APP
                    </Typography>
                    <Typography variant="body1">
                        <Button href="/signin">
                        Signin
                        </Button>
                    </Typography>
                    <Typography variant="body1">
                        <Button href="/blog">
                        Blog
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container className={classes.BodyContainer}>
                    <Typography variant="h3">
                        This is the body part
                    </Typography>
                </Container>
            </main>
        </>
            
    )
}

export default HomePage;