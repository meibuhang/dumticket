import React, { Component } from "react";

import {
  Card,
  TextField,
  CardContent,
  Button,
  Container
} from "@material-ui/core/";

import axios from "axios";
export default class Orderticket extends Component {
  // for modal
  constructor(props) {
    super(props);
    this.state = {
      order_qty: "", //sesuai permintaan state
      total_price: "",
      error: {},
      show: false,
      input: "",
      reversedText: ""
    };
  }
  showModal = event_id => () => {
    this.setState({ show: true });
    const idEvent = event_id;
    console.log(idEvent, "ini dia");
    //console.log(price, "ini dia harga");
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  closeModal = () => {
    this.setState({ show: false });
  };

  // end for modal

  /* handleChange() function to set a new state for input */
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      input: value,
      tot: value * this.props.price
    });
  };

  /* handleReverse() function to reverse the input and set that as new state for reversedText */
  handleReverse = event => {
    event.preventDefault();
    const text = this.state.input;
    this.setState({
      reversedText: text
        .split("")
        .reverse()
        .join("")
    });
  };
  // state = { show: false, input: "", reversedText: "" };
  // end for handle change text
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("auths");
    // alert("Favorite added !");
    const event_id = this.props.event_id;
    const price = this.props.price;
    const tot = this.state.input * price;
    axios({
      method: "post",
      url: "http://localhost:4500/api/dumbticket/order/addorder",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        event_id: event_id,
        order_qty: this.state.input,
        total_price: tot
      }
    })
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
        window.location = "/pages/Payment"; //direct halaman
      })
      .catch(err => {
        this.setState({ data: err, isLoading: false });
      });
  };

  // end for submit
  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <Container maxWidth="sm">
            <Card>
              <CardContent>
                <div>
                  <h2 style={{ textAlign: "center" }}>Order Ticket</h2>
                </div>

                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={this.handleReverse}
                >
                  <TextField
                    required
                    id="order"
                    name="order_qty"
                    label="Quantity"
                    type="number"
                    value={this.state.input}
                    onChange={this.handleChange}
                    fullWidth
                    required
                  />
                  <label
                    name="total_price"
                    style={{
                      color: "#d50000",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  >
                    Total : Rp {this.state.tot}
                  </label>

                  <div style={{ display: "flex", paddingTop: "20px" }}>
                    <Button
                      type="submit"
                      name="order"
                      variant="outlined"
                      size="large"
                      color="primary"
                      onClick={this.handleSubmit}
                      style={{
                        marginTop: "30px",
                        marginBottom: "20px",
                        marginRight: "30px",
                        backgroundColor: "#1b5e20",
                        color: "#fff",
                        border: "none"
                      }}
                    >
                      Order
                    </Button>
                    <Button
                      type="submit"
                      name="order"
                      variant="outlined"
                      size="large"
                      color="primary"
                      style={{
                        marginTop: "30px",
                        marginBottom: "20px",
                        backgroundColor: "#d50000",
                        color: "#fff",
                        border: "none"
                      }}
                      onClick={this.closeModal}
                    >
                      Close
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Container>
        </Modal>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#d50000",
            color: "#fff"
          }}
          onClick={this.showModal(this.props.event_id)}
        >
          BOOK NOW
        </Button>
      </main>
    );
  }
}
const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button onClick={handleClose}>Close</button> */}
      </section>
    </div>
  );
};
