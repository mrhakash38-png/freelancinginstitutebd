import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE = 'Freelancing Institute BD'
const DOMAIN = 'https://freelancinginstitutebd.com'
const DEFAULT_IMG = `${DOMAIN}/branding/og-image.png`
const DEFAULT_DESC =
  "Bangladesh's most trusted freelancing training institute. Learn Graphic Design, WordPress, Digital Marketing & more with live Bangla mentorship, real projects, and marketplace job support."

export default function AdvancedSEO({
  title,
  description = DEFAULT_DESC,
  canonical,
  image = DEFAULT_IMG,
  type = 'website',
  noIndex = false,
  schema,
  keywords,
  author = 'Freelancing Institute BD',
}) {
  const location = useLocation()
  
  // Ensure canonical is always set - fallback to current path if not provided
  const finalCanonical = canonical || location.pathname
  const fullUrl = `${DOMAIN}${finalCanonical.startsWith('/') ? finalCanonical : '/' + finalCanonical}`
  
  const fullTitle = title ? `${title}` : `${SITE} — Learn. Build. Earn Online.`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Canonical - MOST IMPORTANT FOR SEO */}
      <link rel="canonical" href={fullUrl} />
      <meta property="og:url" content={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
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
      <meta name="twitter:site" content="@freelancingbd" />

      {/* Additional SEO Signals */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      
      {/* Preload key assets */}
      <link rel="preload" as="image" href={image} />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
