import linkedinIcon from "../assets/images/footer-linkedin-icon.png";
import emailIcon from "../assets/images/footer-email-icon.png";

const EMAIL = "bgoto25@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/brisagoto";

/**
 * Site footer: copyright, contact email, and social links.
 */
export default function Footer() {
  return (
    <footer className="flex h-26 w-full items-center justify-between border-t-2 border-black bg-cream-nav px-24">
      <p className="font-body text-[20px] leading-[1.4] text-black">
        © 2026 - Brisa Goto &nbsp;|&nbsp; Get In Touch{" "}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
      </p>

      <div className="flex items-center gap-4">
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
