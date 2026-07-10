import { useState } from "react";
import PageLayout from "../components/PageLayout";
import FormField from "../components/FormField";
import webIcon from "../assets/images/contact-web-icon.png";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_STATE: ContactFormState = { name: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleChange(
    field: keyof ContactFormState
  ): (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xeebbakz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("submitted");
      setForm(INITIAL_STATE);
    }
  }

  return (
    <PageLayout>
      <section className="fade-in px-4 py-12 md:px-28 md:py-18">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <img
            src={webIcon}
            alt=""
            className="mx-auto h-auto w-full max-w-70 md:max-w-112.5 -rotate-2"
          />

          <div>
            <h1 className="font-display text-[48px] md:text-[64px] lg:text-[96px] leading-none text-black">
              Connect
            </h1>
            <p className="mt-4 max-w-153.75 font-body text-[18px] md:text-[22px] leading-tight text-black lg:text-[32px]">
              I'd love to hear from you. Whether you want to hear about my
              availability, have questions, or just want to chat, don't hesitate
              to reach out!
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-4 max-w-300 space-y-8 md:mx-20"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FormField
              id="contact-name"
              label="Name:"
              value={form.name}
              onChange={handleChange("name")}
              required
            />
            <FormField
              id="contact-email"
              label="Email:"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              required
            />
          </div>

          <FormField
            id="contact-message"
            label="Message:"
            multiline
            value={form.message}
            onChange={handleChange("message")}
            required
          />

          <button
            type="submit"
            className="flex h-17 w-full md:w-44 items-center justify-center rounded-lg border border-black bg-blue font-display text-[32px] text-white"
          >
            Submit
          </button>

          {status === "submitted" && (
            <p role="status" className="font-body text-[16px] text-blue">
              Thanks for reaching out — I'll get back to you soon!
            </p>
          )}
        </form>
      </section>
    </PageLayout>
  );
}
