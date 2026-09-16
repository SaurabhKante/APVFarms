function HeroSection() {
  const scrollToNotification = () => {
    document.getElementById("notify-card")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-inverse-surface text-inverse-on-surface">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAe7WWpK4syrnWgDQQz4W1AKcXcJSqMeNTS0AvkutuBMXxmdY4wBUAaji05EmSuHYFsKGhNo51tWlBc-t21jIFAEpmO_R8Q1lvC0Wkx7AIQ9Y8t2LMk9J-hfgMm19yKfMoVCH6d_5AQH2MunSeJDkUoOj8gra0qnEzUyQCVSW__pUZOeBM_PJz7SAbrLJp44XCKIfFuwxiltTymYydLvVIMLk1pdRLQwm1-b8foC1R76RJvw9kV3gNLg8Y8wjeAv5f9JY"
        alt="APV Farms lush green fields"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/85 via-inverse-surface/60 to-surface" />

      <div className="relative z-10 flex flex-col items-center px-gutter pb-10 pt-8 text-center">
        {/* Launch Badge */}
        <div className="mb-6 inline-flex items-center gap-space-xs rounded-full bg-surface-container-lowest/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>

          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
            Launching Soon • Phase 1
          </span>
        </div>

        {/* Logo */}
        <div className="relative mb-5 rounded-3xl bg-surface-container-lowest/95 p-1 shadow-xl backdrop-blur-md">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_lGSl5n-P1yO9WxcD6PAF40qdeOpGVs3a6Nl2kNV4AaAG-q3Y6M_GxWsdPEo-FlSyahePz0pltWsIkZnApzZyihG_UfQVs3E1PCZgZTqPIXecQbE3uZRL1k3z8G8HAyrA5pfVHI1cPehyVVO5Ya3q_YNW1L5G8UGP03cIVDTRLRpotF7kq5bX0dgfj5w31NJq1dvUjXel4dSdi9NHVw4P4bXieSouUTgg3t9n6fL09flWZDTLAan_avVLI6Vk11mHc"
            alt="APV Farms Logo Emblem"
            className="h-32 w-32 rounded-2xl object-contain p-2"
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-inverse-on-surface drop-shadow-md">
          Welcome to APV Farms
        </h1>


        {/* Actions */}
        <div className="flex w-full flex-col gap-space-sm">
          <button
            type="button"
            onClick={scrollToNotification}
            className="flex h-12 w-full items-center justify-center gap-space-sm rounded-xl bg-primary font-headline-sm text-headline-sm text-on-primary shadow-md transition-all hover:bg-primary-container active:scale-[0.98] font-semibold"
          >
            <span className="material-symbols-outlined text-[20px]">
              mark_email_read
            </span>

            <span>Connect With Us</span>
          </button>

          <a
            href="#our-vision"
            className="flex h-12 w-full items-center justify-center gap-space-sm rounded-xl bg-surface-container-lowest font-headline-sm text-headline-sm text-primary shadow-sm transition-all hover:bg-surface-container-low active:scale-[0.98] font-semibold"
          >
            <span className="material-symbols-outlined text-[20px] ">
              explore
            </span>

            <span>Explore Our Vision</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;