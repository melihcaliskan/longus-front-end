import { light_colors } from '../helpers/colors'
import { useRouter } from 'next/router'
function Button({ children, href, type, shadow, style }) {
  const router = useRouter()
  const customStyle = {
    padding: '0.7em 2em',
    borderRadius: '8px',
    background: type && type == "primary" ? light_colors.PRIMARY_BUTTON_BG : light_colors.BUTTON_BG,
    color: type && type == "primary" ? "white" : light_colors.TEXT_COLOR,
    boxShadow: shadow ? "0px 2px 2px 0px rgba(0,0,0,0.1)" : "none",
    textDecoration: 'none',
    textAlign:'center',
    ...style
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={customStyle}>
      {children}
    </a>
  )
}

export default Button