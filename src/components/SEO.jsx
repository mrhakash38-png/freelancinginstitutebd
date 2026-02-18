import { Helmet } from 'react-helmet-async'

const SITE = 'Freelancing Institute BD'
const DOMAIN = 'https://freelancinginstitutebd.com'
const DEFAULT_IMG = `${DOMAIN}/branding/og-image.png`
const DEFAULT_DESC =
  "Bangladesh's most trusted freelancing training institute. Learn Graphic Design, WordPress, Digital Marketing & more with live Bangla mentorship, real projects, and marketplace job support."

export default function SEO({
  title,
  description = DEFAULT_DESC,
  canonical,
  image = DEFAULT_IMG,
  type = 'website',
  noIndex = false,
  schema,
}) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} — Learn. Build. Earn Online.`
  const url = canonical ? `${DOMAIN}${canonical}` : DOMAIN

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
