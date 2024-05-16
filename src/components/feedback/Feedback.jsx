import React, { Component } from "react";
import "./Feedback.css";
import { Title, Container, StyledButton } from "./Feedback.style";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  constructor() {
    super();
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleNeutralClick = this.handleNeutralClick.bind(this);
    this.handleBadClick = this.handleBadClick.bind(this);
  }
  coutnTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    if (this.coutnTotalFeedback() === 0 || this.state.good === 0) return 0;
    return ((this.state.good / this.coutnTotalFeedback()) * 100).toFixed(2);
  }
  handleGoodClick(evt) {
    this.setState({ good: this.state.good + 1 });
  }
  handleNeutralClick(evt) {
    this.setState({ neutral: this.state.neutral + 1 });
  }
  handleBadClick(evt) {
    this.setState({ bad: this.state.bad + 1 });
  }
  render() {
    return (
      <div className="container">
        <Title>Please leave feedback</Title>
        <Container>
          <StyledButton onClick={this.handleGoodClick}>Good</StyledButton>
          <StyledButton onClick={this.handleNeutralClick}>Neutral</StyledButton>
          <StyledButton onClick={this.handleBadClick}>Bad</StyledButton>
        </Container>
        <Container style={{ flexDirection: "column" }}>
          <Title>Statistics</Title>
          <Container>
            <Title>Good: {this.state.good}</Title>
            <Title>Neutral: {this.state.neutral}</Title>
            <Title>Bad: {this.state.bad}</Title>
          </Container>
          <Container>
            <Title>Total: {this.coutnTotalFeedback()}</Title>
            <Title>
              Positive FeedBack: {this.countPositiveFeedbackPercentage()}%
            </Title>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Feedback;
