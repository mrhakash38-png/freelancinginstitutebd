import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumbSchema } from '../data/schemas'

export default function Breadcrumb({ items }) {
  const schema = breadcrumbSchema(items)

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <nav aria-label="breadcrumb" style={styles.nav}>
        <ol style={styles.list}>
          {items.map((item, index) => (
            <li key={index} style={styles.item}>
              {item.url ? (
                <>
                  <Link to={item.url} style={styles.link}>
                    {item.name}
                  </Link>
                  {index < items.length - 1 && <span style={styles.separator}>/</span>}
                </>
              ) : (
                <span style={styles.current}>{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

const styles = {
  nav: {
    padding: '1rem 0 0.5rem',
    fontSize: '0.875rem',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.5rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  link: {
    color: 'var(--primary)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  separator: {
    color: 'var(--muted)',
    userSelect: 'none',
  },
  current: {
    color: 'var(--text)',
    fontWeight: 500,
  },
}
