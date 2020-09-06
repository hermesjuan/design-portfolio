import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div `
    height: 720px;
`

const SectionTitle = styled.h3 `
    font-size: 30px;
    @media (max-width: 640px) {
        text-align: center;
    }
`

const SectionElementsGroup = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin: 40px auto 30px auto;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const SectionElements = styled.h3 `
    margin: 0;
    background: #F7F4EF;
    border-radius: 10px;
    width: 325px;
    padding: 30px 0;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 900;
    @media (max-width: 640px) {
        width: 100%;
    }
`


const Section = props => (
    // <div>Section!</div>
    <SectionGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionElementsGroup>
            <SectionElements>{props.element1}</SectionElements>        
            <SectionElements>{props.element2}</SectionElements>        
            <SectionElements>{props.element3}</SectionElements>        
            <SectionElements>{props.element4}</SectionElements>        
            <SectionElements>{props.element5}</SectionElements>        
            <SectionElements>{props.element6}</SectionElements>        
        </SectionElementsGroup>
    </SectionGroup>
)

export default Section