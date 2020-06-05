import React, { useEffect, useState } from 'react';

import { API_URL } from '../../helpers/urls';
import ActiveLink from '../ActiveLink';
import Button from '../Button';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form';
import Loader from '../../helpers/Loader';
import Twemoji from '../Twemoji';
import styled from 'styled-components';
import { withTranslation } from '../../i18n';

const GridHeader = styled.div`
    background-image:url('/assets/issue-bg.png');
    background-repeat:repat;
    background-size: 60px;
    height:350px;
    margin-top:-9em;
    padding:10em 10vw 0 10vw;

    display:flex;
    flex-direction:column;
    align-items:center;
        
    h3{
        font-size:40px;
        font-weight:800;
        text-align:center;
    }

    @media only screen and (max-width: 960px) {
        padding:11em 3vw 0 3vw;
        h3{
            font-size:30px;
        }
    }
`

const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;

    margin-bottom:3em;
    @media only screen and (max-width: 1260px) {
        gap: 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 960px) {
        padding:0 10px;
        gap: 30px;
        grid-template-columns: 1fr 1fr;
    }
`

const ItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    position: relative;

    border-radius:8px;
    
    height:160px;
    padding:2em 1em 1em 1em;

    background:${({ theme }) => theme.button_bg};
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);

    p{
        color:${({ theme }) => theme.text};
        font-size:20px;
        text-align:center;
        line-height:1.2em;
        margin-top:1em;
    }

    @media only screen and (max-width: 1024px) {
        padding:1.2em 0.8em 1em 0.8em;
        height:143px;
        p{
            font-size:18px;
        }
    }

    @media only screen and (max-width: 960px) {
        height:140px;
    }
`


const Image = styled.img`
    width:54px;
    height:54px;
    filter:${props => props.isLight ? 'invert(0.2)' : 'invert(0.8)'};

    @media only screen and (max-width: 1024px) {
        width:48px;
        height:48px;
    }

    @media only screen and (max-width: 960px) {
    }
`

const Item = ({ data, lang, isLight }) => {
    return (
        <ActiveLink href={`/category/${data.slug}`}>
            <ItemContainer>
                <Image src={`data:image/svg+xml;utf8;base64, ${data.icon}`} isLight={isLight} />
                <p>{data.name[0][lang] ? data.name[0][lang] : data.name[0]["en"]}</p>
            </ItemContainer>
        </ActiveLink>
    )
}


const GridTemplate = ({ title, emoji, url, searchUrl, data, t, tReady, language, isLight, toggleTheme }) => {
    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState(data);
    const [start, setStart] = useState(10);
    const limit = 12;

    const [seeMore, setSeeMore] = useState(true);

    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState('');

    // Fetch random placeholder for input
    const placeholder = t(`${searchUrl}placeholder${Math.floor(Math.random() * 2)}`)

    useEffect(() => {
        // diğer tablodan slug çek
        const delay = setTimeout(async () => {
            setLoading(true)
            if (search.length > 3) {
                const res = await fetch(`${API_URL}${searchUrl}/${language}/${search}`)
                const data = await res.json()
                console.log(data)
                data.length > 0 ? setSearchData(data) : null
            } else {
                setSearchData('')
            }
        }, 400)
        return () => clearTimeout(delay)

    }, [search])

    const fetchData = async (count) => {
        setLoading(true)
        setStart(start + limit)

        const res = await fetch(`${API_URL}${url}/start=${start}&limit=${limit}`)
        const result = await res.json()

        setItems([...items, ...result])

        if (result.length < limit) {
            console.log(result.length, limit)
            setSeeMore(false)
        }
        setLoading(false)
    }

    if (!tReady) {
        return <Loader />
    }

    return (
        <>
            <GridHeader>
                <h3><Twemoji style={{ marginRight: '0.5em' }} emoji={emoji} />{t(`${searchUrl}list`)}</h3>
                <Container style={{ marginTop: '1.5em' }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control size="lg" placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Form.Group>
                </Container>
            </GridHeader>
            <Container style={{ display: 'flex', flexDirection: 'column', marginTop: '5em', marginBottom: '5em' }}>
                {searchData ?
                    <List>
                        {searchData.map((item, id) => (
                            <Item key={id} url={url} data={item} isLight={isLight} lang={language} />
                        ))}
                    </List>
                    : null}
                <List>
                    {items.map((item, id) => (
                        <Item key={id} url={url} data={item} isLight={isLight} lang={language} />
                    ))}
                </List>
                {seeMore ?
                    <Button type="primary" onClick={() => fetchData()} style={{ alignSelf: 'center', width: '180px' }}>
                        {t('seemore')}
                    </Button>
                    : null}
            </Container>
            <Footer />
        </>
    )
}

GridTemplate.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})
export default withTranslation('common')(GridTemplate)
