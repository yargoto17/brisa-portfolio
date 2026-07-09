import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import webIcon from "../assets/images/home-web-icon.png";
import scrollArrow from "../assets/images/home-scroll-arrow.png";
import lustriaMockup from "../assets/images/home-project-macbook.png";

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="fade-in grid grid-cols-1 items-center gap-12 px-8 py-20 md:grid-cols-2 md:px-28 md:py-18">
        <img
          src={webIcon}
          alt=""
          className="mx-auto h-auto w-full max-w-112.5 -rotate-2"
        />

        <div>
          <h1 className="font-display text-[64px] leading-none text-black sm:text-[80px] lg:text-[96px]">
            Hi, I'm Brisa!
          </h1>
          <p className="mt-1.75 max-w-139.75 font-body text-[22px] leading-tight tracking-[0.03em] text-black lg:text-[32px]">
            I am a UI/UX designer and illustrator who enjoys creating engaging
            and intuitive experiences.
          </p>
        </div>
      </section>

      {/* Scroll cue */}
      <div className="fade-in flex justify-center py-14 -mt-40">
        <a href="#projects">
          <img
            src={scrollArrow}
            alt=""
            className="h-50 w-50 rotate-0 object-contain cursor-pointer"
          />
        </a>
      </div>

      {/* Featured project */}
      <section id="projects" className="fade-in px-8 pt-16 pb-56 md:px-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <img
            src={lustriaMockup}
            alt="Lustria platform shown on a laptop screen"
            className="w-full rounded-[20px] object-cover"
          />

          <div>
            <h2 className="font-display text-[48px] leading-none text-black lg:text-[64px]">
              Lustria
            </h2>
            <p className="mt-3 font-display text-[18px] tracking-[0.03em] text-purple lg:text-[24px]">
              UX/UI Design + Web Design + B2C
            </p>
            <p className="mt-4 max-w-114.25 font-body text-[18px] leading-[1.3] tracking-[0.02em] text-black lg:text-[20px]">
              A desktop platform to find the best deals and savings in all
              things beauty-related
            </p>
            <Link
              to="/work"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl border border-black bg-blue px-6 font-display text-[20px] text-white"
            >
              See Case Study&nbsp;→
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
