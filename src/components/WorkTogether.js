import React from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"

const Section = styled.div `
    margin: 0;
    background-color:#C6ECFD;
    stroke: black;
    padding: 160px;
    text-align: center;
    transition: 0.3s cubic-bezier(0.2, 0.8, 0.8, 1);
    &:hover {
        color: #129CD7;;
        /*background-color: #7DD7FF;*/
        stroke: #129CD7;;
    }
    h1 { font-size: 30px; }
    p, a {
        font-family: 'Merriweather', serif;
        color: inherit;
    }
    svg path { stroke: inherit; }
    @media (max-width: 640px) {
        padding: 110px 30px 90px 30px;
        h1 {
            font-size: 26px;
        }
    }
    
`

const WorkTogether = props => (
    <Section>
        <svg width="58" height="51" viewBox="0 0 58 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.66671 8.5H48.3334C50.9917 8.5 53.1667 10.4125 53.1667 12.75V38.25C53.1667 40.5875 50.9917 42.5 48.3334 42.5H9.66671C7.00837 42.5 4.83337 40.5875 4.83337 38.25V12.75C4.83337 10.4125 7.00837 8.5 9.66671 8.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M53.1667 12.75L29 27.625L4.83337 12.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h1>Want to work together?</h1>
        <p>Let me know at <a href="mailto:hermes@hey.com?subject=Saw%20your%20portfolio,%20let's%20chat!">hermes@hey.com</a></p>
    </Section>
)

export default WorkTogether