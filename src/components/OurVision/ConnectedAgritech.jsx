function ConnectedAgritech() {
  return (
    <section className="px-gutter my-space-sm">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            {/* Icon */}
            <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[18px]">
                hub
              </span>
            </div>

            {/* Title */}
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                Integration
              </span>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                The Connected Agritech Ecosystem
              </h3>
            </div>
          </div>

          {/* Live Indicator */}
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />

            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
        </div>

        {/* Agritech Image */}
        <div className="relative w-full rounded-lg overflow-hidden bg-surface-container-high/30">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN5xkpB3PtldEGRDGX6QecCRT377NRLjAqdo8mTg-GIFFgIV8bAa3yhzBb_WmEXznJML00biiTfifJ6wjJ11WxBBvTxsxoZTyUkCeRaNOM4ThBrCbx_ihwd3JcikdXKKCPrpbRZKJSbYGQfnj9uYgy36r7wV9W_dV3t0_1Xn1BRd5l8tip-xOWsM7Ip7ZfdHDGfMgGtNVAUp6MpsmI4dyjuZlYvoCILZ1pU8revAAl5wGYLonrGxw0ow"
            alt="Futuristic agritech touch interface displaying agricultural IoT, sensors, and soil monitoring"
            className="w-full h-56 object-cover rounded-lg"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent flex flex-col justify-end p-space-md">
            <div className="flex items-center gap-space-xs text-inverse-on-surface mb-1">
              <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                sensors
              </span>

              <span className="font-label-md text-label-md text-primary-fixed font-semibold tracking-wide uppercase">
                Real-Time Field Telemetry
              </span>
            </div>

            <p className="font-body-sm text-body-sm text-surface-bright font-medium line-clamp-2">
              Soil APV &amp; telemetry, automated moisture monitoring,
              atmospheric drones, and weather intelligence unified into a
              single dashboard.
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="font-body-md text-body-md text-on-surface-variant">
          How Technology, People &amp; Agriculture connect with APV Farms. A
          unified ecosystem creating shared value, operational precision, and
          enduring victory.
        </p>
      </div>
    </section>
  );
}

export default ConnectedAgritech;