import React, { Component } from "react";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      showTime: true,
      buttonVisibile: true,
    };
  }
  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      time: this.state.time + 1,
    });
  }
  componentDidUpdate() {
    if (this.state.showTime === true) {
      if (this.state.time > 5) {
        this.setState({
          buttonVisibile: false,
        });
      }
    }
  }
  startTheTimer = () => {
    this.componentDidMount();
  };
  stopTheTimer = () => {
    this.componentWillUnmount();
  };
  deleteTheTimer = () => {
    this.setState({
      showTime: false,
    });
  };
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <>
        {this.state.showTime && (
          <>
            <h1 style={{ textAlign: "center" }}>{this.state.time}</h1>
          </>
        )}
        <button onClick={this.stopTheTimer}>Stop The Time</button>
        {this.state.buttonVisibile && (
          <button onClick={this.deleteTheTimer}>Delete The Time</button>
        )}
      </>
    );
  }
}
export default Timer;
