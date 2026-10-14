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
      {overline && (
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-signal">
          {overline}
        </p>
      )}
      <h2 className="rule-signal font-display text-3xl text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
