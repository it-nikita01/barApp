import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import NavBar from "./navBar";
const data =[
    {
        title: "Black Dog Reserve",
        detail:"One of the best whiskies in India with a stellar reputation and a remarkable taste, Black Dog Reserve is an aged and rare liquid with an unusually smooth blend of malt and grain whiskies from Scotland. ",
        path:"https://lh3.googleusercontent.com/rsvd9pU9_l9wRHRbJk0uzc3vP8CarslViTZl82KW2qNsmmQZlCjJ7n_Tpkn_LoA6ezkBn859WcxVNw1zxdkByLLwGQ=w1000"
    },
    {
        title: "Glenkinchie 12",
        detail:"A notable name within the category of single malt scotch whisky, Glenkinchie 12-year-old carries an assortment of delectable cereal, green apple, lemon and sweet honey flavoured notes. ",
        path:"https://lh3.googleusercontent.com/RBZ0n5CwbpKcreldgf34nti9JBTmePqGIOxKwy3EUwj1dWkrP_IXULUuGzDlEZQtfjkZG6nFpd8u0R5FNwSN-DBvBA=w1000"
    },
    {
        title: "Glenmorangie 10-Year Original ",
        detail:"An exceptional single malt scotch whisky hailing from the Glenmorangie Highland distillery in North Scotland, this one is an absolute value for money. It's a mature spirit capable of delighting even the most demanding of whisky enthusiasts, that's soft, mellow and immensely creamy to taste. ",
        path:"https://lh3.googleusercontent.com/VNhvuN_2-dXc35GSB2bHBQBMXONaOELDQogUoY0QVEJeunqJaoWCKDdQ647cZBcQQKtvLx2LKQmm-41nGaYZs8ITDkY=w1000"
    },
    {
        title: "Talisker 10",
        detail:"Brimming with subtle red fruit flavours after being aged in American oak casks that previously contained port, Talisker 10 boasts of a sweet and peat palate with hints of rocky flavours. It's a complex whisky that frequently gets pitted under the best whisky brands in India",
        path:"https://lh3.googleusercontent.com/FxAOkR6UIZ2G9f-S-C9t1cXiFjG9tI5SkD9E5nSiDlhC6c-qCl2MWVghImW9BKBNN4iGqtWCX43M207PAaLbhwFmmy5h=w1000"
    },
    {
        title: "The Glenlivet",
        detail:"e best-selling single malt whisky in the United States, and undoubtedly one of the most famous whisky brands in India, The Glenlivet 12-year-old boasts of a soft, smooth balance of sweet summer fruits and fresh floral notes. This is one of the most popular single malt ",
        path:"https://lh3.googleusercontent.com/BqH5ZHvXYF84lybACBqobHq1xDsEEuRAWzfk07TAhTfv5u0Z_Nn3I_dLS-MWWAcHpGo_uDJh2YZV2j7xpPaRHqt46g=w1000"
    },
    {
        title: "Ballantine's 12-Year",
        detail:"A beautiful blend of cherry-picked single malt and grain whiskies, Ballentine's is a rich, complex yet smooth-tasting whisky that's aged for 12 years. Defined by toffee, honey and creamy notes, you get this famous whisky in a traditional square bottle. ",
        path:"https://lh3.googleusercontent.com/5EaS-1KIEmiCVkiYP8H_7Yl_USQKjdFClgQ3k4NDjUK496ffh7E2DD7URiKKm_kcEUXSarhvzHFgzcTOjqPKg0uHOg=w1000"
    },
]

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "#3614bd",
        color: "#fff",
        position:"fixed"
        
    },
    title: {
        flexGrow: 1,
    },
    hero: {
        background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.pinimg.com/originals/41/7d/00/417d005bfb73fd4606c9e5b4bb0c9a04.jpg')",
        height: "50vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        letterSpacing:"10px",
        textTransform:"uppercase"
    },
    container: {
        paddingTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    root: {
        maxWidth: 345,
        boxShadow:"0 0 15px 0px #000000ad"
      },
      media: {
        height: 140,
      },
    allBrand:{
        margin: "20px 0 40px 0"
    },
    body:{
        background: "#f4f4f4"
    }

}));


const BlogApp = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.body}>
                <AppBar position="static" className={classes.appBar} >
                    <Toolbar>
                        <NavBar />
                        <Typography variant="h6" className={classes.title}>
                        WHISKY CORNER
                        </Typography>
                        <Button color="inherit" href="/signin">Sigin-In</Button>
                        <Button color="inherit" href="/login">Login</Button>
                    </Toolbar>
                </AppBar>
                <Box className={classes.hero}>
                    <Box>Drinks Blog</Box>
                    <Typography variant="body2" component="p">
                    Raise your whiskey glass and poor it down.                 
                    </Typography>
                </Box>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="h4" className={classes.allBrand}>
                        All Brands
                    </Typography>
                    <Grid container spacing={3}>
                    {data.map((val,i)=>(
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={val.path}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                    {val.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                    {val.detail}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Share
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Learn More
                                                </Button>
                                            </CardActions>
                                        </Card>
                                </Grid>
                    ))}
                     </Grid>
                </Container>
                <Box className={classes.hero}>
                    <Box>Thankyou</Box>
                    <Typography variant="body2" component="p">
                    Fall in love in just one sip.                 
                    </Typography>
                </Box>
            </div>
        </>
    );
}

export default BlogApp;