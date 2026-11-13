import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mx-auto mt-8 mb-16 w-[calc(100%_-_2rem)] max-w-[1180px]">
        <section className="grid grid-cols-[1.3fr_0.9fr] items-center gap-7 rounded-[32px] border border-[#f1e5d9] bg-[radial-gradient(circle_at_top_right,rgba(255,209,153,0.46),transparent_26%),linear-gradient(135deg,#fffaf5,#fff)] p-[clamp(24px,4vw,48px)] shadow-[0_18px_48px_rgba(120,72,23,0.08)]">
          <div className="min-w-0">
            <p className="mb-3 text-[0.76rem] font-extrabold tracking-[0.18em] text-[#d96a2d] uppercase">
              About us
            </p>
            <h1 className="m-0 text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] tracking-[-0.05em] text-[#17212b]">
              We turn hungry moments into memorable food discoveries.
            </h1>
            <p className="mt-[18px] max-w-[620px] text-[1.05rem] leading-[1.7] text-[#536276]">
              Foodology is built for people who love exploring neighborhood
              favorites, hidden cafés, and quick comfort bites — all in one
              place.
            </p>
            <div className="mt-[22px] flex flex-wrap gap-2.5">
              <span className="inline-flex items-center rounded-full border border-[#fde3c6] bg-white/80 px-[14px] py-[9px] text-[0.86rem] font-bold text-[#8a4c1d]">
                Curated picks
              </span>
              <span className="inline-flex items-center rounded-full border border-[#fde3c6] bg-white/80 px-[14px] py-[9px] text-[0.86rem] font-bold text-[#8a4c1d]">
                Fast search
              </span>
              <span className="inline-flex items-center rounded-full border border-[#fde3c6] bg-white/80 px-[14px] py-[9px] text-[0.86rem] font-bold text-[#8a4c1d]">
                Local favorites
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <UserClass name={"Karan Patel (Class based component)"} />
          </div>
        </section>

        <section className="mt-7 grid grid-cols-3 gap-5">
          <div className="rounded-3xl border border-[#edf0f3] bg-white px-[22px] py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <h3 className="m-0 mb-2.5 text-[1.2rem] tracking-[-0.03em] text-[#1a2432]">
              Our mission
            </h3>
            <p className="m-0 text-base leading-[1.7] text-[#596a7f]">
              Help food lovers discover amazing restaurants with clean UX and
              thoughtful details.
            </p>
          </div>
          <div className="rounded-3xl border border-[#edf0f3] bg-white px-[22px] py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <h3 className="m-0 mb-2.5 text-[1.2rem] tracking-[-0.03em] text-[#1a2432]">
              Why it exists
            </h3>
            <p className="m-0 text-base leading-[1.7] text-[#596a7f]">
              From busy workdays to weekend cravings, the app makes every dining
              decision easier and more delightful.
            </p>
          </div>
          <div className="rounded-3xl border border-[#edf0f3] bg-white px-[22px] py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <h3 className="m-0 mb-2.5 text-[1.2rem] tracking-[-0.03em] text-[#1a2432]">
              Built with love
            </h3>
            <p className="m-0 text-base leading-[1.7] text-[#596a7f]">
              Thoughtful interfaces, smooth navigation, and quality restaurant
              data designed around real cravings.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
