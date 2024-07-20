import { useConfig } from 'nextra-theme-docs'

const siteTitle = 'Anna\'s Little Prince Collection';

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  title: 'yo',
  logo: 
    <div>
      <img 
        src="assets/logo.png"
        className='h-10 pt-1 text-'
        alt={siteTitle} />
      <div className='text-xs opacity-50' align="right"><i>Documentation</i></div>
    </div>,
  project: {
    link: 'https://annaslittleprincecollection.com',
    icon: '✨'
  },
  primaryHue: 45,
  primarySaturation: 88,
  docsRepositoryBase:
    'https://github.com/jv-k/tlp-master',
  faviconGlyph: '✨',
  head: function useHead() {
    const config = useConfig()
    const title = `${config.frontMatter.title || config.title} – TLP Documentation`
    const description =
      config.frontMatter.description || `${siteTitle} - Documentation`
    const image = config.frontMatter.image || 'https://nextra.site/og.jpeg'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://nextra.site" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>
    )
  }
}