import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("About: constructor");
  }
  render() {
    console.log("About: render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React</h2>

        {/* <User name={"Karan Patel (Functional Component)"} /> */}
        <UserClass name={"Karan Patel ( Class based Component )"} />
      </div>
    );
  }
}

export default About;
