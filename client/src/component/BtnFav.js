import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button, IconButton } from "@material-ui/core";
import axios from "axios";

export default class BtnFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      success: false,
      favorites: []
    };
    this.click = this.click.bind(this);
  }
  componentDidMount() {
    const token = localStorage.getItem("auths");
    axios({
      method: "get",
      url: "http://localhost:4500/api/dumbticket/event/allFav",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log("cehck", res.data);
      if (res.data.length === 0) {
        console.log("ini raisa ?", this.state.success);
        this.setState({ success: false });
      } else {
        this.setState({ favorites: res.data, success: true });
        console.log("ini bukan raisa ?", this.state.success);
      }
    });
  }

  //event click
  click = event_id => event => {
    event.preventDefault();
    const token = localStorage.getItem("auths");
    alert("Favorite added !");
    console.log(token, "ini token");
    console.log(event_id, "ini id");
    axios({
      method: "post",
      url: "http://localhost:4500/api/dumbticket/event/addFav",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        event_id: this.props.event_id
      }
    })
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ data: err, isLoading: false });
      });
  };
  render() {
    if (this.state.success === false) {
      return (
        <IconButton
          aria-label="add to favorites"
          onClick={this.click(this.props.event_id)}
        >
          <FavoriteIcon />
        </IconButton>
      );
    } else {
      const found = this.state.favorites.find(favorites => {
        return favorites.event_id === this.props.event_id;
      });
      console.log(found);

      //check if had favorite
      if (found) {
        return (
          <IconButton
            aria-label="add to favorites"
            style={{ color: "#d50000" }}
          >
            <FavoriteIcon />
          </IconButton>
        );
      } else {
        return (
          <IconButton
            aria-label="add to favorites"
            onClick={this.click(this.props.event_id)}
          >
            <FavoriteIcon />
          </IconButton>
        );
      }
    }
  }
}
