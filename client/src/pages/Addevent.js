import React, { Component } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {
  Typography,
  Card,
  Container,
  TextField,
  CardContent,
  TextareaAutosize
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import axios from "axios";

class Addevent extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      title: "",
      category: "",
      startTime: "",
      endTime: "",
      startDate: "",
      endDate: "",
      price: "",
      description: "",
      location: "",
      urlMaps: "",
      image: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.getCategories();
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const token = localStorage.getItem("auths");
    let sDate = e.target.startDate.value.toString();
    let eDate = e.target.endDate.value.toString();
    let sTime = e.target.startTime.value.toString();
    let eTime = e.target.endTime.value.toString();

    const datas = {
      category_id: this.state.category,
      name: this.state.title,
      detail_event: this.state.description,
      image: this.state.image,
      start_date: sDate,
      end_date: eDate,
      start_time: sTime,
      end_time: eTime,
      price: this.state.price,
      location: this.state.location,
      url_maps: this.state.urlMaps
    };
    return axios({
      method: "post",
      url: "http://localhost:4500/api/dumbticket/event/addevent",
      data: datas,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res.data);
        window.location = "/pages/home";
      })
      .catch(err => {
        alert("bad request");

        throw err;
      });
  };
  render() {
    const { data, isLoading, error } = this.props.categories;

    return (
      <div style={{ margin: "0 auto" }}>
        <Nav />

        <div style={{ margin: "5% 80px" }}>
          {" "}
          <div
            style={{
              backgroundColor: "#ffebee",
              margin: "0 auto",

              color: "#d50000"
            }}
          >
            <Container maxWidth="lg">
              <div>
                <h2 style={{ textAlign: "center" }}>Add New Event</h2>
              </div>
              <div style={{ width: "80%", margin: "0 10%" }}>
                <form onSubmit={this.onSubmit}>
                  <TextField
                    fullWidth
                    label="Title Event"
                    name="title"
                    type="text"
                    style={{ paddingTop: "20px", color: "#616161" }}
                    onChange={this.onChange}
                    value={this.state.title}
                    required
                  />

                  <TextField
                    select
                    fullWidth
                    name="category"
                    style={{ paddingTop: "20px", color: "#616161" }}
                    onChange={this.onChange}
                    required
                    SelectProps={{
                      native: true
                    }}
                  >
                    {data.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    label="Start date"
                    name="startDate"
                    type="date"
                    onChange={this.onChange}
                    required
                    style={{ paddingTop: "20px", color: "#616161" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <TextField
                    fullWidth
                    label="End date"
                    name="endDate"
                    type="date"
                    onChange={this.onChange}
                    required
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Start TIme"
                    name="startTime"
                    type="time"
                    onChange={this.onChange}
                    required
                    style={{ paddingTop: "20px", color: "#616161" }}
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      step: 300 // 5 min
                    }}
                  />
                  <TextField
                    fullWidth
                    label="End Time"
                    name="endTime"
                    type="time"
                    onChange={this.onChange}
                    required
                    style={{ paddingTop: "20px", color: "#616161" }}
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      step: 300 // 5 min
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    type="number"
                    required
                    style={{ paddingTop: "20px", color: "#616161" }}
                  />
                  <Typography style={{ paddingTop: "20px", color: "#616161" }}>
                    Description
                  </Typography>
                  <TextareaAutosize
                    style={{ width: "100%", minHeight: "40px" }}
                    name="description"
                    label="Description"
                    required
                    value={this.state.description}
                    onChange={this.onChange}
                  ></TextareaAutosize>
                  <TextField
                    fullWidth
                    style={{ paddingTop: "20px", color: "#616161" }}
                    label="Location"
                    name="location"
                    type="text"
                    required
                    onChange={this.onChange}
                    value={this.state.location}
                  />
                  <TextField
                    fullWidth
                    style={{ paddingTop: "20px", color: "#616161" }}
                    label="URL Maps"
                    name="urlMaps"
                    type="text"
                    required
                    onChange={this.onChange}
                    value={this.state.urlMaps}
                  />
                  <TextField
                    fullWidth
                    label="Image"
                    name="image"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.image}
                    required
                    style={{ paddingTop: "20px", color: "#616161" }}
                  />
                  <Button
                    type="submit"
                    name="register"
                    variant="outlined"
                    size="large"
                    color="primary"
                    fullWidth
                    style={{
                      marginTop: "30px",
                      marginBottom: "20px",
                      backgroundColor: "#d50000",
                      border: "none",
                      color: "#fff"
                    }}
                  >
                    Add Event
                  </Button>
                </form>
              </div>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Addevent);
