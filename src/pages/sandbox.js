import React from "react"
import Layout from "../components/layout"
import { darken, lighten, setLightness } from "polished"
import styled from 'styled-components'

const Wrapper = styled.div `
    --brandColor1: #0B2339;
    --neutral-light: ${setLightness(0.98, '#0B2339')};
    --neutral-dark: ${setLightness(0.05, '#0B2339')};
    --brandColor2: #FB3B1F;
    --neutral-dark-2: ${setLightness(0.99, '#FB3B1F')};
    --neutral-light-2: ${setLightness(0.99, '#FB3B1F')};
`


const Example1 = styled.div `
    padding: 100px 100px;
    width: 100%;
    background-color: var(--neutral-dark);
    h1 {
        color: var(--brandColor1);
    }

`
const Example2 = styled.div `
    padding: 100px 100px;
    width: 100%;
    background-color: var(--neutral-light);
    h1 {
        color: var(--brandColor1);
    }

`
const Example3 = styled.div `
    width: 100%;
    background-color: var(--neutral-light-2);
    h1 {
        color: var(--brandColor2);
    }

`
const Example4 = styled.div `
    width: 100%;
    background-color: var(--neutral-light-2);
    h1 {
        color: var(--brandColor2);
    }

`
const Sandbox = () => (
  <Layout>   
    <Wrapper>
        <Example1>
            <h1>This is a page where I test things I´m learning</h1>
        </Example1>
        <Example2>
            <h1>This is a page where I test things I´m learning</h1>
        </Example2>
        <Example3>
            <h1>This is a page where I test things I´m learning</h1>
        </Example3>
        <Example4>
            <h1>This is a page where I test things I´m learning</h1>
        </Example4>
    </Wrapper>

  </Layout>  
)

export default Sandbox
