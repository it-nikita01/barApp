import React, {useState} from "react";
import { Grid,Button,Icon ,Typography, Container,TextField } from "@material-ui/core";
import Signup from '../../public/static/signup.svg'
import SignupAvatar from '../../public/static/avatar-1.png'
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Cookies from 'js-cookie'
import { Link, Redirect } from "react-router-dom";

const DeleteCookie=()=>{
    Cookies.remove("dev");
}

const Signin=()=>{

    const [form, setState] = useState({
        fname: '',
        lname: '',
        number: '',
        password: '',
        rePassword: ''
      });
    const [isLogin, setLogin] = useState("false");
      
    const handleToggle = () => {
        setLogin(!isLogin);
      };
      const printValues = e => {
        e.preventDefault();
        console.log(e)
      };
    
      const updateField = e => {
        setState({
          ...form,
          [e.target.name]: e.target.value
        });
      };
    
    return(
        <>
        <Container>
             <div className="login-body">
                    <div className="login-img">
                        <img src={Signup} alt="Sign-UP" className="login-page-img"/>
                    </div>
                    <div className="login-form">
                        <Typography align="center" variant="h5">WELCOME
                        </Typography>
                        <Avatar alt="Avatar" src={SignupAvatar} className="signup-avatar" />
                        <form onSubmit={printValues} noValidate>
                        <Grid container spacing={2} className={isLogin ? "show" : "hide"}>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="fname"
                                    value={form.fname}
                                    required
                                    onChange={updateField}
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="lname"
                                    name="lname"
                                    value={form.lname}
                                    required
                                    onChange={updateField}
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    autoFocus
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={updateField}
                                    fullWidth
                                    id="number"
                                    value={form.number}
                                    label="Mobile Number"
                                    name="number"
                                    autoComplete="number"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={updateField}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={form.password}
                                    id="password"
                                    autoComplete="current-password"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={updateField}
                                    fullWidth
                                    name="rePassword"
                                    label="Re-Password"
                                    type="password"
                                    value={form.rePassword}
                                    id="re-password"
                                    autoComplete="current-password"
                                />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className={isLogin ? "hide" : "show"}>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={updateField}
                                    fullWidth
                                    id="number"
                                    value={form.number}
                                    label="Mobile Number"
                                    name="number"
                                    autoComplete="number"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={updateField}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={form.password}
                                    id="password"
                                    autoComplete="current-password"
                                />
                                </Grid>
                            </Grid>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={isLogin ? "show sign-up-submit" : "hide sign-up-submit"}
                            endIcon={<PersonAddIcon />}
                            >
                            Sign Up
                            </Button>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={isLogin ? "hide login" : "show login"}
                            endIcon={<AccountBoxIcon />}
                            >
                            Login
                            </Button>
                            
                            <Button className="RTHbtn" href="/" color="primary">
                                          return to Home
                            </Button>
                            <Button className="RTHbtn" onClick={handleToggle} color="primary">
                                          Login/Signin
                            </Button>
                        </form>
                        
                    </div>
             </div>
        </Container>
        </>  
    )
}

const login =()=>{
    return(
        <div>login</div>
    )
}

export default Signin;
