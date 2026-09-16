import { useState } from "react";

function NotificationCard() {
  const [email, setEmail] = useState("");
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsEnrolling(true);

    setTimeout(() => {
      setIsEnrolling(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section id="notify-card" className="mb-6 mt-8 px-gutter">
      <div className="relative overflow-hidden rounded-3xl bg-surface-container-highest p-6 shadow-md">
        {/* Decorative SVG */}
        <svg
          className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 text-primary/10"
          fill="currentColor"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path d="M50 0 C70 30 100 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
        </svg>

        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest px-3 py-1 font-label-sm text-label-sm font-bold text-primary shadow-sm">
            <span className="material-symbols-outlined text-[16px]">
              hourglass_top
            </span>

            <span>Website Announcement</span>
          </div>

          <h3 className="mb-2 font-headline-md text-headline-md text-on-surface">
            Our New Website Is Coming Soon
          </h3>

          <p className="mb-5 font-body-md text-body-md text-on-surface-variant">
            We are currently working on our new website, which will be live in
            the coming days. Register your contact details below to be notified
            first.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotificationCard;