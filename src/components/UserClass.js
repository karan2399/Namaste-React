import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Karan Patel",
        location: "India",
        login: "karan2399",
        bio: "Building modern web experiences.",
        avatar_url: "https://avatars.githubusercontent.com/u/24054449?v=4",
        html_url: "https://github.com/karan2399",
      },
    };
  }

  render() {
    const { name, location, login, avatar_url, bio, html_url } =
      this.state.userInfo;

    return (
      <div className="about-user-card">
        <img
          className="about-user-image"
          src={avatar_url}
          alt={`${name} profile`}
        />
        <div className="about-user-details">
          <p className="about-user-label">Developer profile</p>
          <h2>{name}</h2>
          <h3>{location}</h3>
          <p className="about-user-bio">{bio}</p>
          <div className="about-user-links">
            <span>@{login}</span>
            <a href={html_url} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/karan2399");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default UserClass;
