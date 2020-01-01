import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetailEvent } from "../_actions/event";
import { Button, Typography, Grid, Divider } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import EventIcon from "@material-ui/icons/Event";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
class Detailevent extends Component {
  componentDidMount() {
    this.props.getDetailEvent(this.props.idEvent);
    // console.log("test "/this.props);
  }
  render() {
    const { detail, isLoadingDetail, errorDetail } = this.props.event;

    if (errorDetail) {
      return (
        <div>
          <h1> error </h1>{" "}
        </div>
      );
    }

    if (isLoadingDetail) {
      return (
        <div>
          <h1> Now Loading </h1>{" "}
        </div>
      );
    }
    return (
      <div
        style={{
          margin: "0 auto"
        }}
      >
        <Nav />
        <div
          style={{
            margin: "0 80px",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              margin: "5% auto",
              width: "80%"
            }}
          >
            <div
              style={{
                margin: "2% auto"
              }}
            >
              <Grid
                container
                style={{
                  border: "2px solid #bdbdbd",
                  borderRadius: "10px"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Grid item xs={12}>
                    <img
                      component="img"
                      src={detail.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px"
                      }}
                    />{" "}
                  </Grid>{" "}
                </div>
                <Grid item xs={6}>
                  <div
                    style={{
                      paddingLeft: "10px",
                      margin: "15px"
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{
                        color: "#616161"
                      }}
                    >
                      {" "}
                      {detail.name}{" "}
                    </Typography>{" "}
                    <Typography
                      variant="body2"
                      style={{
                        color: "#d50000",
                        fontWeight: "bold",
                        margin: "10px 0"
                      }}
                    >
                      {detail.categories ? detail.categories.name : ""}{" "}
                    </Typography>{" "}
                  </div>{" "}
                </Grid>{" "}
                <Grid item xs={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      padding: "15px"
                    }}
                  >
                    {/* <Avatar src={data.image} style={{ width: '200px', height: '200px' }} /> */}{" "}
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#d50000",
                        color: "#fff"
                      }}
                    >
                      Rp {detail.price}{" "}
                    </Button>{" "}
                  </div>{" "}
                </Grid>{" "}
                <Divider
                  style={{
                    width: "100%"
                  }}
                />
                <Grid item xs={4}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      padding: "15px 25px"
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        fontWeight: "Bold",
                        color: "#424242"
                      }}
                    >
                      Hosted By:
                    </Typography>{" "}
                    <div
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        fontWeight: "Bold",
                        alignItems: "center",
                        color: "#424242"
                      }}
                    >
                      {" "}
                      <img
                        component="img"
                        src={detail.user ? detail.user.image : ""}
                        style={{
                          width: "30%",
                          height: "10%"
                        }}
                      />
                      &nbsp;
                      <Typography variant="body1">
                        {detail.user ? detail.user.fullname : ""}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      padding: "15px 17%",
                      color: "#424242"
                    }}
                  >
                    {/* <Avatar src={data.image} style={{ width: '200px', height: '200px' }} /> */}{" "}
                    <Typography
                      variant="body1"
                      style={{
                        fontWeight: "Bold"
                      }}
                    >
                      Date & Time{" "}
                    </Typography>{" "}
                    <div
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        fontWeight: "Bold",
                        alignItems: "center"
                      }}
                    >
                      <EventIcon /> &nbsp;{" "}
                      <Typography
                        variant="caption"
                        style={{
                          color: "#424242"
                        }}
                      >
                        {" "}
                        {detail.start_date} &nbsp; s.d &nbsp; {detail.end_date}{" "}
                      </Typography>{" "}
                    </div>{" "}
                    <div
                      style={{
                        display: "flex",
                        paddingTop: "5px",
                        fontWeight: "Bold",
                        alignItems: "center"
                      }}
                    >
                      <QueryBuilderIcon /> &nbsp;{" "}
                      <Typography
                        variant="caption"
                        style={{
                          color: "#424242"
                        }}
                      >
                        {" "}
                        {detail.start_time} &nbsp; s.d &nbsp; {detail.end_time}{" "}
                      </Typography>{" "}
                    </div>{" "}
                  </div>{" "}
                </Grid>{" "}
                <Grid item xs={4} style={{ width: "100%" }}>
                  <div style={{ padding: "15px 30%", color: "#424242" }}>
                    <Typography
                      variant="body1"
                      style={{
                        fontWeight: "Bold"
                      }}
                    >
                      Contact Person
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        paddingTop: "5px",
                        fontWeight: "Bold",
                        alignItems: "center"
                      }}
                    >
                      <AccountBoxIcon /> &nbsp;
                      <Typography variant="caption">
                        {detail.user ? detail.user.fullname : ""}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        paddingTop: "5px",
                        fontWeight: "Bold",
                        alignItems: "center"
                      }}
                    >
                      <PhoneIcon /> &nbsp;{" "}
                      <Typography variant="caption">
                        {" "}
                        {detail.user ? detail.user.phone : ""}{" "}
                      </Typography>{" "}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    event: state.detailEvent, //diambil dari redux
    idEvent: ownProps.match.params.idEvent
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetailEvent: idEvent => {
      dispatch(getDetailEvent(idEvent));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Detailevent)
);
