import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div `
    height: 720px;
`

const SectionTitle = styled.h3 `
    font-size: 30px;
`

const SectionElementsGroup = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin: 40px auto 30px auto;
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