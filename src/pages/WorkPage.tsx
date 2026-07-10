import PageLayout from "../components/PageLayout";
import lustriaMockup from "../assets/images/home-project-macbook.png";
import macbookTriad from "../assets/images/macbook-triad.png";
import scrollTopIcon from "../assets/images/work-scroll-top-icon.png";

import productPageOld from "../assets/images/work-product-page-old.png";
import homePageOld from "../assets/images/work-home-page-old.png";
import wireframesLow from "../assets/images/work-wireframe-low.png";
import moodboard from "../assets/images/work-moodboard.png";
import styleGuide from "../assets/images/work-style-guide.png";
import updatedHomeFull from "../assets/images/work-updated-home-full.png";
import updatedArrivalsFull from "../assets/images/work-updated-arrivals-full.png";
import updatedProductFull from "../assets/images/work-updated-product-full.png";
import revision1 from "../assets/images/work-revision-1.png";
import revision2 from "../assets/images/work-revision-2.png";
import revision3 from "../assets/images/work-revision-3.png";
import revision4 from "../assets/images/work-revision-4.png";
import revision5 from "../assets/images/work-revision-5.png";

// --- Content -------------------------------------------------------------

const QUICK_FACTS = [
  {
    label: "My Role",
    items: [
      "UX + UI Design",
      "Research",
      "Visual Design",
      "Prototyping + Testing",
    ],
  },
  { label: "Tools", items: ["Figma"] },
  { label: "Timeframe", items: ["4 Weeks", "February 2026"] },
];

const PROCESS_STEPS = [
  { number: 1, label: "Research", color: "var(--color-swatch-pink)" },
  { number: 2, label: "Ideation", color: "var(--color-swatch-peach)" },
  { number: 3, label: "Prototyping", color: "var(--color-swatch-mint)" },
  { number: 4, label: "Final Design", color: "var(--color-swatch-periwinkle)" },
  { number: 5, label: "Reflection", color: "var(--color-swatch-lavender)" },
];

const RESEARCH_FINDINGS = [
  {
    quote:
      "Usually I find out if I missed a sale because a friend tells me about the purchase they made, or I see a notification about the sale on an email I checked too late.",
    name: "Julia, 24",
  },
  {
    quote:
      "On Facebook, scammers are very good about that. The link comes up and you're like, “This looks interesting!” but it turns out to be this whole fake thing.",
    name: "Pat, 65",
  },
  {
    quote:
      "I try to go for brands I already know and trust. I like looking at trendy things, but what I really want are products that use high quality ingredients and have good reviews without a ridiculous price tag.",
    name: "Hannah, 32",
  },
];

const FINDING_SUMMARIES = [
  "Users feel overwhelmed by the sheer amount of beauty products available on the internet.",
  "Users are wary to try new things because of scams and rising prices within the industry.",
  "Users miss out on “good deals” because they forget, or are not properly notified of them.",
];

const REVISIONS = [
  {
    number: 1,
    title: "Alert Banner for All Time Low",
    bullets: [
      "Created a small banner strip in an eye-catching green to alert the user if a product is at the lowest price it has ever been",
      "Planned a similar function for near-low pricing and recent price drops",
      "Moved the percent-off marker to the top corner to make space for the banner and give the product information more breathing room",
    ],
  },
  {
    number: 2,
    title: "Product Detail Card Enhancement",
    bullets: [
      "Moved the product color swatches and carousel indicators inside the product card instead of floating on the background",
      "Made the carousel indicators thinner for a cleaner look",
      "Added a product information card with details that users specifically asked to see on the detail page",
    ],
  },
  {
    number: 3,
    title: "Prioritizing Historical Low Contrast",
    bullets: [
      "Darkened the “Historical Low” text so it stands out more, especially against the white card background",
      "Grouped “Best Current Price” and “Historical Low” within the title and price card instead of floating separately",
      "Changed the ratings and wishlist icons to purple to bring in more of the palette",
    ],
  },
  {
    number: 4,
    title: "Popular Categories Adjustment",
    bullets: [
      "Made the category icons darker and smaller, with more padding so the row feels less cramped and reads with higher contrast",
      "Added pastel background colors to bring in more of the palette",
    ],
  },
  {
    number: 5,
    title: "More Intuitive Browsing",
    bullets: [
      "Added common search-category buttons under the “Show filters” button for more intuitive browsing",
      "Enlarged the “New Sale” heading and added padding between it, the filter/sort buttons, and the product cards",
    ],
  },
];

// --- Small layout helpers --------------------------------------------------

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 font-display text-[20px] md:text-[28px] lg:text-[32px]  text-blue ">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="-mt-2 max-w-237.5 font-display text-[24px] md:text-[36px] lg:text-[48px] leading-none text-black">
      {children}
    </h2>
  );
}

function Section({
  eyebrow,
  heading,
  children,
  stacked = false,
  className = "",
  imageRight,
}: {
  eyebrow: string;
  heading?: React.ReactNode;
  children: React.ReactNode;
  stacked?: boolean;
  className?: string;
  imageRight?: React.ReactNode;
}) {
  return (
    <section className={`py-8 md:py-16 px-4 md:px-28 ${className}`}>
      {stacked ? (
        <div>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          <div className="mt-4 space-y-5 font-body text-[16px] md:text[18px] leading-[1.3] text-black lg:text-[20px]">
            {children}
          </div>
        </div>
      ) : imageRight ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            {heading && <SectionHeading>{heading}</SectionHeading>}
            <div className="mt-8 space-y-5 font-body text-[16px] md:text-[18px] leading-[1.3] text-black lg:text-[20px]">
              {children}
            </div>
          </div>
          <div className="flex items-center justify-center">{imageRight}</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="self-start">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            {heading && <SectionHeading>{heading}</SectionHeading>}
          </div>
          <div className="self-start space-y-5 font-body text-[16px] md:text-[18px] leading-[1.3] text-black lg:text-[20px]">
            {children}
          </div>
        </div>
      )}
    </section>
  );
}

// --- Page ------------------------------------------------------------------

export default function WorkPage() {
  return (
    <PageLayout>
      <div className="relative px-4 md:px-8 py-12 md:py-40 pb-10">
        {/* Title */}
        <div className="fade-in grid grid-cols-1 items-center gap-8 md:gap-16 md:grid-cols-2">
          <img
            src={lustriaMockup}
            alt="Lustria platform shown on a laptop screen"
            className="w-full rounded-[20px] object-cover"
          />
          <div>
            <h1 className="font-display text-[48px] md:text-[64px] lg:text-[96px] leading-none text-black">
              Lustria
            </h1>
            <p className="font-body text-[18px] md:text-[20px] lg:text-[24px]">
              Score the best savings in beauty
            </p>

            <dl className="mt-6 md:mt-10 grid grid-cols-3 gap-3 md:gap-6">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-[16px] md:text-[24px] lg:text-[32px] text-black">
                    {fact.label}
                  </dt>
                  <dd className="pl-0.5 mt-2 space-y-1 font-body text-[12px] md:text-[16px] lg:text-[20px] text-black">
                    {fact.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <img
          src={macbookTriad}
          alt=""
          className="fade-in mt-12 md:mt-26 w-full rounded-[20px] object-cover"
        />

        {/* Overview */}
        <Section
          eyebrow="What is Lustria?"
          heading="Overview"
          stacked
          className="fade-in pt-12 md:pt-28"
        >
          <p>
            Everyone should have access to high-quality products within their
            budget. By curating a platform that consolidates information on the
            latest promotions, discounts, and price drops across various beauty
            brands, I aim to empower users to make informed choices that align
            with their budgets. Through this website design, I aspire to create
            a space where the pursuit of beauty is not seen as a luxury, but
            something that can be achieved by everyone. I wish to foster a
            community that shares the joy of discovering affordable yet
            trustworthy beauty essentials.
          </p>
        </Section>

        <hr className="fade-in border-t border-black mx-4 md:mx-28" />

        {/* The Problem */}
        <Section
          eyebrow="The Problem"
          heading="Rising Costs of an Industry Dependent on Trends and 20 Step Routines"
          className="fade-in"
          stacked
        >
          <p>
            I wanted to address the growing challenges beauty enthusiasts face
            in a market where skincare and makeup prices continue to escalate.
            As someone who deeply values the transformative impact of beauty
            routines on self-esteem and well-being, I have become increasingly
            aware of the financial barriers that often accompany these pursuits.
            The rising costs of quality skincare and makeup products can make
            them seem elusive for many, prompting the need for a platform that
            simplifies the shopping experience and helps users discover the best
            deals, discounts, and coupons available.
          </p>
          <p>
            To my knowledge there is not an existing platform like this
            specifically for beauty. I was initially inspired by the website
            IsThereAnyDeal?, which acts the same way but for video games. It is
            extremely comprehensive and lets users find potential deals all in
            one space, but could be improved aesthetically with a less clunky UI
            and fewer unnecessary elements.
          </p>
        </Section>

        {/* My Process */}
        <Section
          eyebrow="My Process"
          heading="How did I construct Lustria?"
          className="fade-in"
          stacked
        >
          <ol className="fade-in mt-8 md:mt-28 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-x-1 md:gap-x-4">
            {PROCESS_STEPS.map((step, i) => (
              <>
                <li key={step.number} className="col-span-1 text-center">
                  <div
                    className="mx-auto flex aspect-square w-full items-center justify-center rounded-sm border-2 border-black font-display text-[20px] md:text-[40px]"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>
                  <p className="mt-2 font-body text-[10px] md:text-[18px] lg:text-[20px]">
                    {step.label}
                  </p>
                </li>
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    key={`arrow-${i}`}
                    className="col-span-1 text-center text-[14px] md:text-[24px] pb-4 md:pb-6"
                  >
                    →
                  </span>
                )}
              </>
            ))}
          </ol>
        </Section>

        {/* Research */}
        <Section
          eyebrow="Research"
          heading="Beauty fans felt they had an abundance of options online, but a shortage of “good“ ones"
          className="fade-in"
          imageRight={
            <div className="fade-in w-full flex flex-col gap-4 md:gap-6">
              {RESEARCH_FINDINGS.map((finding, i) => {
                const alignments = ["self-start", "self-end", "self-start"];
                return (
                  <figure
                    key={finding.name}
                    className={`w-full md:w-58.75 aspect-square rounded-sm border-2 border-black bg-swatch-periwinkle p-4 md:p-5 flex flex-col justify-between ${alignments[i]}`}
                  >
                    <blockquote className="font-body text-[14px] md:text-[16px] leading-[1.3]">
                      "{finding.quote}"
                    </blockquote>
                    <figcaption className="font-body text-[14px] md:text-[16px] text-right">
                      {finding.name}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          }
        >
          <p>
            I interviewed five individuals between the ages of 21 to 65 who
            frequently use beauty products to gain insight into their online
            shopping habits and how they go about selecting a certain product,
            as well as their motivations and challenges when doing so. While
            most participants mentioned the main motivating criteria for product
            selection being products that are high quality yet affordable, the
            biggest complaint with the online shopping process was the lack of
            substantial sales at major retailers, as well as the decision
            fatigue that comes with the amount of products available online.
            Some even reported being sold fake products when trying to look for
            cheaper prices on sites like Facebook or Instagram!
          </p>
        </Section>

        {/* Findings */}
        <Section
          eyebrow="Findings"
          heading="Centralized platform for all users' needs could reduce frustration and “FOMO“ with online beauty shopping"
          className="fade-in"
          stacked
        >
          <ol className="fade-in mt-8 md:mt-16 grid grid-cols-3 items-end gap-0 max-w-full md:max-w-200 mx-auto">
            {FINDING_SUMMARIES.map((summary, i) => {
              const colors = [
                "var(--color-swatch-pink)",
                "var(--color-swatch-peach)",
                "var(--color-swatch-mint)",
              ];
              const offsets = ["mb-0", "mb-4 md:mb-8", "mb-8 md:mb-16"];
              return (
                <li
                  key={summary}
                  className={`w-full aspect-square rounded-sm border-2 border-black p-3 md:p-5 flex flex-col justify-between ${offsets[i]}`}
                  style={{ backgroundColor: colors[i] }}
                >
                  <p className="font-body text-[12px] md:text-[16px] leading-[1.3]">
                    {summary}
                  </p>
                  <span className="font-display text-[32px] md:text-[48px]">
                    {i + 1}
                  </span>
                </li>
              );
            })}
          </ol>
        </Section>

        {/* Ideation */}
        <Section
          eyebrow="Ideation"
          heading="Prioritizing intuitive browsing and synergy over “combining“"
          className="fade-in"
          imageRight={
            <div className="space-y-4 md:pt-34">
              <p className="font-body text-[16px] md:text-[18px] leading-[1.3]">
                Originally being a project for a university class, I knew I
                wanted to make something that would attempt to solve a problem
                at least one individual would have, and who do I know better
                than myself! I knew that it would be helpful to have a platform
                that could track when sales occur instead of manually checking
                each retailer's website, or having it go unchecked and miss a
                sale on a particularly pricey item. I was also intrigued by the
                idea of redesigning things that already exist, so I thought, why
                not combine two things I'm extremely familiar with into one
                super-idea — leading me to the goal of designing a web platform
                that combined both Sephora and IsThereAnyDeal? together.
              </p>
              <p className="font-body text-[16px] md:text-[18px] leading-[1.3]">
                When revisiting this idea post-grad, I went further than
                combining Sephora and IsThereAnyDeal? at their "base levels,"
                and looked into the best features of popular gaming and beauty
                platforms for an intersection that would contain the best ideas
                of both. Reimagining the platform this way, I realized the
                importance of not only displaying specific products, but
                alerting the user to site-wide sales and rare discounts, while
                offering a tailored discount-browsing experience unique to each
                user.
              </p>
            </div>
          }
        >
          <div className="grid grid-cols-2 gap-3">
            <img
              src={homePageOld}
              alt="old home page"
              className="w-full object-cover"
            />
            <img
              src={productPageOld}
              alt="old product page"
              className="w-full object-cover"
            />
          </div>
          <p>WOOF! This was the first iteration for my college class...</p>
        </Section>

        {/* Low-Mid Fidelity Wireframes */}
        <Section
          eyebrow="Low-Mid Fidelity Wireframes"
          heading="Re-imagining the savvy shopper's experience"
          className="fade-in"
          stacked
        >
          <p>
            I focused most on learnability and satisfaction as metrics when
            envisioning my design. Since it is targeted towards makeup and
            skincare fanatics, I heavily intertwined Sephora's and Ulta's
            respective designs with my own as it would allow users to pick up on
            using my design faster and be less intimidating when given lots of
            different prices and other comparison tools. For satisfaction, I
            wanted users to be comfortable with the amount of information
            provided and for the product to be designed in a way that the user
            could easily digest and see very quickly if it was a good deal or
            not.
          </p>
          <img
            src={wireframesLow}
            alt="Wireframes"
            className="fade-in w-full object-cover mt-8 md:mt-12"
          />
        </Section>

        {/* Moodboard + Style Guide */}
        <Section
          eyebrow="Moodboard + Style Guide"
          heading="Polished, yet warm and inviting"
          className="fade-in"
          imageRight={
            <img src={moodboard} alt="" className="w-full object-cover" />
          }
        >
          <p>
            Originally I sought to make a more luxurious and exclusive-feeling
            design, but I quickly realized this was the opposite of the effect I
            wanted to produce! I needed to keep it clean and elegant, but bring
            warmth and life into the design to keep the feeling inclusive and
            inviting. I loved the purple motifs from the original, so I leaned
            into that, but added depth with warm pinks and beiges instead of
            stark white, which can read very "cold." I wanted to evoke a feeling
            of beauty without being pretentious — taking inspiration from the
            setting sun.
          </p>
        </Section>

        <div className="fade-in mx-4 md:mx-28 mb-6">
          <img src={styleGuide} alt="" className="w-full object-cover" />
        </div>

        {/* High-Fidelity Wireframes */}
        <Section
          eyebrow="High-Fidelity Wireframes"
          heading="Designing for an inclusive beauty-minded space"
          className="fade-in"
          stacked
        >
          <p>
            I designed a platform that blended galaxy and spacey elements with
            the modern, clean aesthetics of popular beauty retailers. Fun pops
            of color paired with a warm cream background comfort the user, while
            an approachable, minimal design ensures a modern appeal. The goal
            was to create an inviting space that encourages users to explore
            discounts and new favorite products while fostering a sense of
            control over a constantly evolving space — making it easy to find
            things without having to constantly check the site, and one less
            thing to stress about day to day.
          </p>
          <p>
            Overall, I wanted it to feel less visually and informationally
            overwhelming. If I'd simply replaced a common discount site's design
            with makeup, it would still be overwhelming to anyone, beauty lover
            or not. By combining the visual language of major beauty retailers
            with the functionality of discount sites, I believe I created a
            meaningful improvement and a unique design within the category.
          </p>
          <div className="fade-in grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 md:mt-12">
            <img
              src={updatedHomeFull}
              alt="Updated home"
              className="w-full object-cover border border-black"
            />
            <img
              src={updatedProductFull}
              alt="Updated product"
              className="w-full object-cover border border-black"
            />
          </div>
          <img
            src={updatedArrivalsFull}
            alt="Updated arrivals"
            className="fade-in w-full md:w-1/2 object-cover border border-black"
          />
        </Section>

        {/* Usability Testing */}
        <Section
          eyebrow="Usability Testing + Revisions"
          heading="Iterating Based on User Feedback"
          className="fade-in"
          stacked
        >
          <p>
            I tested my high-fidelity prototype with 5 users between the ages of
            21 to 65 who had experience shopping for beauty products online. I
            gave them the following tasks:
          </p>
          <ul className="list-disc space-y-2 pl-8">
            <li>
              Click on the <em>Olehenriksen</em> lip gloss on the home page to
              get to the product page and determine the historical low of the
              product
            </li>
            <li>
              Navigate to the "New Sale" page to see the listings of all the
              products
            </li>
          </ul>
          <p>
            All five users understood that Lustria was a platform to shop for
            beauty products on sale, and expressed interest in wanting it as an
            actual website or app.
          </p>
          <p>
            Two users took longer to find the historical low of the lipgloss
            because the button color was identical to the best current price.
            Two other users wished they could see whether a product was at its
            lowest price directly from the card itself, without opening the
            detail page.
          </p>

          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {REVISIONS.map((revision, i) => (
              <div
                key={revision.number}
                className="fade-in flex flex-col mb-6 md:mb-10"
              >
                <img
                  src={
                    [revision1, revision2, revision3, revision4, revision5][i]
                  }
                  alt={revision.title}
                  className="w-full h-75 md:h-125 object-contain border border-black bg-[#B3B3B3]"
                />
                <h3 className="mt-4 font-body text-[16px] md:text-[18px] font-bold">
                  {revision.number}.&nbsp; {revision.title}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 font-body text-[14px] md:text-[16px]">
                  {revision.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Conclusion */}
        <Section
          eyebrow="Conclusion"
          heading="Expanding Lustria"
          className="fade-in -mt-10 md:-mt-18"
          stacked
        >
          <p>
            Lustria demonstrated to me the ability to level the playing field so
            that anyone, no matter their age or experience shopping online, can
            find low prices in an increasingly evolving market. It was important
            to me to use similar elements from popular beauty retailers and
            discount sites to make the platform as easy to use as possible.
          </p>
          <p>
            With more time, I'd love to expand the platform by also creating a{" "}
            <strong>browser extension</strong> to more easily alert users of
            price drops. I believe this is critical to the long-term success of
            a platform like Lustria, since it could surface alerts directly on
            retailers like Ulta or Sephora instead of requiring a visit to the
            site itself.
          </p>
          <p>
            I also think bringing back the <strong>community</strong> feature
            that was present in my college class's version of Lustria could help
            differentiate it from other discount platforms and create more
            interpersonal connection between users — "a human's touch."
          </p>
          <p>
            Another idea I had would let users set their own{" "}
            <strong>skin profile</strong>, which would automatically filter out
            products unsafe for certain concerns like eczema and acne, as shown
            on my product detail page.
          </p>
          <p>
            All of these ideas could help Lustria stand out even more as a
            unique platform in the beauty space.
          </p>
        </Section>
      </div>

      {/* Scroll-to-top button */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-10 md:bottom-20 right-6 md:right-20 flex h-11.25 w-11.25 items-center justify-center rounded-full border border-black bg-white shadow-md"
      >
        <img
          src={scrollTopIcon}
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      </a>
    </PageLayout>
  );
}
