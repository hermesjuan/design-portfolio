import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
    a {
        text-decoration: none;
    }
`

const StyledButton = styled.div `
    background: #C6ECFD;
    width: 144px;
    height: 42px;
    padding-top: 1px;
    p {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
    }
`


const Button = props => (
    <Wrapper>
    <a href={props.link}>
        <StyledButton>
            <p>{props.text}</p>
        </StyledButton>
    </a>
    </Wrapper>
)

export default Button