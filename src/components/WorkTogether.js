import React from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"

const Section = styled.div `
    margin: 80px 0px 40px 0px;
    background-color:#C6ECFD;
    padding: 160px;
    h1 {
        font-size: 30px;
    }
    p, a {
        font-family: 'Merriweather', serif;
    }

    @media (max-width: 640px) {
        padding: 110px 30px 90px 30px;
        h1 {
            font-size: 26px;
        }
    }
    
`

const WorkTogether = props => (
    <Section>
        <img src={require('../images/mail-icon.svg')}/>
        <h1>Want to work together?</h1>
        <p>Let me know at <a href="mailto:hermes@hey.com?subject=Saw%20your%20portfolio,%20let's%20chat!">hermes@hey.com</a></p>
    </Section>
)

export default WorkTogether