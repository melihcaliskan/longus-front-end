import Card from '../Home/Card'
import { CardContainer } from '../Home/RecentTab'
import Lightning from "../svg/Lightning"
import React from 'react';
import styled from 'styled-components';
const Loader = styled.div`
`
const Text = styled.div`
    background: ${({ theme }) => theme.scrollbar_dark};
    margin-top:1em;
    margin-bottom:0.4em;
    width:100%;
    height:20px;
    border-radius:30px;
`

const Svg = styled.svg`
    circle,rect{
        fill:${({ theme }) => theme.scrollbar_dark};
    }
`

const Circle = () => {
    return (
        <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="none" />
        </Svg>
    )
}

const Rectangle = () => {
    return (
        <Svg width="70" height="90" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="90" rx="5" fill="none" />
        </Svg>
    )
}

export const Tabs = ({ theme, type }) => {
    return (
        <Loader>
            <CardContainer>
                {[...Array(10)].map((x, i) =>
                    <Card key={1} svg={type == "issue" ? <Circle /> : <Rectangle />}>
                        <Text />
                    </Card>
                )}
            </CardContainer>
        </Loader>
    )
}