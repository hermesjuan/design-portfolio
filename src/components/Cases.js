import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div `
    padding: 0 50px;
    @media (max-width: 640px) { padding: 0px 30px; }
`
const CaseBanner = styled.div `
    margin: 100px auto;
    max-width: 1000px;
    position: relative;
    font-family: 'Raleway', sans-serif;
    transition: 0.2s cubic-bezier(0.2, 0.8, 0.8, 1);
    a { &:hover { color: black;}}
`
const OverlayingBorder = styled.div `
    position: absolute;
    margin: auto;
    max-width: 920px;
    height: 320px;
    z-index: 1;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    outline: 6px solid #C6ECFD;
    transition: 0.2s cubic-bezier(0.2, 0.8, 0.8, 1);
    @media (max-width: 1050px) {
        max-width: 90%;
        height: 240px;
        outline: 5px solid #C6ECFD;
    }
    @media (max-width: 640px) {
        max-width: 80%;
        height: 80%;
        outline: 4px solid #C6ECFD;
    }
`
const Group = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 400px;
    align-items: center;
    justify-items: center;
    @media (max-width: 1050px) {
        grid-template-rows: 320px;
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
        align-items: baseline;
        padding-bottom: 70px;
    }

`
const Image = styled.div `    
    z-index: -2;
    object-fit: cover;
    grid-row: 1;
    background: url(${props => props.image}) no-repeat center;
    width: 100%;
    height: 100%;
    @media (max-width: 640px) {            
        height: 220px;
        grid-column: 1;
    }
`
const Text = styled.div `
    margin: 0 auto;
    max-width: 450px;
    grid-row: 1;
    grid-column: ${props => props.passedTextColumn};
    z-index: 2;
    background-color: white;
    h3 {
        font-size: 38px;
        font-weight: 900;
        @media (max-width: 1050px) {  font-size: 32px; }
        @media (max-width: 640px) { font-size: 25px; }
    }
    div {
        margin-bottom: 10px;
        p {
            display: inline;
            padding-right: 10px;
        }
    }
    @media (max-width: 1050px) {
        max-width: 420px;
    }
    @media (max-width: 640px) {
        margin-left: 20px;
        max-width: 80%;
        grid-column: 1;
        grid-row: 2;
    }
`

const CasesEven = props => (
    <Wrapper>
        <CaseBanner>
            <OverlayingBorder/>
            <Group>

                <Image image={props.image} />
                <Text passedTextColumn={props.textColumn}>
                    <h3>{props.title}</h3>
                    <div>
                        <p>Take a look</p>
                        <svg width="34" height="8" viewBox="0 0 34 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z" fill="black"/>
                        </svg>
                    </div>
                </Text>
                
            </Group>
        </CaseBanner>
    </Wrapper>
)

CasesEven.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textColumn: PropTypes.string,
}

export default CasesEven