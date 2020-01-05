import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Category from "../component/Category";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider
} from "@material-ui/core";

import { connect } from "react-redux";
import { getEvent, getNextEvent } from "../_actions/event";
import { Search } from "@material-ui/icons";
import BtnFav from "../component/BtnFav";

class Home extends Component {
  componentDidMount() {
    this.props.getEvent();
    this.props.getNextEvent();
  }
  render() {
    const { event, isLoading, error } = this.props.event;
    const { datas, isLoadings, errors } = this.props.events;
    if (error || errors) {
      return (
        <div>
          <h1>error</h1>
        </div>
      );
    }

    if (isLoading || isLoadings) {
      return (
        <div>
          <h1>Now Loading</h1>
        </div>
      );
    }
    return (
      <div style={{ margin: "auto" }}>
        <Nav />

        <div style={{ margin: "40px 80px", justifyContent: "center" }}>
          <form method="get" action="/pages/Searchevent/" autoComplete="off">
            <FormControl fullWidth>
              <Input
                id="input-with-icon-adornment"
                name="name"
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
          </form>
          <div style={{ marginTop: "40px 0" }}>
            <Category />
            <div style={{ marginTop: "10px" }}>
              <Typography variant="h5" style={{ fontWeight: "Bold" }}>
                Todays
              </Typography>
              <Divider />
              <div style={{ marginTop: "2%" }}>
                <Grid container spacing={4} style={{ margin: "30px 0" }}>
                  {event.length === 0 && (
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        color: "#212121",
                        fontWeight: "bold",
                        alignItems: "center",
                        textAlign: "center"
                      }}
                    >
                      Oups....No Data :({" "}
                    </Typography>
                  )}
                  {event.map((item, index) => {
                    return (
                      <Grid item xs={4} key={index}>
                        <Card>
                          <Link
                            to={"/pages/Detailevent/" + item.id}
                            style={{ textDecoration: "none" }}
                          >
                            <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              height="140"
                              image={item.image}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                style={{ color: "#212121", fontWeight: "bold" }}
                              >
                                {item.name.substring(0, 20)}
                              </Typography>
                              <Typography
                                variant="body2"
                                component="p"
                                style={{ color: "#d50000", fontWeight: "bold" }}
                              >
                                {item.start_date.substring(0, 200)}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {item.detail_event.substring(0, 200)}
                              </Typography>
                            </CardContent>
                          </Link>
                          <CardActions>
                            <Button
                              size="small"
                              style={{
                                backgroundColor: "#d50000",
                                color: "#fff"
                              }}
                              disabled
                            >
                              Rp {item.price}
                            </Button>
                            <BtnFav event_id={item.id} />
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
            {/* NEXT EVENT */}
            <div style={{ marginTop: "5%" }}>
              <Typography variant="h5" style={{ fontWeight: "Bold" }}>
                Upcoming
              </Typography>
              <Divider />
              <div style={{ marginTop: "2%" }}>
                <Grid container spacing={4} style={{ margin: "30px 0" }}>
                  {datas.length === 0 && (
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        color: "#212121",
                        fontWeight: "bold",
                        alignItems: "center",
                        textAlign: "center"
                      }}
                    >
                      Oups....No Data :({" "}
                    </Typography>
                  )}
                  {datas.map((items, indexs) => {
                    return (
                      <Grid item xs={4} key={indexs}>
                        <Card>
                          <Link
                            to={"/pages/Detailevent/" + items.id}
                            style={{ textDecoration: "none" }}
                          >
                            <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              height="140"
                              image={items.image}
                              title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                style={{ color: "#212121", fontWeight: "bold" }}
                              >
                                {items.name.substring(0, 20)}
                              </Typography>
                              <Typography
                                variant="body2"
                                component="p"
                                style={{ color: "#d50000", fontWeight: "bold" }}
                              >
                                {items.start_date.substring(0, 200)}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {items.detail_event.substring(0, 200)}
                              </Typography>
                            </CardContent>
                          </Link>
                          <CardActions>
                            <Button
                              size="small"
                              style={{
                                backgroundColor: "#d50000",
                                color: "#fff"
                              }}
                              disabled
                            >
                              Rp {items.price}
                            </Button>
                            <BtnFav event_id={items.id} />
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    event: state.event,
    events: state.events
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getEvent: () => {
      dispatch(getEvent());
    },
    getNextEvent: () => {
      dispatch(getNextEvent());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
