import React from 'react'
import styled from 'styled-components'

const Image = styled.img `
    width: 100%;
    max-height: 700px;
    object-fit: cover;
    text-align: center;
    @media (max-width: 640px) {
        height: 300px;
    }
`

const HeroImage = props => (
    <Image src={props.src} alt={props.alt}/>
)

export default HeroImage