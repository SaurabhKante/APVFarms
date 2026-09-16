const mottos = [
  {
    number: "01",
    title: "1. Growing Agriculture",
    description:
      "Pioneering regenerative cultivation methods, modern drip technologies, and high-yield soil preservation.",
    icon: "potted_plant",
    iconBackground: "bg-primary",
    iconColor: "text-on-primary",
    numberColor: "text-primary",
  },
  {
    number: "02",
    title: "2. Creating Prosperity",
    description:
      "Ensuring direct market access, equitable cooperative earnings, and localized wealth for rural farming families.",
    icon: "groups_3",
    iconBackground: "bg-secondary",
    iconColor: "text-on-secondary",
    numberColor: "text-secondary",
  },
  {
    number: "03",
    title: "3. Building a Victorious Future",
    description:
      "Empowering communities through agricultural resilience, food sovereignty, and next-generation ecological science.",
    icon: "trending_up",
    iconBackground: "bg-tertiary-container",
    iconColor: "text-on-tertiary-container",
    numberColor: "text-tertiary",
  },
];

function GuidingMottos() {
  return (
    <section
      id="our-vision"
      className="mt-6 flex flex-col gap-space-sm px-gutter"
    >
      <div className="mb-1 flex items-center justify-between">
        <div>
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
            Foundational Pillars
          </span>

          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Three Guiding Mottos
          </h3>
        </div>

        <span className="material-symbols-outlined text-[24px] text-outline-variant">
          unfold_more
        </span>
      </div>

      {mottos.map((motto) => (
        <div
          key={motto.number}
          className="flex items-start gap-space-md rounded-2xl bg-surface-container-low p-4 shadow-sm transition-all hover:bg-surface-container"
        >
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${motto.iconBackground} ${motto.iconColor} shadow-sm`}
          >
            <span className="material-symbols-outlined text-[26px]">
              {motto.icon}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-0.5 flex items-center justify-between">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                {motto.title}
              </h4>

              <span
                className={`font-label-sm text-label-sm font-bold ${motto.numberColor}`}
              >
                {motto.number}
              </span>
            </div>

            <p className="font-body-sm text-body-sm leading-normal text-on-surface-variant">
              {motto.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default GuidingMottos;