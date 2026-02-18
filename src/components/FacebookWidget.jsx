// Official Facebook Page Plugin embed — no App ID required for basic embed
const FB_PAGE = 'https://www.facebook.com/freelancerhamidurrahman44'

export function FacebookPageEmbed({ width = 380, height = 500, tabs = 'timeline' }) {
  const src =
    `https://www.facebook.com/plugins/page.php` +
    `?href=${encodeURIComponent(FB_PAGE)}` +
    `&tabs=${tabs}` +
    `&width=${width}` +
    `&height=${height}` +
    `&small_header=false` +
    `&adapt_container_width=true` +
    `&hide_cover=false` +
    `&show_facepile=true`

  return (
    <div className="fb-page-wrap" style={{ maxWidth: width }}>
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 'none', overflow: 'hidden', borderRadius: '14px', display: 'block' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Freelancer Hamidur Rahman Facebook Page"
      />
    </div>
  )
}

export function FacebookLikeBtn() {
  const src =
    `https://www.facebook.com/plugins/like.php` +
    `?href=${encodeURIComponent(FB_PAGE)}` +
    `&width=200&layout=button_count&action=like&size=large` +
    `&share=true&height=28`

  return (
    <iframe
      src={src}
      width="200" height="28"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no" frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="Like on Facebook"
    />
  )
}

export const FB_URL = FB_PAGE
