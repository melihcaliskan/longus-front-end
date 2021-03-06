import ActiveLink from '../ActiveLink'
import styled from 'styled-components';

const CustomCard = styled.div`
    display:inline-flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1em;
    padding:1em 1em 0 1em;
    min-width:140px;
    background:${({ theme }) => theme.body_100};
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);
    margin-right:1em;
    border-radius:6px;
    
    @media only screen and (max-width: 940px) {
        transform:scale(0.85);
        margin:0em;
    }
`
const Content = styled.h3`
    color:${({ theme }) => theme.text};
    font-size:18px;
    font-weight:500;
    line-height:1.4em;
    width:100%;
`

const Image = styled.img`
    width:50%;
    max-height:60%;
    object-fit:contain;
    border-radius:5px;
    margin-bottom:1em;
`
const customStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
}
const Card = ({ children, style, svg, img, href }) => {
    const src = img ? img : `data:image/svg+xml;utf8;base64, ${svg}`
    return (
        <CustomCard style={style}>
            <ActiveLink style={customStyle} href={href ? `/${href}` : null}>
                <Image src={src} />
                <Content>{children}</Content>
            </ActiveLink>
        </CustomCard>
    )
}

export default Card