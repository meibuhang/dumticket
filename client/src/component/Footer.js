import React from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Backdrop,
  Typography,
  MenuItem,
  Button,
  Modal,
  Fade,
  Menu,
  Grid,
  Paper
} from "@material-ui/core";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function footer() {
  return (
    <div style={{ backgroundColor: "#d32f2f", color: "#fff" }}>
      <Grid container>
        <Grid item xs={4}>
          <div
            style={{ diplay: "flex", flexDirection: "column", color: "#fff" }}
          >
            <Typography variant="caption">
              DumbTick is web-based platform that provides tickets for varios
              event around sports music science and Programming
            </Typography>
          </div>
        </Grid>
        {/* about us */}
        <Grid item xs={4} style={{ alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "10px",
              margin: "0 10%",
              justifyContent: "center"
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ textDecoration: "underline" }}
            >
              Link About us :
            </Typography>

            <div
              style={{
                display: "flex",
                paddingTop: "15px",
                fontWeight: "Bold",
                alignItems: "center"
              }}
            >
              <InstagramIcon /> &nbsp;
              <Typography variant="caption">Instagram</Typography>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: "15px",
                fontWeight: "Bold",
                alignItems: "center"
              }}
            >
              <TwitterIcon /> &nbsp;
              <Typography variant="caption">Twitter</Typography>
            </div>
          </div>
        </Grid>
        {/* have a question ? */}
        <Grid item xs={4}>
          <div
            style={{
              margin: "0 10%",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px"
            }}
          >
            <Typography variant="h6">Have a Question ?</Typography>

            <Typography variant="subtitle1">DumbTick</Typography>
            <Typography variant="subtitle1">
              Email : Support@dumbtick.com
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
