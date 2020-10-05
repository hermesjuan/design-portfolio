import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
    font-family: Raleway;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    a {
        text-decoration: none;
    }
`

const StyledButton = styled.div `
    background: #C6ECFD;
    width: 144px;
    padding: 10px 0;
`


const Button = props => (
    <Wrapper>
    <a href={props.link}>
        <StyledButton>{props.text}</StyledButton>
    </a>
    </Wrapper>
)

export default Button