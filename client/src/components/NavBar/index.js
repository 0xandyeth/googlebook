import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import "./style.css";
const Logo = require('../../assets/images/bookicon.png')
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'fixed',
      top: 0,
      zIndex:1,
      width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar() {

    const classes = useStyles();
    return (


        <nav className="navbar navbar-expand-lg text-light borderShadow">
            <div className="container">
                <div style={{justifyContent:'center',alignItems:'center'}}>
                <img src={Logo} style={{width:50,height:50}}/>
                   <Link className="navbar-brand" to="/">
                       <p style={{fontSize:30,fontFamily:'fantasy',color:'#007bff',fontSize:25}}>Google Books</p>
                       </Link>
                </div>
               
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > <span style={{color:'#f13042',fontSize:20,fontFamily:'auto',fontWeight:'bold'}}>Search</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        ><span style={{color:'#f13042',fontSize:20,fontFamily:'auto',fontWeight:'bold'}}>Saved</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
   
    //     <div className={classes.root}>
    //      <AppBar position="static">
    //       <Toolbar>
    //         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //           <img src={Logo} style={{width:50,height:50}}/>
    //         </IconButton>
    //         <Typography variant="h6" className={classes.title}>
    //            <Link className="navbar-brand" to="/">Google Books</Link>
    //         </Typography>
    //         <Button color="inherit">Search</Button>
    //         <Button color="inherit">Save</Button>
    //       </Toolbar>
    //     </AppBar>
    //   </div>
    );
}

export default Navbar;