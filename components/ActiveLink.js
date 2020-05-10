import { useRouter } from 'next/router'

function ActiveLink({ children, href, style, white }) {
  const router = useRouter()
  const customStyle = { textDecoration: 'none', color: white ? 'white' : 'initial' }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <a href={href} onClick={handleClick} style={{ ...customStyle, ...style }}>
      {children}
    </a>
  )
}

export default ActiveLink