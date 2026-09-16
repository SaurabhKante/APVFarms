function GuidingPromise() {
  return (
    <div className="bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low rounded-2xl p-space-md shadow-sm">
      <div className="text-center font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold mb-space-sm">
        Our Guiding Promise
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Growing Agriculture */}
        <div className="flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest/80">
          <span className="material-symbols-outlined text-primary text-[22px] mb-1">
            eco
          </span>

          <span className="font-headline-sm text-[12px] leading-tight text-on-surface">
            Growing Agriculture
          </span>
        </div>

        {/* Creating Prosperity */}
        <div className="flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest/80">
          <span className="material-symbols-outlined text-secondary text-[22px] mb-1">
            diversity_3
          </span>

          <span className="font-headline-sm text-[12px] leading-tight text-on-surface">
            Creating Prosperity
          </span>
        </div>

        {/* Building Victory */}
        <div className="flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest/80">
          <span className="material-symbols-outlined text-tertiary text-[22px] mb-1">
            trending_up
          </span>

          <span className="font-headline-sm text-[12px] leading-tight text-on-surface">
            Building Victory
          </span>
        </div>
      </div>
    </div>
  );
}

export default GuidingPromise;