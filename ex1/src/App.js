import "typeface-roboto";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography"


const headFooterStyle = {
  padding: 8,
  textAlign: "center",
};
const mainStyle = {
  padding: 16,
  textAlign: "center"
};
const navStyle = {marginLeft: 5};

export default function App(){
  return(
    <div style={{flexGrow:1}}>
      <Grid container spacing={3}>
        <Paper style={headFooterStyle}>
          <Typography>Header</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Typography style={navStyle}>Nav Item 1</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 2</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 4</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 3</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 4</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper style={mainStyle}>
          <Typography>Footer</Typography>
        </Paper>
      </Grid>

    </div>
  )
}
