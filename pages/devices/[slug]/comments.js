import { GET, POST } from '../../../helpers/network'
import React, { useState } from 'react';

import { API_URL } from '../../../helpers/urls'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
import ItemHeader from "../../../components/Detail/Header"
import { handlePhoto } from '../../../helpers/functions'
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { withTranslation } from '../../../i18n'

const DetailContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`

const Comments = ({ t, isMobile, isAuth, device, comments }) => {
    const [commentData, setCommentData] = useState(comments);

    const { id, name, device_issues, photo } = device

    const { register, handleSubmit, watch, reset, errors } = useForm();

    const onSubmit = (data) => {
        POST('comments', { device_id: id, ...data }).then(async response => {
            console.log(response)
            if(response.status === 200){
                reset()
                // Yorum başarılı ise toast gösterilecek.
                const fetchComments = await GET(`comments?device_id=${id}`);
                console.log(fetchComments)
                if (fetchComments) {
                    setCommentData(fetchComments)
                }
            } else {
                // Handle error
            }
        })
    }

    const [loading, setLoading] = useState(true);
    return (
        <Fade duration={600}>
            <Head>
                <title>{name}</title>
                <meta name="og:type" content="website" />
                <meta name="description" content={name} />
                <meta name="og:title" content={name} />
                <meta name="description" content={name} />
                <meta name="keywords" content={name} />
                <meta name="og:url" content={name} />
                <meta name="og:description" content={name} />
            </Head>
            <DetailContainer>
                <ItemHeader
                    name={name}
                    photo={handlePhoto(photo)}
                    count={{ issue: device_issues && device_issues.length ? device_issues.length : 0, comment: 0 }}
                    fit={device_issues && device_issues.length > 0 ? device_issues[0].effect_on_usability : 10}
                    isMobile={isMobile}
                />
                <Container>
                    Comments
                    <br /> <br />
                    {commentData && commentData.map(item => (
                        <div>
                            <p>{item.content}</p>
                            <p>Yazan:{item.user.name}</p>
                            <br /><br />
                        </div>
                    ))}

                    {isAuth &&
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Yorum yazın...</Form.Label>
                                <Form.Control name="content" type="text" placeholder="yorum yaz" ref={register({ required: true })} />
                            </Form.Group>

                            <Button disabled={watch('content')?.length < 4} variant="primary" type="submit">
                                Gönder
                        </Button>
                        </Form>
                    }
                </Container>
            </DetailContainer>
        </Fade>
    )
}
Comments.getInitialProps = async ({ res, query, err }) => {
    const namespacesRequired = ["detail"];

    const response = await fetch(`${API_URL}devices?slug=${query.slug}`)
    const device = await response.json()

    // TODO : ID YAZILACAK !
    const response_two = await fetch(`${API_URL}comments?device_id=11`);
    const comments = await response_two.json()

    return { namespacesRequired, device: device[0], comments: comments, }
}

export default withTranslation('detail')(Comments)