import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
}

export default function Seo({ title, description }: SeoProps) {
  const fullTitle = `${title} — Arfan Indra Kurniawan`;
  const desc = description ?? 'Portfolio Arfan Indra Kurniawan — AI Developer, Data Engineer, Data Analysis.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
