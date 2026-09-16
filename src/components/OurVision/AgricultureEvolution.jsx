function AgricultureEvolution() {
  return (
    <section className="px-gutter my-space-md">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            {/* Icon */}
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">
                history_edu
              </span>
            </div>

            {/* Title */}
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                Chronicle
              </span>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                The Evolution of Agriculture
              </h3>
            </div>
          </div>

          {/* Status Badge */}
          <span className="font-label-sm text-label-sm text-primary px-2 py-0.5 rounded-full bg-primary-fixed/40">
            Then to Now
          </span>
        </div>

        {/* Evolution Image */}
        <div className="w-full bg-surface-container-low rounded-lg p-space-sm overflow-hidden flex flex-col items-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5he7EPo3uWYwPJUeplr1Is1yzuuRYodYmMp8rz5jbPjiu43jakh4i2_px83Ik82lTKufVn4DBsyeo2VivYFATCW7wxXEKI1fVe_S3GFLWvg35htx2Ng-SE_V_wdCbMOKkN_piAOzNMqvDnp-B16ag4-k0jktpQywO2XeX7Ct8_1bA-lakSzTeUSK6Eo-9rcd7ggiXUbQ9SDOT2FDCnztm5XbC9uIqOA3k9oODBF1O5Y5ArN-Xy7pF3yvMETc9-uksuPw"
            alt="Evolution of Indian agriculture timeline silhouette"
            className="w-full h-auto max-h-36 object-contain mix-blend-multiply transition-transform duration-300 hover:scale-[1.02]"
          />

          {/* Timeline Labels */}
          <div className="w-full flex items-center justify-between text-on-surface-variant px-space-xs pt-space-xs">
            {/* Manual Harvest */}
            <span className="font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                nature_people
              </span>
              Manual Harvest
            </span>

            {/* Arrow */}
            <span className="material-symbols-outlined text-primary text-[14px]">
              arrow_forward
            </span>

            {/* Mechanization */}
            <span className="font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                precision_manufacturing
              </span>
              Mechanization
            </span>

            {/* Arrow */}
            <span className="material-symbols-outlined text-primary text-[14px]">
              arrow_forward
            </span>

            {/* Connected Farmer */}
            <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                smartphone
              </span>
              Connected Farmer
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-surface-container-low/70 rounded-lg p-space-md">
          <div className="flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[22px] flex-shrink-0 mt-0.5">
              neurology
            </span>

            <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
              From traditional manual farming and agrarian resilience to
              digital transformation: mobile devices and connected technology
              now empower farmers directly in the field with real-time
              agronomic insight, equitable market access, and yield
              optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgricultureEvolution;