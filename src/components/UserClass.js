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
      <div className="flex w-full max-w-[380px] flex-col items-center gap-[18px] rounded-[28px] border border-[#f1e5d9] bg-white/65 px-[18px] py-6 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
        <img
          className="size-[150px] rounded-[26px] border-[5px] border-white/95 object-cover shadow-[0_12px_24px_rgba(15,23,42,0.12)]"
          src={avatar_url}
          alt={`${name} profile`}
        />
        <div className="w-full text-center">
          <p className="mb-1.5 text-[0.74rem] font-extrabold tracking-[0.12em] text-[#d96a2d] uppercase">
            Developer profile
          </p>
          <h2 className="m-0 text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.04em] text-[#18212b]">
            {name}
          </h2>
          <h3 className="mt-2 mb-0 text-[0.94rem] font-semibold text-slate-500">
            {location}
          </h3>
          <p className="mt-3 mb-0 text-[0.95rem] leading-[1.7] text-[#536276]">
            {bio}
          </p>
          <div className="mt-[14px] flex flex-wrap items-center justify-center gap-2.5 text-[0.9rem] font-semibold text-[#364152]">
            <span>@{login}</span>
            <a
              className="rounded-full bg-[#fff3e8] px-3 py-[7px] text-[#c95b22] transition duration-200 hover:-translate-y-px hover:bg-[#ffe7d1]"
              href={html_url}
              target="_blank"
              rel="noreferrer">
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
