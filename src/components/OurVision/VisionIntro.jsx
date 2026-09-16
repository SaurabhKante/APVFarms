function VisionIntro() {
  return (
    <section className="px-gutter pt-space-md pb-space-sm flex flex-col gap-space-xs">
      {/* Badges */}
      <div className="flex items-center gap-space-xs">
        {/* APV Roadmap */}
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
          <span
            className="material-symbols-outlined text-[15px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            eco
          </span>

          APV Roadmap
        </span>

        {/* Next-Gen Ecosystem */}
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md">
          Next-Gen Ecosystem
        </span>
      </div>

      {/* Heading */}
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mt-1">
        The Vision &amp; Agritech Evolution
      </h2>

      {/* Description */}
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Bridging timeless agrarian roots with modern digital technology to
        empower every cultivator and community.
      </p>
    </section>
  );
}

export default VisionIntro;