import React, { Component } from "react";
class Tugas11 extends Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      dateTime: this.today.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }),
      count: 10,
      visible: true,
    };
  }
  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ count: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  componentDidUpdate() {
    if (this.state.visible === true) {
      if (this.state.count <= 0) {
        this.reset();
        this.componentWillUnmount();
      }
    }
  }
  reset() {
    this.setState({
      visible: false,
    });
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <>
        {this.state.visible && (
          <h1>
            sekarang Jam : {this.state.dateTime}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hitung Mundur :
            {this.state.count}
          </h1>
        )}
      </>
    );
  }
}
export default Tugas11;
