import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Category from "../component/Category";
import {
  Button,
  Typography,
  Grid,
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { getAllOrder } from "../_actions/order";
function getDayOfWeek(date) {
  let dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ][dayOfWeek];
}
class Myticket extends Component {
  componentDidMount() {
    this.props.getAllOrder();
  }

  render() {
    const { dataOrder, isLoadingOrder, errorOrder } = this.props.orders;
    let st = "";

    if (errorOrder) {
      return (
        <div>
          <h1>error</h1>
        </div>
      );
    }

    if (isLoadingOrder) {
      return (
        <div>
          <h1>Now Loading</h1>
        </div>
      );
    }
    return (
      <div style={{ margin: "0 auto" }}>
        <Nav />

        <div style={{ margin: "5% 80px" }}>
          {" "}
          <Typography
            variant="h4"
            style={{ color: "#d50000", fontWeight: "bold" }}
          >
            My Ticket
          </Typography>
          {dataOrder.length === 0 && (
            <Typography
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
          {dataOrder.map((item, index) => {
            st = item.event.start_time;
            let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            let dt = new Date(st.replace(pattern, `$3-$2-$1`));
            //  let day = dt.getDay();
            console.log(dt);

            return (
              <div
                style={{
                  backgroundColor: "#fff",
                  margin: "5px auto",
                  display: "flex",
                  justifyContent: "center"
                }}
                key={index}
              >
                <div
                  style={{
                    backgroundColor: "#d50000",
                    width: "80%",
                    margin: "10px 0",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      width: "95%",
                      marginTop: "2%",
                      marginBottom: "2%"
                    }}
                  >
                    <Grid
                      container
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#e0e0e0"
                      }}
                    >
                      <Grid item xs={10}>
                        <div style={{ margin: "10px 20px" }}>
                          <Typography
                            variant="h6"
                            style={{
                              color: "#757575",
                              fontWeight: "bold",

                              alignItems: "center",
                              textAlign: "left",
                              marginTop: "0",
                              marginBottom: "0"
                            }}
                          >
                            {item.user.fullname}
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{
                              color: "#757575",
                              fontWeight: "bold",
                              alignItems: "center",
                              textAlign: "left",
                              marginTop: "0",
                              marginBottom: "0"
                            }}
                          >
                            User Id : {item.user_id}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={2}>
                        <div
                          style={{
                            margin: "10px 20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            style={{
                              color: "#757575",
                              fontSize: "10px",
                              alignItems: "center",
                              textAlign: "left",

                              marginTop: "0",
                              marginBottom: "0"
                            }}
                          >
                            Face Value : {item.event.price}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{
                              color: "#757575",

                              alignItems: "center",
                              textAlign: "left",
                              fontWeight: "bold",
                              marginTop: "0",
                              marginBottom: "0"
                            }}
                          >
                            Status : {item.status}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                      item
                      xs={12}
                    >
                      {" "}
                      <Grid item xs={10}>
                        <div
                          style={{
                            margin: "10px 20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                          }}
                        >
                          <Typography
                            variant="h5"
                            style={{
                              color: "#424242",
                              alignItems: "center",
                              textAlign: "left",
                              marginTop: "0",
                              marginBottom: "0",
                              fontWeight: "bold"
                            }}
                          >
                            {item.event.name}
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{
                              color: "#757575",
                              alignItems: "center",
                              textAlign: "left",
                              marginTop: "0",
                              marginBottom: "0",
                              fontSize: "12px"
                            }}
                          >
                            {getDayOfWeek(item.event.start_date)} &nbsp;
                            {item.event.start_date} &nbsp; at
                            {item.event.start_time}
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{
                              color: "#757575",
                              alignItems: "center",
                              textAlign: "left",
                              marginTop: "0",
                              marginBottom: "0",
                              fontSize: "14px"
                            }}
                          >
                            {item.event.location}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={2}>
                        <div
                          style={{
                            marginLeft: "10%",
                            alignItems: "center",
                            textAlign: "left"
                          }}
                        >
                          <img
                            src={item.event.image}
                            width="100"
                            height="100"
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.Order
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllOrder: () => {
      dispatch(getAllOrder());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Myticket);
