import linkedinIcon from "../assets/images/footer-linkedin-icon.png";
import emailIcon from "../assets/images/footer-email-icon.png";

const EMAIL = "bgoto25@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/brisagoto";

/**
 * Site footer: copyright, contact email, and social links.
 */
export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:h-26 w-full md:items-center md:justify-between border-t-2 border-black bg-cream-nav px-6 py-4 md:px-24 md:py-0 gap-3 md:gap-0">
      <p className="font-body text-[16px] md:text-[20px] leading-[1.4] text-black text-center md:text-left">
        © 2026 - Brisa Goto &nbsp;|&nbsp; Get In Touch{" "}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
      </p>

      <div className="flex items-center justify-center md:justify-start gap-4">
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email Brisa Goto"
          className="flex h-10 w-10 items-center justify-center"
        >
          <img
            src={emailIcon}
            alt=""
            className="h-full w-full object-contain"
          />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Brisa Goto on LinkedIn"
          className="flex h-9.5 w-9.5 items-center justify-center"
        >
          <img
            src={linkedinIcon}
            alt=""
            className="h-full w-full object-contain"
          />
        </a>
      </div>
    </footer>
  );
}
