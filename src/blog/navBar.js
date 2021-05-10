import React from 'react'
import { Drawer, ListItemText,Typography } from '@material-ui/core/';
import {List, Link} from '@material-ui/core/';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
// import {InboxIcon, HomeIcon} from '@material-ui/icons/';
import DraftsIcon from '@material-ui/icons/Drafts';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const imgUrl="https://lh3.googleusercontent.com/proxy/FLriBwo1gHZjOkw1nsmOhQJ-5FsLix1tLuhyVkBMNZJptyfwxEweZ9TVOJTGpJ2aIYKt_378zpclvjsD7ANpQyJkDDmEpyHwyCEYP7Vv1z1D"

const useStyles = makeStyles((theme) => ({
    NavList:{
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
         }
        },
        Link:{
           textDecoration: 'none',
           color:theme.palette.text.primary,
           textTransform:"uppercase"
        },
        Divider:{
            // position:"absolute",
            background:"#fff",
            bottom:0,
            marginBottom:"20px",
            left:0

        }
         
  }));

const NavBar = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (status) => (event) => {
        setState(status)
    }
    const navigate = (val)=> (
        <Redirect to={val} />
    )

    const list = () => (
        <div style={{ width: 300, height:"100%", background:"#3614bd", color:"#fff", textAlign:"center"}}>
            <List component="nav" aria-label="main mailbox folders">
                <div style={{width:"40%", margin:"0 auto"}}>
                    <img src={imgUrl} width="100%"></img>
                </div>

               <Link href="/"  className={classes.Link}>
                <ListItem button>
                        <ListItemIcon>
                            <HomeIcon style={{color:"#fff"}} />
                        </ListItemIcon>
                        <ListItemText className={classes.ListItemText} style={{color:"#fff"}} primary="Home" />
                    </ListItem>
               </Link>
               <Link href="/blog"  className={classes.Link}>
                <ListItem button>
                        <ListItemIcon>
                            <LibraryBooksIcon style={{color:"#fff"}} />
                        </ListItemIcon>
                        <ListItemText className={classes.ListItemText} style={{color:"#fff"}} primary="Blog" />
                    </ListItem>
               </Link>
               <Link href="/signin"  className={classes.Link}>
                <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon style={{color:"#fff"}} />
                        </ListItemIcon>
                        <ListItemText className={classes.ListItemText} style={{color:"#fff"}} primary="SignIn" />
                    </ListItem>
               </Link>
            </List>
            <Divider className={classes.Divider} variant="middle" />
        </div>
    )
    return (
        <>
            <Button style={{color:"#fff"}} onClick={toggleDrawer(true)}><MenuIcon /></Button>
            <Drawer open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </>
    )
}

export default NavBar;