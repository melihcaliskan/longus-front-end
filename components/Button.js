import { light_colors } from '../helpers/colors'
import { useRouter } from 'next/router'
function ActiveLink({ text, href }) {
  const router = useRouter()
  const style = {
    padding: '0.7em 2em',
    borderRadius: '8px',
    background: light_colors.PRIMARY_BUTTON_BG,
    color: 'white',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {text}
    </a>
  )
}

export default ActiveLink