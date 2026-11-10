import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    console.log("UserClass: Constructor");

    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    console.log("UserClass: render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>{name}</h2> {this.score}
        <h3>Ahmedabad, India</h3>
        <h4>Contact: @karan__234</h4>
        <h6>Count: {count}</h6>
        <button
          onClick={() => {
            // Never Update State Variables Directly
            //When you use setState and pass state variables,
            // it updates only those variables; it doesn't affect other state variables.
            this.setState({ count: this.state.count + 1 });
          }}>
          Increase Count 1
        </button>
        <h6>Count 2: {this.state.count2}</h6>
      </div>
    );
  }
}

export default UserClass;
