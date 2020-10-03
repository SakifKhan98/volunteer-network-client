import React, { useContext } from "react";

import { UserContext } from "../../App";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import logo from "../../resources/icons/logo.png";
import "./VolunteerRegister.css";

import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const socialStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const VolunteerRegister = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className="loginContainer" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            style={{ width: "100px", paddingTop: "10px" }}
            src={logo}
            alt=""
            srcSet=""
          />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid item>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                // inputRef={register}
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              //   inputRef={register}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              //   inputRef={register}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default VolunteerRegister;
