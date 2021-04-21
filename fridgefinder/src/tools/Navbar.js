import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Card, Button, Typography, AppBar, Toolbar, Grid, Modal, TextField } from '@material-ui/core';
import '../CSS/NavBar.css';

function NavBar() {
  // const user = useSelector(state => state.auth);
  let user = false; // only for testing until redux store is set up *****

  // const dispatch = useDispatch(); <Provider> issue
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {

  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    root: {

    },
    label: {
      position: 'absolute'
    }
  })

  const classes = useStyles();

  return (
    <>
      <AppBar id='navbar'>
        <Toolbar>
          <Grid container xs={12}>
            <Grid item xs={4} id='navbar_left'>
              Developer Contact Info {/*to be a link/modal*/}
            </Grid>
            <Grid item xs={4}>
              <NavLink to={'/'} id='navbar_logo'>FridgeFinder</NavLink>
            </Grid>
            <Grid item xs={4} id='navbar_right'> {/* to be a DROPDOWN soon*/}
              {user ?
                <div id='logged_in_link'>
                  <NavLink to='/myfridge/:id' id='navbar_links'>Profile</NavLink>
                </div>
                :
                <div id='not_logged_in_links'>
                  <div onClick={handleOpen}>
                    Log In
                  </div>
                </div>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Card id='login_modal'>
          <Grid container xs={12}>
            <Grid item xs={6}>
              <div id='login_modal_left'>
                <Typography variant='h5'>Login to FridgeFinder</Typography>
                <img src='#' alt='Picture of making food' />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div id='login_modal_right'>
                <form method='put' action='/api/users' onSubmit={handleSubmit} id='login_form'>
                  {/* <label for='email'>Email:</label> */}
                  <TextField
                    id='standard-basic'
                    classes={{
                      label: classes.label
                    }}
                    type='text'
                    label='Email'
                    value={email}
                    onChange={handleEmail}
                  />
                  <TextField
                    id='standard-basic'
                    classes={{
                      label: classes.label
                    }}
                    type='text'
                    label='Password'
                    value={password}
                    onChange={handlePassword}
                  />
                  <Button type='submit'>Log In</Button>
                </form>
                <div id='signup_option'>
                  <p>
                    Don't have an account?
                  </p>
                  <NavLink to='/signup' id='signup_button'>Sign Up</NavLink>
                </div>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </>
  )
}

export default NavBar;
