function HomeHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl pt-safe">
      <div className="flex h-16 items-center justify-between gap-space-sm px-gutter">
        <div className="flex min-w-0 items-center gap-space-sm">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary">
            <span className="material-symbols-outlined text-[20px]">
              potted_plant
            </span>
          </div>

          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="truncate font-headline-sm text-headline-sm text-on-surface">
                APV Farms
              </span>

              <span className="shrink-0 rounded-full bg-secondary-fixed px-2 py-0.5 font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed">
                Launching Soon
              </span>
            </div>

            <span className="truncate font-label-sm text-label-sm text-on-surface-variant">
              Home
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-space-xs">
          <img
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover ring-2 ring-primary-fixed-dim/40"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XgOAwkFMecMhqDKYf_CKV-qw4FD1ze62f_gSY_fgRYgW0eOawT0LATeRPX-U6vlvyuYgmE-AMrO5u1jtnrsVuAioIKiKJfjPP9rv4cWzIGMKk335ib1Fe8jGOvzWUM7PLlf9U4cCD3WLV58kIUTnYg6StF1VI5iNNx8Efxg_zXl1J7hZP8Z0V-trnRYoSiItFAYQAdCIGi5FPBgXiezytCSCyX6qSJ9p-nWAwmOsSkcQhPmxWM_b3yOpoppdz8ryu8zHlTp8DWcMM"
          />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;