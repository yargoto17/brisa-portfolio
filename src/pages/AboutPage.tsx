import PageLayout from "../components/PageLayout";
import photoMe from "../assets/images/about-photo-me.png";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="fade-in grid grid-cols-1 items-center gap-12 px-8 py-20 md:grid-cols-2 md:px-28 md:py-32">
        <div className="relative mx-auto h-124.25 w-full max-w-112.25">
          <img
            src={photoMe}
            alt="Portrait of Brisa Goto"
            className="h-full w-full rounded-[25px] border border-blue object-cover shadow-[0_0_8.7px_0_var(--color-blue)]"
          />
        </div>

        <div>
          <h1 className="font-display text-[64px] leading-none text-black lg:text-[96px]">
            About Me
          </h1>

          <div className="mt-8 max-w-150.25 space-y-5 font-body text-[18px] leading-[1.3] text-black lg:text-[24px]">
            <p>
              My name is <span className="font-medium">Brisa Goto</span>. I'm a
              UI/UX designer and illustrator. I enjoy making bold, fun
              compositions that show off who I am!
            </p>
            <p>
              I graduated from Loyola Marymount University with a Bachelor of
              Science in Computer Science and a Minor in Interactive, Gaming,
              and Immersive media.
            </p>
            <p>
              I have always been interested in the intersection between
              technology and art, and have been drawing and messing around with
              a computer since before I learned what the "home row" on the
              keyboard was.
            </p>
            <p className="font-bold">I am based in Los Angeles.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
