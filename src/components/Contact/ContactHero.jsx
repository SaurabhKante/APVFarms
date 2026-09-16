function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-high/40 pb-space-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYtG1zuSHn1Yxh6ZOhTGRHwCDvdi7_8niQRAlTwoufDQMvXDOwTZNRBh0JY_JR4vy8ApHOE98t52K8i0DalRifFLbU4D5nGcwdQGcQoC5Ubgoo-E-vCxcGOgjigJ_4XTAJJqjO8r-W5Ktfq0XJXjPPyqlUX8DppOphUvM95LEbweZroCher2KHAFz1-CqbQefsBHAAl-OoiO_ph-PrqZyjSk-Hz7-JwUgcbEhX7sEmB7DjVYs7AeVU0w')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-gutter pt-space-lg flex flex-col items-center text-center">
        <h2 className="font-display-mobile text-display-mobile text-primary tracking-tight mb-space-xs">
          Get In Touch
        </h2>

        <p className="font-headline-sm text-headline-sm text-secondary mb-space-md">
          Everything Starts with a Conversation.
        </p>

        {/* Message Card */}
        <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl p-space-md shadow-md text-left max-w-lg">
          <div className="flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[18px]">
                forum
              </span>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              In the meantime, we would be happy to connect with you. If you
              have any questions, business enquiries, collaboration
              opportunities, or would simply like to know more about APV Farms,
              feel free to get in touch with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;