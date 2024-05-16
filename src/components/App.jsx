import { Component } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackoptions/FeedbackOptions";
import "./App.css";
import Section from "./section/Section";
import Notification from "./notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  constructor() {
    super();
    this.countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleNeutralClick = this.handleNeutralClick.bind(this);
    this.handleBadClick = this.handleBadClick.bind(this);
  }
  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0 || this.state.good === 0) return 0;
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
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
      <div className="feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={{
              handleGood: this.handleGoodClick,
              handleNeutral: this.handleNeutralClick,
              handleBad: this.handleBadClick,
            }}
          />
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There's no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
