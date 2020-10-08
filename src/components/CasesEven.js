import React from 'react'
import styled from 'styled-components'

const CaseBanner = styled.div `
    margin: 0;
    width: 100%;
    height: 510px;
    position: relative;
    transition: 0.2s cubic-bezier(0.2, 0.8, 0.8, 1);
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    img {
        left: 0;
        z-index: -2;
        width: 50vw;
        height: 510px;
        top:0;
        object-fit: cover;
    }
    p svg {
        position: absolute;
    }
    &:hover {
        background-color: rgba(198,236,253,0.8);
        background-blend-mode: difference;
    }
    @media (max-width: 600px) {
        margin-bottom: 12px;
        height: 100%;
        img {
            height: 200px;
            width: 100vw;
        }
    }
/*    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgb(0,0,0,0.1);
    }*/
`
const OverlayingBorder = styled.div `
    position: absolute;
    margin: auto;
    max-width: 980px;
    height: 320px;
    z-index: 1;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    margin-left:auto;
    border: 6px solid #C6ECFD;
    transition: 0.2s cubic-bezier(0.2, 0.8, 0.8, 1);
    &:hover {
        border: 6px solid white;
        cursor: url('../images/shovel.png'), auto;
    }
    @media (max-width: 600px) {
        height: 100%;
        border: 12px solid #C6ECFD;
    }
`
const Title = styled.h3 `
    color: black;
    font-size: 40px;
    font-weight: 900;
    max-width: 425px;
    right: 40px;
    @media (max-width: 900px) {
        font-size: 36px;
    }
    @media (max-width: 600px) {
        font-size: 26px;
        right: 0;
    }
`
const TextRight = styled.div `
    right: 0;
    padding-left: 40px;
    p {
        display: inline;
        padding-right: 15px;
    }
    @media (max-width: 900px) {
        padding: 0 0 30px 30px;
    }
`
const Group = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: left;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
        align-items: baseline;
    }

`

const CasesEven = props => (
    <CaseBanner>
        <OverlayingBorder></OverlayingBorder>
        <Group>
            <img src={props.image} />
            <TextRight>
                <Title>{props.title}</Title>
                <p>Read more</p>
                <svg width="34" height="8" viewBox="0 0 34 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z" fill="black"/>
                </svg>
            </TextRight>
        </Group>
    </CaseBanner>
)

export default CasesEven