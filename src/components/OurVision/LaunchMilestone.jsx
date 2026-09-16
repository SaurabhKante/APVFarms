function LaunchMilestone() {
  return (
    <section className="px-gutter mt-space-sm mb-space-lg">
      <div className="bg-primary-container text-on-primary-container rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
        {/* Ambient Glow Decorator */}
        <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-primary-fixed/20 pointer-events-none blur-2xl" />

        {/* Milestone Label */}
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[22px] text-primary-fixed">
            rocket_launch
          </span>

          <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-primary-fixed">
            Next Milestone
          </span>
        </div>

        {/* Heading */}
        <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold">
          Full Agritech Platform Launching Soon
        </h4>

        {/* Description */}
        <p className="font-body-sm text-body-sm text-on-primary/90 leading-relaxed">
          Full agritech platform features launching with the new website: live
          satellite ndvi indices, spot price predictions, and IoT farm hub
          control.
        </p>

        {/* Newsletter / Confirmation Area */}
        <div
          className="pt-space-xs flex flex-col gap-space-xs"
          id="newsletterBlock"
        >
          {/* Newsletter form was empty in the original HTML */}

          <span
            className="font-label-sm text-label-sm text-primary-fixed hidden items-center gap-1"
            id="notifyConfirm"
          >
            <span className="material-symbols-outlined text-[14px]">
              check_circle
            </span>

            You’re registered for early platform access!
          </span>
        </div>
      </div>
    </section>
  );
}

export default LaunchMilestone;