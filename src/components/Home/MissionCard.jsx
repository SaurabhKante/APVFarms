function MissionCard() {
  return (
    <section className="relative z-20 -mt-4 px-gutter">
      <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="mb-3 flex items-center gap-space-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-fixed text-on-primary-fixed-variant">
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
          </div>

          <div>
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
              Our Pledge
            </span>

            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              The Agriculture We Believe In
            </h2>
          </div>
        </div>

        <p className="text-left font-body-md text-body-md leading-relaxed text-on-surface-variant">
          “At APV Farms, we are dedicated to improving modern agriculture and
          creating a sustainable and prosperous future for farmers, businesses,
          and consumers alike. We believe that agriculture is not just about
          producing food—it is about creating opportunities, connecting people,
          building value, and shaping a better future.”
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-outline-variant/30 pt-4 text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[18px] text-primary">
              verified
            </span>

            <span className="font-label-sm text-label-sm font-semibold">
              Farmer First Stewardship
            </span>
          </div>

          <span className="font-label-sm text-label-sm font-semibold text-secondary">
            APV Standard
          </span>
        </div>
      </div>
    </section>
  );
}

export default MissionCard;