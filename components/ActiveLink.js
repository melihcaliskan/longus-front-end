import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {}

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink