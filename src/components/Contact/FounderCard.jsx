function FounderCard() {
  return (
    <div className="relative bg-surface-container-lowest rounded-2xl p-space-md shadow-md overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-space-sm mb-space-sm">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
          Leadership &amp; Vision
        </span>

        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Founder Direct
        </span>
      </div>

      {/* Founder Information */}
      <div className="flex items-start gap-space-md">
        <div className="relative flex-shrink-0">
          <img
            className="w-16 h-16 rounded-2xl object-cover shadow-sm"
            alt="Akash Biradar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Lbpj9G1RfkS8elHUmC0f2KCU8EVeMDgpTcBF14mTuRWUyXYQMzZYpNPH-F0Gg4SkRItGJKLkq_ozNv3BmkakbWSDIb2u2VUjEWEAiQbwauNQmKeuT57b6eF_y2HS4WeVOJc-kAVCZFomchcOYsU_SNSEVpTGIaOmoJwJ5TyX7ho6bdPOwprLw_pW3S9IJMehtzm8eeo9SCwsCGh4VGjiNZiBaxqLzz9Oxssl3ikoiNFSoC3IYY9IIQ"
          />

          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[14px]">
              verified
            </span>
          </div>
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
            Akash Biradar
          </h3>

          <div className="flex items-center gap-1.5">
            <span className="font-label-md text-label-md font-semibold text-primary">
              APV Farms
            </span>

            <span className="text-outline text-[12px]">•</span>

            <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
              Executive Leadership
            </span>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-2">
            Agricultural Visionary &amp; Leadership driving sustainable rural
            prosperity and ecological innovation.
          </p>
        </div>
      </div>

      {/* Contact Ribbon */}
      <div className="mt-space-md pt-space-sm bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-sm">
        <div className="flex items-center justify-between px-space-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-[20px] text-primary flex-shrink-0">
              mail
            </span>

            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Official Desk
              </span>

              <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                apvfarms@gmail.com
              </span>
            </div>
          </div>

          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
            Active
          </span>
        </div>

        <a
          className="w-full flex items-center justify-center gap-2 py-3 px-space-md rounded-lg bg-primary text-on-primary font-headline-sm text-body-md hover:bg-primary-container active:scale-[0.99] transition-all shadow-sm"
          href="mailto:apvfarms@gmail.com"
        >
          <span className="material-symbols-outlined text-[20px]">
            send
          </span>

          <span>Send Email</span>
        </a>
      </div>
    </div>
  );
}

export default FounderCard;