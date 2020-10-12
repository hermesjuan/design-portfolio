import React from 'react'
import styled from 'styled-components'

const CasesTextNexToImage = styled.div `
    display: grid;
    grid-template-columns: 1fr 0.3fr;
    grid-column-gap: 30px;
    img {align-self: end;}
    @media (max-width: 640px) {
        grid-template-columns: 1fr 0;
    }

`

export default CasesTextNexToImage