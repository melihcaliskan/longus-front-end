//import { Router } from '../i18n'
import { useRouter } from 'next/router'

function ActiveLink({ children, href, query, style, white }) {
  const router = useRouter()
  const customStyle = { textDecoration: 'none', color: white ? 'white' : 'initial' }

  const handleClick = e => {
    if (href) {
      e.preventDefault()
      router.push({
        pathname: href,
        query: query
      }, href)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <a href={href} query={query} onClick={handleClick} style={{ ...customStyle, ...style }}>
      {children}
    </a>
  )
}

export default ActiveLink