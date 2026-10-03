function ContactFooter() {
  return (
    <footer className="flex flex-col items-center text-center pt-space-sm pb-space-lg px-space-sm">
      {/* Emblem */}
      <div className="w-14 h-14 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center p-1.5 mb-space-sm">
        <img
          className="w-full h-full object-contain rounded-full"
          alt="APV Farms official emblem"
          src="src\assets\images\full_logo.jpeg"
        />
      </div>

      {/* Brand */}
      <div className="font-headline-sm text-headline-sm text-primary tracking-tight">
        APV FARMS
      </div>

      {/* Slogan */}
      <p className="font-body-sm text-body-sm font-semibold text-secondary-fixed-dim/90 uppercase tracking-wide mt-1 max-w-xs">
        Agricultural People's Vision For All People's Victory
      </p>

      {/* Divider */}
      <div className="w-16 h-0.5 bg-primary-fixed-dim my-space-md rounded-full" />

      {/* Status */}
      <div className="flex flex-col items-center gap-1 text-on-surface-variant font-label-md text-label-md">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />

          <span className="font-medium text-on-surface">
            Website coming soon in the coming days
          </span>
        </div>

        <span className="text-outline-variant font-label-sm text-label-sm">
          APV Farms Ecosystem • All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default ContactFooter;