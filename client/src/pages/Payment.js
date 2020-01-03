import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
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
import axios from "axios";
import { connect } from "react-redux";
import { getOrderpending } from "../_actions/order";
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
class Payment extends Component {
  componentDidMount() {
    this.props.getOrderpending();
  }
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      dataOrders: []
    };
    this.onClick.bind(this);
  }

  //edit status pending
  onClick = orderId => event => {
    event.preventDefault();
    const token = localStorage.getItem("auths");
    const data = this.state.dataOrders;
    const status_id = 1;

    console.log(orderId);
    if (data !== undefined) {
      alert("Thankyou ! We will be aproved your tiket soon ");
      axios({
        method: "PUT",
        url: `http://localhost:4500/api/dumbticket/order/confirmed/${orderId}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          status: status_id
        }
      }).then(respons => {
        window.location = "/pages/Myticket";
        this.setState({
          status: respons.data
        });
      });
    } else {
      alert("authorized");
    }
  };
  render() {
    const { dataPending, isLoadingPending, errorPending } = this.props.orders;

    if (errorPending) {
      return (
        <div>
          <h1>error</h1>
        </div>
      );
    }

    if (isLoadingPending) {
      return (
        <div>
          <h1>Now Loading</h1>
        </div>
      );
    }
    return (
      <div>
        <Nav />

        <div style={{ margin: "10px 80px" }}>
          {" "}
          <Typography
            variant="h4"
            style={{ color: "#d50000", fontWeight: "bold" }}
          >
            Payment
          </Typography>
          {dataPending.length === 0 && (
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
          <div
            style={{
              backgroundColor: "#fff",
              margin: "20px auto"

              //   display: "flex",
              //   justifyContent: "center",
              //   flexDirection: "coloumn"
            }}
          >
            {dataPending.map((item, index) => {
              return (
                <div
                  style={{
                    paddingTop: "40px",
                    width: "80%",
                    margin: "0 10%",
                    backgroundColor: "#fff"
                  }}
                  key={index}
                >
                  <div
                    style={{
                      backgroundColor: "#d50000",

                      margin: "10px auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
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

                              justifyContent: "space-between"
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              style={{
                                color: "#757575",
                                fontSize: "12px",
                                alignItems: "center",
                                textAlign: "left",

                                marginTop: "0",
                                marginBottom: "0"
                              }}
                            >
                              HTM : {item.event.price}
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
                      <Grid container item xs={12}>
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
                                fontSize: "14px"
                              }}
                            >
                              {getDayOfWeek(item.event.start_date)} &nbsp;
                              {item.event.start_date} &nbsp; at &nbsp;
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
                              margin: "5% 0 5% 5%",
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
                  <div style={{ margin: "20px 2%" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#757575",
                            alignItems: "center",
                            textAlign: "left",
                            marginTop: "3%",
                            fontWeight: "bold",
                            marginBottom: "0"
                          }}
                        >
                          Shopping Summary
                        </Typography>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          variant="subtitle2"
                          style={{
                            color: "#757575",
                            alignItems: "center",
                            textAlign: "left",
                            marginTop: "20px",
                            marginBottom: "10px"
                          }}
                        >
                          Total Price : ({item.order_qty} items)
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography
                          variant="subtitle2"
                          style={{
                            color: "#757575",
                            textAlign: "left",
                            marginTop: "20px",
                            marginBottom: "10px"
                          }}
                        >
                          Rp {item.total_price}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider
                      style={{ height: "5px", backgroundColor: "#9e9e9e" }}
                    />
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#757575",
                            alignItems: "center",
                            textAlign: "left",
                            marginTop: "3%",
                            fontWeight: "bold",
                            marginBottom: "0"
                          }}
                        >
                          Prove of Payment
                        </Typography>
                      </Grid>
                      <Grid item xs={10}>
                        <div
                          style={{
                            marginTop: "20px",
                            alignItems: "center",
                            textAlign: "left"
                          }}
                        >
                          <img
                            src="https://idebisnis.org/wp-content/uploads/2018/05/cetak-struk-mandiri-400x491.jpg"
                            width="200"
                            height="200"
                            style={{ border: "5px solid #424242" }}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          variant="contained"
                          onClick={this.onClick(item.id)}
                          size="large"
                          style={{
                            backgroundColor: "#d50000",
                            color: "#fff"
                          }}
                        >
                          CONFIRM
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.Orderpending
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrderpending: () => {
      dispatch(getOrderpending());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
