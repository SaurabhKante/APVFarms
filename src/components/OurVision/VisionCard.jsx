function VisionCard({
  icon,
  label,
  title,
  description,
  badge,
  iconClassName,
  badgeClassName,
}) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm transition-transform duration-200">
      {/* Card Header */}
      <div className="flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          {/* Icon */}
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 ${iconClassName}`}
          >
            <span className="material-symbols-outlined text-[24px]">
              {icon}
            </span>
          </div>

          {/* Title */}
          <div className="min-w-0">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider block truncate">
              {label}
            </span>

            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              {title}
            </h4>
          </div>
        </div>

        {/* Badge */}
        <span
          className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold flex-shrink-0 ${badgeClassName}`}
        >
          {badge}
        </span>
      </div>

      {/* Description */}
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}

export default VisionCard;