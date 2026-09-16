function HomeFooter() {
  return (
    <footer className="flex flex-col items-center gap-1 px-gutter py-4 text-center text-on-surface-variant">
      <div className="flex items-center gap-space-xs font-bold text-primary">
        <span className="material-symbols-outlined text-[18px]">
          agriculture
        </span>

        <span className="font-headline-sm text-headline-sm">
          APV Farms
        </span>
      </div>

      <p className="font-label-sm text-label-sm text-outline">
        © 2025 APV Farms. Cultivating victory for rural India.
      </p>
    </footer>
  );
}

export default HomeFooter;