import { light_colors } from '../helpers/colors'
import styled from 'styled-components';
import { useRouter } from 'next/router'

const CustomButton = styled.a`
  cursor:pointer;
  font-weight:600;
  background:${props => props.type && props.type == "primary" ? light_colors.PRIMARY_BUTTON_BG : props.theme.body_100};
  color: ${props => props.type && props.type == "primary" ? "white" : props.theme.text} !important;
  padding: 0.6em 2em;
  border-radius: 8px;
  text-decoration: none !important;
  text-align: center;
  box-shadow: ${props => props.shadow ? "0px 2px 2px 0px rgba(0,0,0,0.1)" : "none"};

  &:hover{
    filter: brightness(90%);
  }
`

const Button = ({ children, href, query, onClick, type, shadow, style }) => {
  const router = useRouter()
  const customStyle = {
    ...style
  }

  const handleClick = e => {
    if (onClick) {
      onClick()
    }
    if (href) {
      console.log(window)
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
    <CustomButton
      href={href}
      onClick={handleClick}
      style={customStyle}
      shadow={shadow}
      type={type}
    >
      {children}
    </CustomButton>
  )
}

export default Button