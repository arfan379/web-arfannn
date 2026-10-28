import ScrollReveal from './ScrollReveal';

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <ScrollReveal className="mb-12 text-center">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
