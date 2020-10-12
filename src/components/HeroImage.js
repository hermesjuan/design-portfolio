import React from 'react'
import styled from 'styled-components'

const HeroImage = styled.div ` 
    img {
        width: 100%;
        height: auto;
        max-height: 700px;
    }
    @media (max-width: 640px) {
        img { height: 300px; }
    }
`

export default HeroImage