import React from 'react'
import styled from 'styled-components'

const Section = styled.div `
    margin: 50px auto;
    padding: 30px 50px;
    max-width: 1000px;
    margin-block-start: 0;
    h1 { font-size: 18px;}
    p { font-size: 12px; }
    h3 {
        font-family: Raleway;
        font-weight: 800;
        font-size: 13px;
        text-transform: uppercase;
        margin-bottom: 40px;
    }    
    @media (max-width: 940px) {
        h1 { font-size: 24px}
        padding: 10px 20px;
    }
    @media (max-width: 400px) {
        h1 { font-size: 14px}
    }
`
const Group = styled.div `
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 20px;
    @media (max-width: 940px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        grid-row-gap: 20px;
    }
`

const Card = styled.a `
    text-decoration: none;
    h1 { font-family: 'Raleway' }
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
`
const Text = styled.div `
    margin: 8px 20px;
    p {
        display: inline;
        padding-right: 15px;
    }
`
const Image = styled.img `
    width: 100%;
    height: 100%;
    max-height: 170px;
    object-fit: cover;
    @media (max-width: 740px) {
        max-height: 120px;
    }
`


const OtherProjects = props => (
    <Section>
    <h3>SEE MORE PROJECTS</h3>
        <Group>
            <Card href={props.link1}>
                <Text>
                    <h1>{props.text1}</h1>            
                    <p>Read more</p>
                    <img src={require('../images/arrow.svg')}alt="arrow"></img>
                </Text>
            <Image src={props.image1} alt={props.text1}></Image>
            </Card>
            <Card href={props.link2}>
                <Text>
                    <h1>{props.text2}</h1>            
                    <p>Read more</p>
                    <img src={require('../images/arrow.svg')}alt="arrow"></img>
                </Text>
            <Image src={props.image2} alt={props.text2}></Image>
            </Card>
            <Card href={props.link3}>
                <Text>
                    <h1>{props.text3}</h1>            
                    <p>Read more</p>
                    <img src={require('../images/arrow.svg')}alt="arrow"></img>
                </Text>
            <Image src={props.image3} alt={props.text3}></Image>
            </Card>
        </Group>
    </Section>
)

export default OtherProjects