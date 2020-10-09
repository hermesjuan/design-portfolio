import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Wrapper = styled.div `
    font-family: Raleway;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    a { text-decoration: none; }
`
const StyledButton = styled.div `
    background: #C6ECFD;
    width: 160px;
    padding: 10px 0;
    transition: 0.3s cubic-bezier(0.2, 0.8, 0.8, 1);
    &:hover {
        background: #139CD7;
        color: white;        
        box-shadow: 0 0 20px rgb(200,230,250,1);
    }
`

const Button = props => (
    <Wrapper>
        <AniLink cover to={props.link} bg="#C6ECFD">
            <StyledButton>{props.text}</StyledButton>
        </AniLink>
    </Wrapper>
)

export default Button