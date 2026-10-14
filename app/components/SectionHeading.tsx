export default function SectionHeading({
  overline,
  title,
  className = "",
}: {
  overline?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {overline && <p className="overline mb-2 text-signal">{overline}</p>}
      <h2 className="rule-signal font-display text-display text-ink">{title}</h2>
    </div>
  );
}
